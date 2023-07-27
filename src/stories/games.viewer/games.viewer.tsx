import styles from './games.viewer.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Game } from "../../entities"
import { useLocale } from '@/hooks/use.locale';
import { useRouter } from 'next/router';
import { SkeltonGame } from '../skelton/skelton';

type GamesViewerProps = {
    gameList: Game[],
    userCount: { [gameId: number]: number },
    roomCount: { [gameId: number]: number },
    allCount: { [gameId: number]: number },
}

export default function GamesViewer({ gameList, userCount, roomCount, allCount }: GamesViewerProps) {
    const { locale } = useLocale();
    const router = useRouter();

    return (
        <div className={styles.gameList}>
            {gameList.length ? gameList.map((game: Game) => {
                return (
                    <Link key={game.uid} className={`${styles.game} box`} href={`/customer/rating?gameId=${game.uid}`} >
                        <div className={`box-header ${styles.title}`}>{locale == 'ja' ? game.name : game.nameEn}</div>

                        <Image alt={game.name} fill className={styles.gameImage} src={game.imageUrl!}></Image>
                        {/* TODO : 参加者 -> lo. */}
                        {/* <div className={styles.players}>参加者: {userCount[game.uid]}人</div> */}
                        <div className={styles.players}>試合中: {roomCount[game.uid]}人</div>
                        <div className={styles.players}>累計: {allCount[game.uid]}部屋</div>

                    </Link>
                )
            }) : [0, 1, 2, 3, 4, 5].map((key: number) => {
                return (<div key={`skelton-game-${key}`} className={`${styles.game} box`}>
                    <SkeltonGame />
                </div>)
            })}
        </div>
    );
}