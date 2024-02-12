import { useTheme } from "../../../providers/theme";
import {
  getPrimaryTheme,
  getSecondaryBorderTheme,
  getSecondaryTheme,
} from "../../../utils/provider.utils";
import "./input.scss";

export type InputProps = {
  type: "email" | "search" | "password" | "number" | "text";
  id?: string;
  name?: string;
  label?: string;
  value?: string | number;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  patternDetail?: string;
  min?: number;
  max?: number;
  message?: string;
  onChange?: Function;
  disabled?: boolean;
  radius?: boolean;
};

export default function Input({
  type = "text",
  id,
  name,
  label,
  value,
  required = false,
  placeholder = "",
  pattern = "",
  patternDetail = "",
  min = 0,
  max = 255,
  message = "",
  onChange = () => {},
  disabled = false,
  radius = false,
}: InputProps) {
  const { theme } = useTheme();
  const change = (e: any) => {
    if (typeof e.target.value == "string") value = e.target.value.slice(0, max);
    onChange(value);
  };

  return (
    <div className={"inputForm"}>
      {label ? (
        <>
          <label
            htmlFor={id}
            className={`${getPrimaryTheme(theme)} ${radius ? "radius" : ""}`}
          >
            {label}
            {required ? " *" : ""}
          </label>
          <div className="space"></div>
        </>
      ) : null}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder!}
        value={value}
        className={`${getSecondaryTheme(theme)} ${getSecondaryBorderTheme(theme)} ${radius ? "radius" : ""}`}
        onChange={(e) => {
          change(e);
        }}
        disabled={disabled}
      />
      {typeof value == "string" && max ? (
        <p className={"viewLength"}>{`${value.length} / ${max.toString()}`}</p>
      ) : (
        <></>
      )}
      <p className={"message"}>{message}</p>
    </div>
  );
}
