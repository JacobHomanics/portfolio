import { Accelerometer } from "expo-sensors";
import { useCallback, useEffect, useRef, useState } from "react";
import { Platform } from "react-native";

import {
  createShakeTracker,
  gForceFromMetersPerSecondSquared,
  isIosWeb,
  webShakePermissionPlan,
} from "@/lib/shake";

const UPDATE_INTERVAL_MS = 100;
const PERMISSION_WAIT_MS = 600;
const MOTION_GRANT_KEY = "jacobhomanics.motion-granted";

let activatedThisDocument = false;

function readStoredGrant(): boolean {
  if (typeof localStorage === "undefined") return false;
  try {
    return localStorage.getItem(MOTION_GRANT_KEY) === "1";
  } catch {
    return false;
  }
}

function storeGrant() {
  activatedThisDocument = true;
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(MOTION_GRANT_KEY, "1");
  } catch {
    // Private browsing can block storage. The in-memory flag still covers this page.
  }
}

function clearGrant() {
  activatedThisDocument = false;
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.removeItem(MOTION_GRANT_KEY);
  } catch {
    // Ignore storage failures and fall back to asking again.
  }
}

export type ShakeAccess = "hidden" | "prompt" | "denied";

type MotionPermissionRequest = () => Promise<PermissionState>;

function motionPermissionRequest(): MotionPermissionRequest | null {
  if (typeof DeviceMotionEvent === "undefined") return null;
  const request = (DeviceMotionEvent as unknown as { requestPermission?: MotionPermissionRequest }).requestPermission;
  if (typeof request !== "function") return null;
  return () => request.call(DeviceMotionEvent);
}

function listenForWebShake(
  onShake: () => void,
  onNeedsPermission: () => void,
  onGranted: () => void,
  onDenied: () => void,
) {
  let sawForce = false;
  let resume: (() => void) | null = null;
  const track = createShakeTracker(onShake);

  const onMotion = (event: DeviceMotionEvent) => {
    const force = gForceFromMetersPerSecondSquared(event.accelerationIncludingGravity);
    if (force == null) return;
    if (!sawForce) {
      sawForce = true;
      stopResume();
      onGranted();
    }
    track(force);
  };

  const stopResume = () => {
    if (!resume) return;
    window.removeEventListener("touchend", resume, true);
    window.removeEventListener("click", resume, true);
    resume = null;
  };

  const armResume = () => {
    resume = () => {
      stopResume();
      const request = motionPermissionRequest();
      if (!request) {
        onDenied();
        return;
      }
      void request().then(
        status => {
          if (status === "granted") onGranted();
          else onDenied();
        },
        () => onDenied(),
      );
    };
    window.addEventListener("touchend", resume, true);
    window.addEventListener("click", resume, true);
  };

  window.addEventListener("devicemotion", onMotion);
  const timeout = window.setTimeout(() => {
    if (sawForce || !motionPermissionRequest()) return;
    const plan = webShakePermissionPlan({
      sawForce,
      storedGrant: readStoredGrant(),
      activatedThisDocument,
    });
    if (plan === "resume-on-gesture") armResume();
    else if (plan === "prompt") onNeedsPermission();
  }, PERMISSION_WAIT_MS);

  return () => {
    window.removeEventListener("devicemotion", onMotion);
    window.clearTimeout(timeout);
    stopResume();
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
          storeGrant();
          settledRef.current = true;
          setAccess("hidden");
        },
        () => {
          clearGrant();
          settledRef.current = true;
          setAccess("denied");
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
        if (status === "granted") {
          storeGrant();
          setAccess("hidden");
          return;
        }
        clearGrant();
        setAccess("denied");
      },
      () => {
        settledRef.current = true;
        clearGrant();
        setAccess("denied");
      },
    );
  }, []);

  return { access, requestAccess };
}
