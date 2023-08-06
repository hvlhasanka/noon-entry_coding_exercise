"use client"
import React, { useEffect, useState } from "react";
import getPostFeed from "./get-post-feed";
import { Post } from "@/types";
import styles from "./page.module.scss";
import Components from "@/components";

const { PostFeedCell } = Components;

const PostFeed = () => {
  const [feed, setFeed] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const fetchFeedData = async () => {
    setIsLoading(true);
    const [isError, feedData] = await getPostFeed();
    setIsLoading(false);
    if (isError) {
      console.error(isError);
      setError(feedData);
      return;
    }
    setFeed(feedData as Array<Post>);
  };

  useEffect(() => {
    fetchFeedData();
  }, []);

  return (
    <div className={styles.postFeedContainer}>
      <div className={styles.postFeedContainerContent}>
        {feed?.map((post, index) => (
          <div key={index}>
            <PostFeedCell
              postDetails={post}
            />
            {index !== feed.length - 1 ? <hr className={styles.postFeedCellDivider} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostFeed;
