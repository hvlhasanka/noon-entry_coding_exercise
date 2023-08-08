/**
 * Landing (Home) (Post feed) page
 */
"use client"

import React, { useEffect, useState } from "react";
import { Post } from "@/types";
import { RowLayout } from "@/components";
import { getPostFeed, likePost } from "@/services";

const PostFeed = () => {
  const [feed, setFeed] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchPostFeedData = async () => {
    setIsLoading(true);
    const [isError, feedData] = await getPostFeed();
    setIsLoading(false);
    if (isError) {
      console.error(feedData);
      setIsError(isError);
      return;
    }
    setFeed(feedData as Array<Post>);
  };

  useEffect(() => {
    fetchPostFeedData();
  }, []);

  return (
    <RowLayout
      postItems={feed}
      postItemCellComponentType="POST_FEED_CELL"
      likePostFunc={likePost}
      postRefetchFunc={fetchPostFeedData}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default PostFeed;
