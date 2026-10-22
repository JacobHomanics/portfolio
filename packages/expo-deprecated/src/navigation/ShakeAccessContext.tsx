import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";

import type { ShakeAccess } from "@/hooks/useShake";

type ShakeAccessValue = {
  access: ShakeAccess;
  requestAccess: () => void;
};

const hidden: ShakeAccessValue = {
  access: "hidden",
  requestAccess: () => {},
};

const ShakeAccessContext = createContext<ShakeAccessValue>(hidden);
const SetShakeAccessContext = createContext<(value: ShakeAccessValue) => void>(() => {});

export function ShakeAccessProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<ShakeAccessValue>(hidden);

  return (
    <SetShakeAccessContext.Provider value={setValue}>
      <ShakeAccessContext.Provider value={value}>{children}</ShakeAccessContext.Provider>
    </SetShakeAccessContext.Provider>
  );
}

export function useShakeAccess() {
  return useContext(ShakeAccessContext);
}

export function usePublishShakeAccess(access: ShakeAccess, requestAccess: () => void) {
  const setValue = useContext(SetShakeAccessContext);

  useLayoutEffect(() => {
    setValue({ access, requestAccess });
    return () => setValue(hidden);
  }, [access, requestAccess, setValue]);
}
