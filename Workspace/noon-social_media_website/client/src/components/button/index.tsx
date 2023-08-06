import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import LikeIcon from "@/assets/images/like-icon.png";

interface Props {
  label?: string;
  isIconButton?: boolean;
  buttonType?: "LIKE" | "DISLIKE";
}

const Button = (props: Props) => {
  const { label, isIconButton, buttonType } = props;

  return (
    <div>
      {isIconButton ? (
        <Image
          onClick={() => alert("test")}
          className={
            `${styles.iconButton} ${buttonType === "LIKE" && styles.iconLikeButton} ${buttonType === "DISLIKE" && styles.iconDislikeButton}`}
          src={LikeIcon}
          width={50}
          height={50}
          alt="like-icon-button"
        />
      ) : (
        <button>
          {label ?? null}
        </button>
      )}
    </div>
  );
}

export default Button;
