import styles from './header.scss';
import Image from 'next/image';
import Link from 'next/link';
import bannerImg from '../../../public/banner.svg';
import { useCallback, useContext, useState } from 'react';
import { useLocale } from '../../hooks/use.locale';
import { AuthContext } from '@/libs/providers/auth.provider';
import { useRouter } from 'next/router';
import { Button, Menu, NewTabLink } from '@/components';
import { AlertContext } from '@/libs/providers/alert/alert.provider';


type HeaderProps = {
    isMenu?: boolean,
}

export default function Header({ isMenu = true }: HeaderProps) {
    const router = useRouter();
    const { lo } = useLocale();
    const { currentUser, setCurrentUser, appLogin, appLogout } = useContext(AuthContext);
    const { createAlert } = useContext(AlertContext);
    const [searchText, setSearchText] = useState<string>('');

    const onClickLoginBtn = async () => {
        try {
            await appLogin!();
            createAlert!('logged_in', lo.COMMON.MESSAGES.INFO.LOGIN);
        } catch (e: any) {
            if (e && e.errorCode == 'ACCOUNT_STATUS_WITHDRAWAL_ERROR') {
                createAlert!('loginWithdrawalError', lo.COMMON.MESSAGES.ERROR.ACCOUNT_STATUS_WITHDRAWAL_ERROR);
            }
            else if (e && e.errorCode == 'ACCOUNT_STATUS_BAN_ERROR') {
                createAlert!('loginBanError', lo.COMMON.MESSAGES.ERROR.ACCOUNT_STATUS_BAN_ERROR);
            }
            else {
                createAlert!('loginError', lo.COMMON.MESSAGES.ERROR.LOGIN_ERROR);
            }
        }
    }

    const onClickLogoutBtn = async () => {
        await appLogout!();
        createAlert!('logged_out', lo.COMMON.MESSAGES.INFO.LOGOUT);
    }

    const doSearch = async () => {
        // TODO : 検索機能の実装
    }


    const loginDom = useCallback(() => {
        return (<>
            {!currentUser
                ? <Button label={lo.COMMON.LABEL.LOGIN} onClick={onClickLoginBtn} />
                : <Button label={lo.COMMON.LABEL.LOGOUT} onClick={onClickLogoutBtn} />
            }
        </>);
    }, [currentUser]);

    return (<div className={styles.header}>
        <div className={styles.headerLine}>
            <div className="left">
                <Link href="/" className={styles.logo}>
                    <Image alt="ロゴ" className={styles.logo} src={bannerImg}></Image>
                </Link>
                {/* タブレットならヘッダーにメニューを表示する */}
                <div className={`${styles.linkGroup}`}>
                    {/* プロフィール */}
                    {
                        !currentUser
                            ? null
                            : <>
                                <Link className={styles.headerItem} href={`/customer/profile?id=${currentUser.id}`}>{lo.PAGES.CUSTOMER.PROFILE.LABEL}</Link>
                            </>
                    }
                    {/* Q&A */}
                    <Link className={styles.headerItem} href="/qa">{lo.PAGES.ALL.QA.LABEL}</Link>

                    {/* お問合せ */}
                    <NewTabLink href="https://forms.gle/XV2EHnaLHN66FZRU9"><span className={styles.headerItem}>{lo.PAGES.ALL.CONTACT.LABEL}</span></NewTabLink>
                </div>
            </div>
            <div className="right">
                {/* TODO: 最初は日本語から 言語切替  */}
                {/* <span className={styles.locale}>
                    <ChangeLocale url={router.asPath}></ChangeLocale>
                </span> */}

                {/* ログインボタン */}
                <span className={styles.loginBtn}>
                    {loginDom()}
                </span>
                {/* モバイル用メニュー */}
                {isMenu ? <span className={styles.menuBtn}><Menu /></span> : <></>}
            </div>
        </div>
    </div>);
}