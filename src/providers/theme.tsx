"use client";
import React from "react";

export type Theme = "theme1" | "theme2";
export type ThemeProps = {
  theme: Theme;
};

const ThemeContext = React.createContext({
  theme: "theme2",
} as { theme: Theme });

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeProps;
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

export const useTheme = () => React.useContext(ThemeContext);
