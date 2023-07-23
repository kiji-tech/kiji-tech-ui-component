import styles from './Button.module.scss';

export type ButtonProps = {
    label: string,
    onClick: Function,
    outline?: boolean,
    radius?: boolean,
    color?: 'main' | 'base' | 'clear'
}

export default function Button(props: ButtonProps) {
    const getClassName = (): string => {
        let classes: string[] = [styles.btn];
        if (props.outline) classes.push(styles.outline);
        if (props.color) classes.push(styles[props.color]);
        else classes.push(styles['main']);

        return classes.join(' ');
    }
    return (
        <>
            <button className={getClassName()} onClick={() => props.onClick()}>{props.label}</button>
        </>
    );
}