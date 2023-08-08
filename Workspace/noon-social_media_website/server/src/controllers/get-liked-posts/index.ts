import { ProcessedPost } from "../../types/index";
import data from "../../data/posts.json";
import { formatPostData } from "../../utils";

const getLikedPostsController = (): Array<ProcessedPost> | null => {
  const likedPosts = data.filter(post => post.isLiked);

  return likedPosts.length > 0 ? formatPostData(likedPosts) : null;
};

export default getLikedPostsController;
