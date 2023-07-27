import styles from './layout.scss';

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return <div className={styles.container}>{children}</div>;
}

export default Layout;