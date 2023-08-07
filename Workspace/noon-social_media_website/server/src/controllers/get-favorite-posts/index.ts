import { ProcessedPost } from "../../types/index";
import data from "../../data/posts.json";
import { formatPostData } from "../../utils";

const getFavoritePostsController = (): Array<ProcessedPost> | null => {
  const favoritePosts = data.filter(post => post.isLiked);

  return favoritePosts.length > 0 ? formatPostData(favoritePosts) : null;
};

export default getFavoritePostsController;
