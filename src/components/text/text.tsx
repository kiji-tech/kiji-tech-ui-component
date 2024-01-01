import "./text.scss";
import { Bold, Size } from "../../types";

export type TextProps = {
  text: string;
  size: Size;
  weight: Bold | null;
};

export default function Text({ text, size = "md", weight = null }: TextProps) {
  return <div className={`text ${size} ${weight}`}>{text}</div>;
}
