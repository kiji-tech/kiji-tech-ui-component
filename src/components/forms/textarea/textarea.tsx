"use client";

import { useTheme } from "../../../providers/theme";
import {
  getPrimaryTheme,
  getSecondaryTheme,
} from "../../../utils/provider.utils";
import "./textarea.scss";

export type TextareaProps = {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: Function;
  length?: number;
  disabled?: boolean;
  required?: boolean;
  radius: boolean;
};

export default function Textarea({
  id,
  name,
  label,
  value,
  length = 255,
  disabled = false,
  required = false,
  radius = false,
  onChange = () => {},
}: TextareaProps) {
  const { theme } = useTheme();
  const change = (e: any) => {
    if (typeof e.target.value == "string")
      value = e.target.value.slice(0, length);
    onChange(value);
  };

  return (
    <div className={"inputForms"}>
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
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => change(e)}
        className={`${getSecondaryTheme(theme)} ${radius ? "radius" : ""}`}
        disabled={disabled}
      ></textarea>
      {length && length > 0 ? (
        <p className={`viewLength`}>
          {value ? value.length : 0} / {length}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
