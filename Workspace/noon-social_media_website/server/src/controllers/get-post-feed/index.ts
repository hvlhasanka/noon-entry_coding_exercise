import { ProcessedPost } from "../../types/index";
import data from "../../data/posts.json";
import { formatPostData } from "../../utils";

const getPostFeedController = (): Array<ProcessedPost> => {
  return formatPostData(data);
};

export default getPostFeedController;
