import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";

const SiteRouteContext = createContext("home");
const SetSiteRouteContext = createContext<(name: string) => void>(() => {});

export function SiteRouteProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("home");

  return (
    <SetSiteRouteContext.Provider value={setName}>
      <SiteRouteContext.Provider value={name}>{children}</SiteRouteContext.Provider>
    </SetSiteRouteContext.Provider>
  );
}

export function useSiteRouteName() {
  return useContext(SiteRouteContext);
}

export function useReportSiteRoute(name: string) {
  const setName = useContext(SetSiteRouteContext);
  useLayoutEffect(() => {
    setName(name);
  }, [name, setName]);
}
