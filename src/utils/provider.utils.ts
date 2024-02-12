import { Theme } from "../providers/theme";

const getPrimaryTheme = (theme: Theme) => {
  return theme + "-primary";
};
const getPrimaryBorderTheme = (theme: Theme) => {
  return theme + "-primary-border";
};

const getSecondaryTheme = (theme: Theme) => {
  return theme + "-secondary";
};
const getSecondaryBorderTheme = (theme: Theme) => {
  return theme + "-secondary-border";
};

const getErrorTheme = (theme: Theme) => {
  return theme + "-error";
};
const getErrorBorderTheme = (theme: Theme) => {
  return theme + "-error-border";
};

export {
  getPrimaryTheme,
  getSecondaryTheme,
  getErrorTheme,
  getPrimaryBorderTheme,
  getSecondaryBorderTheme,
  getErrorBorderTheme,
};
