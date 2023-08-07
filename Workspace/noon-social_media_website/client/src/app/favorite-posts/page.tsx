"use client"

import React, { useEffect, useState } from "react";
import { RowLayout } from "@/components";
import { Post } from "@/types";
import { getFavoritePosts, dislikePost } from "@/services";

const FavoritePosts = () => {
  const [favoritePosts, setFavoritePosts] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchFavoritePostsData = async () => {
    setIsLoading(true);
    const [isError, favoritePosts] = await getFavoritePosts();
    setIsLoading(false);
    if (isError) {
      console.error(isError);
      setIsError(favoritePosts);
      return;
    }
    setFavoritePosts(favoritePosts as Array<Post>);
  };

  useEffect(() => {
    fetchFavoritePostsData();
  }, []);

  return (
    <RowLayout
      postItems={favoritePosts}
      postItemCellComponentType="FAVORITE_POSTS_CELL"
      dislikePostFunc={dislikePost}
      postRefetchFunc={fetchFavoritePostsData}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default FavoritePosts;
