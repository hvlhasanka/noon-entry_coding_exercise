import React from "react";
import { Post } from "@/types";
import styles from "./index.module.scss";
import { Button } from "..";
import Image from "next/image";

interface Props {
  postDetails: Post;
  dislikePostFunc: Function;
  postRefetchFunc: () => Promise<void>;
}

const LikedPostsCell = (props: Props) => {
  const {
    postDetails,
    dislikePostFunc,
    postRefetchFunc,
  } = props;

  return (
    <div className={styles.likedPostsCellContainer}>
      <div className={styles.likedPostsCellHeader}>
        <div className={styles.likedPostsCellAccountDetails}>
          <Image
            src={postDetails.accountProfileImageUrl}
            alt="profile-image"
            className={styles.likedPostsCellAccountProfileImage}
            width={30}
            height={30}
          />
          <p className={styles.likedPostsCellAccountUsername}>
            {postDetails.accountUsername}
          </p>
        </div>
      </div>
      <div className={styles.likedPostsCellBody}>
        <Image
          src={postDetails.postImageUrl}
          alt="post-image"
          className={styles.likedPostsCellPostImage}
          width={100}
          height={100}
        />
        <div className={styles.likedPostsCellPostDetails}>
          <p className={styles.likedPostsCellPostHeading}>
            {postDetails.postHeading}
          </p>
          <p className={styles.likedPostsCellPostPrice}>
            {`AED ${postDetails.postPrice.toString()}`}
          </p>
        </div>
        <div className={styles.likedPostsCellDislikeButton}>
          <Button
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

export default LikedPostsCell;
