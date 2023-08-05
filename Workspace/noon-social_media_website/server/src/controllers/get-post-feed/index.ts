import { Post } from "../../types/index";
import PostData from "../../data/posts.json";

const getPostFeed = (): Array<Post> => {
  return PostData;
};

export default getPostFeed;
