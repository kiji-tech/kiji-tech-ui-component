import './icon.button.scss';
export type IconButtonProps = {
    icon: any,
    alt: string,
    onClick: Function,
    outline?: boolean,
    radius?: boolean,
    color?: 'main' | 'base' | 'clear'
}

export default function IconButton(props: IconButtonProps) {
    const getClassName = () => {
        let classes: string[] = ["iconButton"];
        if (props.outline) classes.push("outline");
        if (props.radius) classes.push("radius");

        return classes.join(' ');
    }
    return (
        <>
            <button className={getClassName()}><img alt={props.alt} src={props.icon} onClick={() => props.onClick()} /></button>
        </>
    );
}