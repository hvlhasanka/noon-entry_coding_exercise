/**
 * Liked (Liked posts) page
 */
"use client"

import React, { useEffect, useState } from "react";
import { RowLayout } from "@/components";
import { Post } from "@/types";
import { getLikedPosts, dislikePost } from "@/services";

const LikedPosts = () => {
  const [likedPosts, setLikedPosts] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchLikedPostsData = async () => {
    setIsLoading(true);
    const [isError, likedPosts] = await getLikedPosts();
    setIsLoading(false);
    if (isError) {
      console.error(likedPosts);
      setIsError(isError);
      return;
    }
    setLikedPosts(likedPosts as Array<Post>);
  };

  useEffect(() => {
    fetchLikedPostsData();
  }, []);

  return (
    <RowLayout
      postItems={likedPosts}
      postItemCellComponentType="LIKED_POSTS_CELL"
      dislikePostFunc={dislikePost}
      postRefetchFunc={fetchLikedPostsData}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default LikedPosts;
