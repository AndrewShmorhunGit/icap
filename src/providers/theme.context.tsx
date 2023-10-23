"use client";
import { useTheme } from "@/hooks/useTheme";
import { TTheme } from "@/types";
import { ReactNode, createContext, useContext, useEffect } from "react";

export const ThemeContext = createContext<TTheme | null>(null);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const { isMode, toggleTheme, checkTheme, isLightTheme } = useTheme();

  return (
    <ThemeContext.Provider
      value={{ isMode, toggleTheme, checkTheme, isLightTheme }}
    >
      {isMode && children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
}
