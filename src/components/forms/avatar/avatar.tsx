import "./avatar.scss";
import { Size } from "../../../types";
import { ChangeEvent, useCallback } from "react";
import imageCompression, { Options } from "browser-image-compression";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export type AvatarProps = {
  id?: string;
  imgUrl?: string;
  defaultImage?: any;
  link?: string;
  shape?: "square" | "circle" | "rectangle";
  size?: Size;
  onClick?: Function;
  onChange?: Function;
};

export default function Avatar({
  id = "",
  imgUrl = "",
  defaultImage = faUser,
  shape = "circle",
  link = "",
  size = "md",
  onClick,
  onChange,
}: AvatarProps) {
  const editImage = () => {
    if (onChange) document.getElementById("imgfile")?.click();
  };

  const changeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      // ファイルが選択されていない場合は､から文字を設定する
      if (!event.target.files!.length) {
        onChange("");
        return;
      }
      const options: Options = {
        maxSizeMB: 0.05,
      };

      const file = await imageCompression(event.target.files![0], options);
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Text = e.target!.result;
        onChange(base64Text);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderAvatar = useCallback(() => {
    return (
      <>
        <input
          id="imgfile"
          accept="image/*"
          type="file"
          style={{ display: "none" }}
          onChange={(event) => changeImage(event)}
        />
        <div
          className={shape}
          onClick={() => {
            editImage();
          }}
        >
          {imgUrl ? (
            <img className={"avatarImage"} alt={id || ""} src={imgUrl} />
          ) : (
            <FontAwesomeIcon icon={defaultImage} className={"avatarImage"} />
          )}
        </div>
      </>
    );
  }, [imgUrl, defaultImage, shape]);

  return (
    <div className={`avatar ${size}`}>
      {/* リンクあり */}
      {link ? <a href={link}>{renderAvatar()}</a> : renderAvatar()}
    </div>
  );
}
