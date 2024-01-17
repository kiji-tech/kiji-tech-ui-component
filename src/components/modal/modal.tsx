import "./modal.scss";
import Button, { ButtonProps } from "../forms/button/button";

export type ModalProps = {
  title: string;
  buttons: ButtonProps[];
  children: React.ReactNode;
};

export default function Modal({ title, children, buttons }: ModalProps) {
  return (
    <div className={"modal"}>
      <div className={"modalContent"}>
        <div className={`modalHeader`}>{title}</div>
        <div className={`space`}></div>
        <div className={`modalChildren`}>{children}</div>
        <div className={`space`}></div>
        <div className={`space`}></div>
        <div className={`modalButtons`}>
          {buttons.map((btn: ButtonProps, index) => {
            return (
              <div className={`width-short`}>
                <Button
                  key={`modal-button${index}`}
                  label={btn.label}
                  radius={btn.radius}
                  color={btn.color}
                  onClick={() => btn.onClick()}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
