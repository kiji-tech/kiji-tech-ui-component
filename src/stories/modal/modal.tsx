import styles from './modal.scss'
import Button, { ButtonProps } from "../forms/button/button";

type ModalProps = {
    title: string;
    message: string;
    buttons: ButtonProps[]
}

export default function Modal({ title, message, buttons }: ModalProps) {


    return (<div className={`${styles.modal}`}>
        <div className={`${styles.modalContent}`}>
            <div className={`${styles.modalHeader}`}>{title}</div>
            <div className={`space`}></div>
            <div className={`${styles.modalMessage}`}>{message}</div>
            <div className={`space`}></div>
            <div className={`space`}></div>
            <div className={`btnGroup ${styles.modalButtons}`}>
                {buttons.map((btn: ButtonProps, index) => {
                    return <Button key={`modal-button${index}`} label={btn.label} onClick={() => btn.onClick()} />;
                })}
            </div>
        </div>
    </div>)
}