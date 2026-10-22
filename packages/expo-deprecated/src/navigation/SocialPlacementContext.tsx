import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";

type SocialPlacementValue = {
  visible: boolean;
  below: boolean;
  toggle: () => void;
};

const hidden: SocialPlacementValue = {
  visible: false,
  below: false,
  toggle: () => {},
};

const SocialPlacementContext = createContext<SocialPlacementValue>(hidden);
const SetSocialPlacementContext = createContext<(value: SocialPlacementValue) => void>(() => {});

export function SocialPlacementProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<SocialPlacementValue>(hidden);

  return (
    <SetSocialPlacementContext.Provider value={setValue}>
      <SocialPlacementContext.Provider value={value}>{children}</SocialPlacementContext.Provider>
    </SetSocialPlacementContext.Provider>
  );
}

export function useSocialPlacement() {
  return useContext(SocialPlacementContext);
}

export function usePublishSocialPlacement(active: boolean, below: boolean, toggle: () => void) {
  const setValue = useContext(SetSocialPlacementContext);

  useLayoutEffect(() => {
    if (!active) {
      setValue(hidden);
      return;
    }
    setValue({ visible: true, below, toggle });
    return () => setValue(hidden);
  }, [active, below, toggle, setValue]);
}
