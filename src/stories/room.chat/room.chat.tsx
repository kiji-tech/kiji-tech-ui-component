import styles from './room.chat.scss';
import Image from 'next/image';
import { Account, Room, Chat } from "@/entities";
import { AuthContext } from "@/libs/providers/auth.provider";
import { useCallback, useContext, useEffect, useState } from "react"
import { Button, Input } from "@/components";
import { RoomChatApi } from '@/apis/room.chat/room.chat.api';
import { AlertContext } from '@/libs/providers/alert/alert.provider';
import { useLocale } from '@/hooks/use.locale';
import { CommonUtil } from '@/libs/common.util';
import { Socket } from 'socket.io-client';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VARIABLE_SIZE } from '@/libs/validate.util';

type RoomChatProps = {
    id: number;
    socket: Socket;
}
export default function RoomChat({ id, socket }: RoomChatProps) {
    const { currentUser } = useContext(AuthContext);
    const { createAlert } = useContext(AlertContext);
    const { lo, locale } = useLocale();
    const [message, setMessage] = useState<string>('');
    const [room, setRoom] = useState<Room | undefined>();
    const [me, setMe] = useState<Account | undefined>();


    useEffect(() => {
        let ignore = false;
        let ctrl = new AbortController();
        const fetch = async () => {
            const roomResult = await RoomChatApi.get(id, ctrl).catch(e => null) as Room;
            if (!ignore) {
                if (!roomResult) {
                    createAlert!('FetchApi', 'データの取得に失敗しました.');
                    return;
                }
                setRoom(roomResult);
            }
        };
        fetch();
        return () => {
            ignore = true;
        };
    }, []);

    useEffect(() => {
        if (!me && currentUser && room) {
            let myAccount = room.accounts.find((account: Account) => account.uid == currentUser.uid);
            setMe(myAccount);
        }
    }, [room, currentUser]);

    useEffect(() => {
        if (me) {
            // Serverからメッセージを受信
            socket.on('responseMessage', async (chat: Chat) => {
                const roomResult = await RoomChatApi.get(room!.uid).catch(e => null) as Room;
                setRoom(roomResult)
            });
        }

        return (() => { })
    }, [me]);


    const sendMessage = useCallback(async () => {
        if (!message) return;
        let chat: Chat = {
            roomId: room!.uid,
            from: currentUser!.uid,
            account: currentUser!,
            message,
        }
        socket.emit("sendMessage", chat);
        setMessage('');
        chat = {
            ...chat,
            uid: (new Date()).toString(),
            createdAt: CommonUtil.formatDate2String(new Date(), 'yyyy-MM-dd hh:mm:ss'),
            updatedAt: CommonUtil.formatDate2String(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        };
        setRoom({ ...room!, chats: [...room!.chats, chat] });
    }, [message]);


    const getChatComp = useCallback((chat: Chat) => {
        return (<div className={`rowContent`}>
            <div className={`columnContent ${styles.left}`}>
                {chat.account!.imgUrl ? <Image alt={chat.account!.name} src={chat.account!.imgUrl || ''} fill className={styles.avatar} />
                    : <FontAwesomeIcon icon={faUser} className={styles.avatar} />}
            </div>
            <div className={`columnContent ${styles.right}`}>
                <div className={`rowContent ${styles.header}`}>
                    <div className={`${styles.userName}`}>{chat.account!.name}</div>
                    <div className={`${styles.postingDate}`}>{CommonUtil.formatDate2String(new Date(chat.createdAt!), 'M/d H:mm')}</div>
                </div>
                <div className={`${styles.chat}`} >{chat.message}</div>
            </div>
        </div>);
    }, [currentUser, room]);

    if (!me) return <></>;

    return (<>
        {/* コメント */}
        <div className={`box width-fill`}>
            <div className={`box-header`}>{lo.COMPONENTS.ROOM_CHAT.LABEL}</div>
            <div className={`box-body`}>
                <div className={`rowContent width-fill ${styles.chatBar}`}>
                    <div className={`${styles.messageForm}`}>
                        <Input
                            id='message'
                            type="text"
                            label=''
                            max={VARIABLE_SIZE.CHAT.MAX}
                            value={message}
                            onChange={(e: string) => setMessage(e)} />
                    </div>
                    <div className={`width-short`}>
                        <Button label={lo.COMMON.LABEL.SEND} onClick={() => sendMessage()} />
                    </div>
                </div>

                {/* メッセージ */}
                <div className={`width-fill ${styles.messages}`}>
                    {room ? room.chats.map((chat: Chat) => {
                        return (<div key={chat.uid} className={`${styles.message} width-fill `}>
                            {getChatComp(chat)}
                        </div>);
                    }) : null}
                </div>
            </div>
        </div>
    </>);
}