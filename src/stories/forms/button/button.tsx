import { Color } from '../../types';
import './button.scss';

export type ButtonProps = {
    label: string,
    onClick: Function,
    outline?: boolean,
    radius?: boolean,
    color?: Color,
    disabled?: boolean,
}

export default function Button({ label, onClick, outline = false, radius = false, color, disabled = false }: ButtonProps) {
    const getClassName = (): string => {
        let classes: string[] = ["btn"];
        if (outline) classes.push("outline");
        if (radius) classes.push("btn-radius");
        if (color) classes.push(color);
        else classes.push('main');

        return classes.join(' ');
    }
    return (
        <>
            <button className={getClassName()} disabled={disabled} onClick={() => onClick()}>{label}</button>
        </>
    );
}