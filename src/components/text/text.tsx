import "./text.scss";
import { Bold, Size } from "../../types";

type TextProps = {
  text: string;
  size: Size;
  weight: Bold | null;
} & React.SuspenseProps;

const Text = ({ text, size = "md", weight = null }: TextProps) => {
  return <div className={`text ${size} ${weight}`}>{text}</div>;
};

export { Text };
