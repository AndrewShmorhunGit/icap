import { useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export const useTheme = () => {
  const { state: isMode, setState: setMode } = useLocalStorageState<string>(
    "mode",
    "light"
  );

  useEffect(() => {
    if (isMode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [isMode]);

  const toggleTheme = () => {
    isMode === "light" ? setMode("dark") : setMode("light");
    document.documentElement.classList.toggle("dark");
  };

  const checkTheme = isMode === "light" ? false : true;
  const isLightTheme = isMode === "light";
  const style = { position: "absolute", top: "1rem" };

  return { isMode, toggleTheme, checkTheme, isLightTheme, style };
};
