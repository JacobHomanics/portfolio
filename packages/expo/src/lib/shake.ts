const GRAVITY_MPS2 = 9.80665;

/** Resting acceleration is about 1g. A deliberate shake crosses this. */
export const SHAKE_FORCE_THRESHOLD = 2.4;
export const SHAKE_MIN_HIT_GAP_MS = 150;
export const SHAKE_WINDOW_MS = 700;
export const SHAKE_COOLDOWN_MS = 1500;

type Acceleration = {
  x: number | null;
  y: number | null;
  z: number | null;
};

/** Web `devicemotion` acceleration is meters per second squared. Native readings are already in g. */
export function gForceFromMetersPerSecondSquared(acceleration: Acceleration | null): number | null {
  if (!acceleration || acceleration.x == null || acceleration.y == null || acceleration.z == null) return null;
  return Math.hypot(acceleration.x, acceleration.y, acceleration.z) / GRAVITY_MPS2;
}

export function createShakeTracker(onShake: () => void, now: () => number = Date.now) {
  let hits = 0;
  let firstHit = 0;
  let lastHit = Number.NEGATIVE_INFINITY;
  let cooldownUntil = 0;

  return (force: number) => {
    const time = now();
    if (time < cooldownUntil || force < SHAKE_FORCE_THRESHOLD || time - lastHit < SHAKE_MIN_HIT_GAP_MS) return;

    if (hits === 0 || time - firstHit > SHAKE_WINDOW_MS) {
      hits = 1;
      firstHit = time;
      lastHit = time;
      return;
    }

    hits = 0;
    cooldownUntil = time + SHAKE_COOLDOWN_MS;
    onShake();
  };
}

export function isIosWeb(nav: { userAgent: string; platform: string; maxTouchPoints: number }): boolean {
  if (/iPad|iPhone|iPod/.test(nav.userAgent)) return true;
  return nav.platform === "MacIntel" && nav.maxTouchPoints > 1;
}
