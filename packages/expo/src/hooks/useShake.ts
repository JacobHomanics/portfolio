import { Accelerometer } from "expo-sensors";
import { useCallback, useEffect, useRef, useState } from "react";
import { Platform } from "react-native";

import { createShakeTracker, gForceFromMetersPerSecondSquared, isIosWeb } from "@/lib/shake";

const UPDATE_INTERVAL_MS = 100;
const PERMISSION_WAIT_MS = 600;

export type ShakeAccess = "hidden" | "prompt" | "denied";

type MotionPermissionRequest = () => Promise<PermissionState>;

function motionPermissionRequest(): MotionPermissionRequest | null {
  if (typeof DeviceMotionEvent === "undefined") return null;
  const request = (DeviceMotionEvent as unknown as { requestPermission?: MotionPermissionRequest }).requestPermission;
  if (typeof request !== "function") return null;
  return () => request.call(DeviceMotionEvent);
}

function listenForWebShake(onShake: () => void, onNeedsPermission: () => void, onGranted: () => void) {
  let sawForce = false;
  const track = createShakeTracker(onShake);

  const onMotion = (event: DeviceMotionEvent) => {
    const force = gForceFromMetersPerSecondSquared(event.accelerationIncludingGravity);
    if (force == null) return;
    if (!sawForce) {
      sawForce = true;
      onGranted();
    }
    track(force);
  };

  window.addEventListener("devicemotion", onMotion);
  const timeout = window.setTimeout(() => {
    if (!sawForce && motionPermissionRequest()) onNeedsPermission();
  }, PERMISSION_WAIT_MS);

  return () => {
    window.removeEventListener("devicemotion", onMotion);
    window.clearTimeout(timeout);
  };
}

export function useShake(onShake: () => void, enabled: boolean) {
  const onShakeRef = useRef(onShake);
  onShakeRef.current = onShake;
  const settledRef = useRef(false);
  const [access, setAccess] = useState<ShakeAccess>("hidden");

  useEffect(() => {
    if (!enabled) {
      settledRef.current = false;
      setAccess("hidden");
      return;
    }

    if (Platform.OS === "web") {
      if (typeof navigator === "undefined" || !isIosWeb(navigator)) return;
      return listenForWebShake(
        () => onShakeRef.current(),
        () => {
          if (!settledRef.current) setAccess("prompt");
        },
        () => {
          settledRef.current = true;
          setAccess("hidden");
        },
      );
    }

    let subscription: { remove: () => void } | null = null;
    let cancelled = false;
    const track = createShakeTracker(() => onShakeRef.current());

    Accelerometer.setUpdateInterval(UPDATE_INTERVAL_MS);

    void Accelerometer.isAvailableAsync().then(available => {
      if (!available || cancelled) return;

      subscription = Accelerometer.addListener(({ x, y, z }) => {
        track(Math.hypot(x, y, z));
      });

      if (cancelled) subscription.remove();
    });

    return () => {
      cancelled = true;
      subscription?.remove();
    };
  }, [enabled]);

  const requestAccess = useCallback(() => {
    const request = motionPermissionRequest();
    if (!request) {
      setAccess("denied");
      return;
    }

    void request().then(
      status => {
        settledRef.current = true;
        setAccess(status === "granted" ? "hidden" : "denied");
      },
      () => {
        settledRef.current = true;
        setAccess("denied");
      },
    );
  }, []);

  return { access, requestAccess };
}
