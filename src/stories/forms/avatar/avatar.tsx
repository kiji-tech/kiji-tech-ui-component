import { Size } from '../../types/Size';
import './avatar.scss';
import { ChangeEvent } from 'react';
import imageCompression, { Options } from 'browser-image-compression';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export type AvatarProps = {
    defaultImage?: any,
    imgUrl?: string,
    name?: string,
    id?: string,
    sponsor?: string,
    link?: string,
    shape?: 'square' | 'circle' | 'rectangle',
    size?: Size,
    onChange?: Function,
}

export default function Avatar({
    imgUrl = '',
    defaultImage = faUser,
    name = '',
    id = '',
    sponsor = '',
    shape = 'circle',
    link = '',
    size = 'md',
    onChange }: AvatarProps) {
    const editImage = () => {
        if (onChange)
            document.getElementById('imgfile')?.click();
    }

    const changeImage = async (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            // ファイルが選択されていない場合は､から文字を設定する
            if (!event.target.files!.length) {
                onChange('');
                return;
            }
            const options: Options = {
                maxSizeMB: 0.05,
            };

            const file = await imageCompression(event.target.files![0], options);
            const reader = new FileReader()
            reader.onload = (e) => {
                const base64Text = e.target!.result;
                onChange(base64Text);
            }
            reader.readAsDataURL(file)
        }
    }
    return (<div className={`avatar ${size}`}>
        {/* リンクあり */}
        {link ?
            <a href={link}>
                <input id='imgfile' accept="image/*" type='file' style={{ display: 'none' }} onChange={(event) => changeImage(event)} />
                <div className={shape} onClick={() => { editImage() }}>
                    {
                        imgUrl
                            ? <img className={"avatarImage"} alt={name || ''} src={imgUrl} />
                            : <FontAwesomeIcon icon={defaultImage} className={"avatarImage"} />
                    }
                </div>
                <p>
                    {sponsor ? <span className={"sponsor"}>【{sponsor || ''}】<br /></span> : null}
                    <span className={"avatarName"}>{name || ''}</span>
                    {id ? <span className={"avatarId"}>@{id || ''}</span> : null}
                </p>
            </a>
            : <>
                {/* リンクなし */}
                <input id='imgfile' accept="image/*" type='file' style={{ display: 'none' }} onChange={(event) => changeImage(event)} />
                <div className={shape} onClick={() => { editImage() }}>
                    {
                        imgUrl
                            ? <img className={"avatarImage"} alt={name || ''} src={imgUrl} />
                            : <FontAwesomeIcon icon={defaultImage} className={"avatarImage"} />
                    }
                </div>
                <p>
                    {sponsor ? <span className={"sponsor"}>【{sponsor || ''}】<br /></span> : null}
                    <span className={"avatarName"}>{name || ''}</span>
                    {id ? <span className={"avatarId"}>@{id || ''}</span> : null}
                </p>
            </>}
    </div>);
}