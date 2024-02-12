import "./badge.scss";
import { Size } from "../../types";
import { useTheme } from "../../providers/theme";
import {
  getSecondaryBorderTheme,
  getSecondaryTheme,
} from "../../utils/provider.utils";

export type BadgeProps = {
  children: React.ReactNode;
  size?: Size;
};

export default function Badge({ children, size = "md" }: BadgeProps) {
  const { theme } = useTheme();
  return (
    <div
      className={`badge ${getSecondaryTheme(theme)} ${getSecondaryBorderTheme(
        theme
      )} ${size}`}
    >
      {children}
    </div>
  );
}
