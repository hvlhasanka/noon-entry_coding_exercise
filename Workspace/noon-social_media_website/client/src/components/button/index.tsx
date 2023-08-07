import React from "react";
import styles from "./index.module.scss";
import Image, { StaticImageData } from "next/image";
import LikeImage from "@/assets/images/like.png";
import LikeCheckedImage from "@/assets/images/like-checked.png";
import DislikeImage from "@/assets/images/dislike.png";

interface Props {
  label?: string;
  isIconButton?: boolean;
  buttonType: "LIKE" | "DISLIKE";
  onClickActionFunc: Function;
  recordId: number;
  refetchFunc: Function;
  isSelected?: boolean;
}

const Button = (props: Props) => {
  const {
    label,
    isIconButton,
    buttonType,
    onClickActionFunc,
    recordId,
    refetchFunc,
    isSelected,
  } = props;

  const buttonOnClick = async () => {
    if (!isSelected) {
      const [isError, data] = await onClickActionFunc?.(recordId);

      if (isError) {
        alert(`Unable to ${buttonType === "LIKE" ? "like" : "unlike"} post`);
        console.error(data);
      } else {
        alert(buttonType === "LIKE" ? "Post liked" : "Post disliked");
        await refetchFunc();
      }
    } else {
      alert("Post already liked");
    }
  };

  const getImageSrc = (): StaticImageData => {
    if (buttonType === "LIKE") {
      if (!isSelected) {
        return LikeImage;
      } else {
        return LikeCheckedImage;
      }
    } else {
      return DislikeImage;
    }
  }

  return (
    <div>
      {isIconButton ? (
        <Image
          onClick={buttonOnClick}
          className={
            `${styles.iconButton} ${buttonType === "LIKE" && styles.iconLikeButton} ${buttonType === "DISLIKE" && styles.iconDislikeButton}`}
          src={getImageSrc()}
          width={100}
          height={100}
          alt="like-icon-button"
          title={buttonType === "LIKE" ? "Like post" : "Dislike post"}
          data-testid="button"
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
