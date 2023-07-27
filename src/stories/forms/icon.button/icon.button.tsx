import './icon.scss';
type IconButtonProps = {
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
        if (props.color) classes.push(props.color);
        else classes.push("main");

        return classes.join(' ');
    }
    return (
        <>
            <button className={getClassName()}><img alt={props.alt} src={props.icon} onClick={() => props.onClick()} /></button>
        </>
    );
}