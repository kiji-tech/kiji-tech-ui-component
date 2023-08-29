import "./badge.scss";
import { ResultColor, Size } from "../../types";

export type BadgeProps = {
  text: string;
  color?: ResultColor;
  size?: Size;
};

export default function Badge({
  text,
  color = "color-main",
  size = "md",
}: BadgeProps) {
  return (
    <div className={`badge ${color} ${size}`}>
      <p>{text}</p>
    </div>
  );
}
