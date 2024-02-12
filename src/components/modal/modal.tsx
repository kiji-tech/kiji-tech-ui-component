"use client";

import "./modal.scss";
import Button, { ButtonProps } from "../forms/button/button";
import { useTheme } from "../../providers/theme";
import { getPrimaryTheme, getSecondaryTheme } from "../../utils/provider.utils";

export type ModalProps = {
  title: string;
  buttons: ButtonProps[];
  isView?: boolean;
  children: React.ReactNode;
};

export default function Modal({
  title,
  buttons,
  isView = false,
  children,
}: ModalProps) {
  if (!isView) return null;
  const { theme } = useTheme();
  return (
    <div className={`modal ${getPrimaryTheme(theme)}`}>
      <div className={`modalContent ${getSecondaryTheme(theme)}`}>
        <div className={`modalHeader ${getSecondaryTheme(theme)}`}>{title}</div>
        <div className={`space`}></div>
        <div className={`modalChildren ${getSecondaryTheme(theme)}`}>
          {children}
        </div>
        <div className={`space`}></div>
        <div className={`space`}></div>
        <div className={`modalButtons ${getSecondaryTheme(theme)}`}>
          {buttons.map((btn: ButtonProps, index) => {
            return (
              <div className={`width-short`}>
                <Button
                  key={`modal-button${index}`}
                  label={btn.label}
                  radius={btn.radius}
                  onClick={btn.onClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
