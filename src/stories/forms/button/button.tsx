import { Color } from '../../types';
import './button.scss';

export type ButtonProps = {
    label: string,
    onClick: Function,
    outline?: boolean,
    radius?: boolean,
    color?: Color,
}

export default function Button(props: ButtonProps) {
    const getClassName = (): string => {
        let classes: string[] = ["btn"];
        if (props.outline) classes.push("outline");
        if (props.radius) classes.push("btn-radius");
        if (props.color) classes.push(props.color);
        else classes.push('main');

        return classes.join(' ');
    }
    return (
        <>
            <button className={getClassName()} onClick={() => props.onClick()}>{props.label}</button>
        </>
    );
}