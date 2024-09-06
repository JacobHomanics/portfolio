"use client";

import { useEffect, useState } from "react";
import { useGlobalState } from "~~/services/store/store";

// import { useTheme } from "next-themes";
// import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const SwitchWeb = ({ className }: { className?: string }) => {
  // const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // const isDarkMode = resolvedTheme === "dark";

  const { isWeb3, setIsWeb3 } = useGlobalState();

  const handleToggle = () => {
    if (isWeb3) {
      setIsWeb3(false);
      return;
    }
    setIsWeb3(true);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex space-x-2 h-8 items-center justify-center text-sm ${className}`}>
      <input
        id="theme-toggle"
        type="checkbox"
        className="toggle toggle-primary bg-primary hover:bg-primary border-primary"
        onChange={handleToggle}
        checked={isWeb3}
      />
      <label htmlFor="theme-toggle" className={`swap swap-rotate ${!isWeb3 ? "swap-active" : ""}`}>
        <div className="swap-on h-5 w-5">Offchain</div>
        <div className="swap-off h-5 w-5">ENS</div>
      </label>
    </div>
  );
};
