import { Post } from "../../types/index";
import PostData from "../../data/posts.json";

const getFavoritePosts = (): Array<Post> | null => {
  const favoritePosts = PostData.filter(post => post.isLiked);
  return favoritePosts.length > 0 ? favoritePosts : null;
};

export default getFavoritePosts;
