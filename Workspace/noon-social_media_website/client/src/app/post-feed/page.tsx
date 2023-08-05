"use client"
import React, { useEffect, useState } from "react";
import getPostFeed from "./get-post-feed";
import { Post } from "@/types";

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
    <>
      <div>{isLoading}
        {
          feed?.map((post, index) => (
            <div key={index}>{
                post.numberOfPostComments.toString()
              }
            </div>
      ))}
      </div>
      {error && (
        <div>
          Error
        </div>
      )}
    </>
  );
};

export default PostFeed;
