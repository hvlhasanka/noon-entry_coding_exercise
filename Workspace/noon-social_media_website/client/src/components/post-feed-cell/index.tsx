import React from "react";
import styles from "./index.module.scss";
import { Post } from "@/types";
import Image from "next/image";
import { Button } from "..";
import LikeCheckedImage from "@/assets/images/like-checked.png";

interface Props {
  postDetails: Post;
  likePostFunc: Function;
  postRefetchFunc: () => Promise<void>;
};

const PostFeedCell = (props: Props) => {
  const { postDetails, likePostFunc, postRefetchFunc } = props;

  return (
    <div className={styles.postFeedCellContainer}>
      <div className={styles.postFeedCellHeader}>
        <div className={styles.postFeedCellAccountDetails}>
          <Image
            src={postDetails.accountProfileImageUrl}
            alt="profile-image"
            className={styles.postFeedCellAccountProfileImage}
            width={30}
            height={30}
          />
          <p className={styles.postFeedCellAccountUsername}>
            {postDetails.accountUsername}
          </p>
        </div>
      </div>
      <div className={styles.postFeedCellBody}>
        <Image
          src={postDetails.postImageUrl}
          alt="post-image"
          className={styles.postFeedCellPostImage}
          width={300}
          height={300}
        />
        <div className={styles.postFeedCellPostDetails}>
          <p className={styles.postFeedCellPostHeading}>
            {postDetails.postHeading}
          </p>
          <p className={styles.postFeedCellPostPrice}>
            {`AED ${postDetails.postPrice.toString()}`}
          </p>
        </div>
        <div className={styles.postFeedCellLikeButton}>
          <Button
            buttonType="LIKE"
            onClickActionFunc={likePostFunc}
            recordId={postDetails.id}
            refetchFunc={postRefetchFunc}
            isSelected={postDetails.isLiked || false}
          />
        </div>
      </div>
      <div className={styles.postFeedCellFooter}>
        <div className={styles.postFeedCellLikesCount}>
          <Image
            src={LikeCheckedImage}
            alt="like-icon"
            className={styles.postFeedCellLikeIcon}
            width={20}
            height={20}
          />
          <p className={styles.postFeedCellLikesCountValue}>
            {`${postDetails.noOfLikes.toString()} likes`}
          </p>
        </div>
        <p className={styles.postFeedCellDescription}>
          {postDetails.postDescription}
        </p>
        <p className={styles.postFeedCellHashtags}>
          {postDetails.postHashtags}
        </p>
        <p className={styles.postFeedCellViewPostComments}>
          {`View ${postDetails.numberOfPostComments} comments`}
        </p>
      </div>
    </div>
  );
};

export default PostFeedCell;
