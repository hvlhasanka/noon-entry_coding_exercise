import axios from "axios";
import configs from "@/configs";
import { Post } from "@/types";
import { getPostFeedPathname } from "@/pathnames";

type SuccessResponse = [boolean, Array<Post>];
type ErrorResponse = [boolean, any];

const { apiBaseUrl } = configs;

const getPostFeed = async (): Promise<SuccessResponse | ErrorResponse> => {
  let postFeed: Array<Post> = [];
  let resError: any;

  await axios.get(`${apiBaseUrl}${getPostFeedPathname}`).then(response => {
    postFeed = response.data;
  }).catch(error => {
    resError = error;
  });

  if (resError) {
    return [true, resError];
  }

  return [false, postFeed];
};

export default getPostFeed;
