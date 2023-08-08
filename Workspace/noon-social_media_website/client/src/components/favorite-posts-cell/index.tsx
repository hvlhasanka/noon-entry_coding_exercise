import React from "react";
import { Post } from "@/types";
import styles from "./index.module.scss";
import { Button } from "..";
import Image from "next/image";

interface Props {
  postDetails: Post;
  dislikePostFunc: Function;
  postRefetchFunc: Function;
}

const FavoritePostsCell = (props: Props) => {
  const {
    postDetails,
    dislikePostFunc,
    postRefetchFunc,
  } = props;

  return (
    <div className={styles.favoritePostsCellContainer}>
      <div className={styles.favoritePostsCellHeader}>
        <div className={styles.favoritePostsCellAccountDetails}>
          <Image
            src={postDetails.accountProfileImageUrl}
            alt="profile-image"
            className={styles.favoritePostsCellAccountProfileImage}
            width={30}
            height={30}
          />
          <p className={styles.favoritePostsCellAccountUsername}>
            {postDetails.accountUsername}
          </p>
        </div>
      </div>
      <div className={styles.favoritePostsCellBody}>
        <Image
          src={postDetails.postImageUrl}
          alt="post-image"
          className={styles.favoritePostsCellPostImage}
          width={50}
          height={50}
        />
        <div className={styles.favoritePostsCellPostDetails}>
          <p className={styles.favoritePostsCellPostHeading}>
            {postDetails.postHeading}
          </p>
          <p className={styles.favoritePostsCellPostPrice}>
            {`AED ${postDetails.postPrice.toString()}`}
          </p>
        </div>
        <div className={styles.favoritePostsCellDislikeButton}>
          <Button
            isIconButton
            buttonType="DISLIKE"
            onClickActionFunc={dislikePostFunc}
            recordId={postDetails.id}
            refetchFunc={postRefetchFunc}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoritePostsCell;
