import { PostData, ProcessedPost } from "../../types";

const formatPostData = (posts: Array<PostData>): Array<ProcessedPost> => {
  const formattedPostDataArr: Array<ProcessedPost> = [];

  posts.forEach((post) => {
    const createdAt = new Date(post.createdAt);
    const updatedAt = new Date(post.updatedAt);
    formattedPostDataArr.push({
      ...post,
      createdAt,
      updatedAt,
    });
  });

  return formattedPostDataArr;
};

export default formatPostData;
