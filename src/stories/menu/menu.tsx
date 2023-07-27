import styles from './menu.scss';
import Link from 'next/link';
import menuImg from '../../../public/icons/menu.svg';
import closeImg from '../../../public/icons/close.svg';
import { IconButton } from '@/components';
import { useContext, useState } from 'react';
import { useLocale } from '../../hooks/use.locale';
import { AuthContext } from '../../libs/providers/auth.provider';
import { useRouter } from 'next/router';
import { AlertContext } from '@/libs/providers/alert/alert.provider';
import NewTabLink from '../new.tab.link/new.tab.link';

export default function Menu() {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const { lo } = useLocale();
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const { createAlert } = useContext(AlertContext);
    const router = useRouter();

    const onClickMenu = async () => {
        setIsMenu(!isMenu);
    }

    return (
        <>
            {!isMenu
                // メニューボタン
                ? <>
                    <IconButton
                        alt="メニュー"
                        icon={menuImg}
                        onClick={() => onClickMenu()}
                        color={'main'}
                        radius={true}
                    />
                </>
                // メニュー一覧
                : <div className={styles.menu}>
                    {/* 共通 */}
                    <div className={styles.menuHeader}></div>
                    <Link className={styles.menuItem} onClick={() => { onClickMenu() }} href="/">{lo.PAGES.ALL.GAME_SELECT.LABEL}</Link>
                    {/* ログインユーザ項目 */}
                    {
                        !currentUser
                            ? null
                            : <>
                                {/* <Link className={styles.menuItem} onClick={() => { onClickMenu() }} href="">{lo.PAGES.CUSTOMER.ROOM.LABEL}</Link> */}
                                <Link className={styles.menuItem} onClick={() => { onClickMenu() }} href={`/customer/profile?id=${currentUser.id}`}>{lo.PAGES.CUSTOMER.PROFILE.LABEL}</Link>
                            </>
                    }
                    {/* TODO: ランキング */}

                    {/* Q&A */}
                    <Link className={styles.menuItem} onClick={() => { onClickMenu() }} href="/qa">{lo.PAGES.ALL.QA.LABEL}</Link>

                    {/* 利用規約 */}
                    <Link className={styles.menuItem} onClick={() => { onClickMenu() }} href="/conditions">{lo.PAGES.ALL.CONDITIONS.LABEL}</Link>

                    {/* プライバシーポリシー */}
                    <Link className={styles.menuItem} onClick={() => { onClickMenu() }} href="/policy">{lo.PAGES.ALL.POLICY.LABEL}</Link>

                    {/* お問合せ */}
                    <NewTabLink onClick={() => { onClickMenu() }} href="https://forms.gle/XV2EHnaLHN66FZRU9"><span className={styles.menuItem}>{lo.PAGES.ALL.CONTACT.LABEL}</span></NewTabLink>

                    {/* Admin項目 */}
                    {
                        currentUser && currentUser.role == 'ADMIN'
                            ? <>
                                <div className={styles.menuHeader}>{lo.COMPONENTS.HEADER.MENU.ADMIN_LABEL}</div>
                                <Link className={styles.menuItem} onClick={() => { onClickMenu() }} href="/admin/game.manager">{lo.PAGES.ADMIN.GAME_MANAGER.LABEL}</Link>
                                <Link className={styles.menuItem} onClick={() => { onClickMenu() }} href="">{lo.PAGES.ADMIN.ACCOUNT_MANAGER.LABEL}</Link>
                                <button onClick={() => createAlert!('alertTest', 'アラートテスト')}>アラートテスト</button>
                            </>
                            : null
                    }
                    <span className={styles.closeButton}>
                        <IconButton
                            alt="close"
                            icon={closeImg}
                            color="main"
                            radius={true}
                            onClick={() => { onClickMenu() }}
                        />
                    </span>
                </div>
            }
        </>
    );
}