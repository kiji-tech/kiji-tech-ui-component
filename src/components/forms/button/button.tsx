"use client";

import "./button.scss";
import { MouseEventHandler } from "react";
import { useTheme } from "../../../providers/theme";
import {
  getPrimaryBorderTheme,
  getPrimaryTheme,
} from "../../../utils/provider.utils";

export type ButtonProps = {
  label: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  outline?: boolean;
  radius?: boolean;
  disabled?: boolean;
};

export default function Button({
  label,
  type = "button",
  onClick = undefined,
  outline = false,
  radius = false,
  disabled = false,
}: ButtonProps) {
  const { theme } = useTheme();

  const getClassName = (): string => {
    let classes: string[] = ["btn"];
    if (outline) classes.push(getPrimaryBorderTheme(theme));
    if (radius) classes.push("radius");
    classes.push(getPrimaryTheme(theme));

    return classes.join(" ");
  };
  return (
    <>
      <button
        className={getClassName()}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}
