import React, { createContext, useContext } from "react";

export type Theme = "theme1" | "theme2";
export type ThemeProps = {
  theme: Theme;
};

const ThemeContext = createContext({
  theme: "theme1",
} as { theme: Theme });

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: ThemeProps;
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

export const useTheme = () => useContext(ThemeContext);
