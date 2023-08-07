import React from "react";
import styles from "./index.module.scss";
import { Post } from "@/types";
import { PostFeedCell, FavoritePostsCell, Divider, EmptyContainer, LoadingSpinner, ErrorBlock } from "..";

type PostFeedCellComponentTypeProps = {
  postItemCellComponentType: "POST_FEED_CELL";
  postItems: Array<Post>;
  likePostFunc: Function;
}

type FavoritePostsCellComponentTypeProps = {
  postItemCellComponentType: "FAVORITE_POSTS_CELL";
  postItems: Array<Post> | null;
  dislikePostFunc: Function;
}

type Props = {
  postRefetchFunc: Function;
  isLoading: boolean;
  isError: boolean;
} & (
  PostFeedCellComponentTypeProps | FavoritePostsCellComponentTypeProps
);

const RowLayout = (props: Props) => {
  const {
    postItems,
    postItemCellComponentType,
    postRefetchFunc,
    isLoading,
    isError,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        {isLoading ? (
          <div className={styles.loadingSpinnerContainer}>
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {postItemCellComponentType === "POST_FEED_CELL" && (isError ? (
              <div className={styles.errorBlockContainer}>
                <ErrorBlock label="Unable to retrieve post feed" />
              </div>
            ) : (
              postItems.map((post, index) => (
                <div key={index}>
                  <PostFeedCell
                    postDetails={post}
                    likePostFunc={props.likePostFunc}
                    postRefetchFunc={postRefetchFunc}
                  />
                  {index !== postItems.length - 1 ? <Divider /> : null}
                </div>
              ))
            ))}
            {postItemCellComponentType === "FAVORITE_POSTS_CELL" && (isError ? (
              <div className={styles.errorBlockContainer}>
                <ErrorBlock label="Unable to retrieve liked posts" />
              </div>
            ) : (
              (postItems ? postItems.map((post, index) => (
                  <div key={index}>
                    <FavoritePostsCell
                      postDetails={post}
                      dislikePostFunc={props.dislikePostFunc}
                      postRefetchFunc={postRefetchFunc}
                    />
                    {index !== postItems.length - 1 ? <Divider /> : null}
                  </div>
                )) : (
                  <EmptyContainer />
                )
              )
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default RowLayout;
