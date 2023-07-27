import styles from './skelton.scss';

const Skelton = ({ classes }: { classes: string }) => {
    let className = styles.skelton;

    for (let cls of classes.split(' ')) {
        className += ' ' + styles[cls];
    }

    return (<div className={className}></div>);
}

const SkeltonCard = () => {
    return (<>
        <Skelton classes="skelton-circle" />
        <Skelton classes="skelton-fill" />
        <Skelton classes="skelton-half" />
        <Skelton classes="skelton-half" />
        <Skelton classes="skelton-half" />
    </>);
}

const SkeltonList = () => {
    return (<>
        <Skelton classes="skelton-fill" />
        <Skelton classes="skelton-half" />
        <Skelton classes="skelton-half" />
        <Skelton classes="skelton-half" />
    </>);
}

const SkeltonGame = () => {
    return (<>
        <Skelton classes="skelton-image" />
        <Skelton classes="skelton-fill" />
        <Skelton classes="skelton-half" />
        <Skelton classes="skelton-half" />
    </>);
}

const SkeltonRoom = () => {
    return (
        <div className='rowContent'>
            <div className="width-second">
                <Skelton classes="skelton-circle" />
            </div>
            <div className="width-first">
                <Skelton classes="skelton-fill" />
                <Skelton classes="skelton-half" />
                <Skelton classes="skelton-half" />
            </div>
        </div>
    );
}

export { SkeltonCard, SkeltonList, SkeltonGame, SkeltonRoom };
