import styles from './footer.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import NewTabLink from '../new.tab.link/new.tab.link';
import { Ad } from '../ad/ad';
import { useLocale } from '@/hooks/use.locale';
type FooterProps = {

}

export default function Footer(props: FooterProps) {
    const { lo } = useLocale();

    return (<>
        <Ad type="square" />
        <div className={`${styles.footer} columnContent`}>
            <div className={`${styles.links}`}>
                {/* ホーム */}
                <Link className={styles.menuItem} href="/">{lo.APP_TITLE}</Link>

                {/* Q&A */}
                <Link className={styles.menuItem} href="/qa">{lo.PAGES.ALL.QA.LABEL}</Link>

                {/* 利用規約 */}
                <Link className={styles.menuItem} href="/conditions">{lo.PAGES.ALL.CONDITIONS.LABEL}</Link>

                {/* プライバシーポリシー */}
                <Link className={styles.menuItem} href="/policy">{lo.PAGES.ALL.POLICY.LABEL}</Link>

                {/* お問合せ */}
                <NewTabLink href="https://forms.gle/XV2EHnaLHN66FZRU9"><span className={styles.menuItem}>{lo.PAGES.ALL.CONTACT.LABEL}</span></NewTabLink>
            </div>
            <div className={styles.description}>
                当サイトはゲーム好きの個人が運営している非公式サービスです｡<br />
                ゲーム販売会社様､関連企業様とは一切関係ありません｡
            </div>
            <div className="rowContent">
                <div className="left">
                    ©2023 キジ
                </div>
                <div className={`${styles.sns} right`}>
                    <NewTabLink href="https://twitter.com/ESpace_0">
                        <FontAwesomeIcon className={styles.snsIcon} icon={faSquareTwitter} />
                    </NewTabLink>
                    <NewTabLink href="https://discord.gg/pjyXSFmWxt">
                        <FontAwesomeIcon className={styles.snsIcon} icon={faDiscord} />
                    </NewTabLink>

                </div>
            </div>
            {/* TODO : 利用規約など */}
            {/* TODO : サービスの使い方 */}
            {/* TODO : © */}

        </div>
    </>);
}