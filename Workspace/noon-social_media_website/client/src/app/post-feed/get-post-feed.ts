import Axios from "axios";
import config from "@/configs/development";
import { Post } from "@/types";

type SuccessResponse = [boolean, Array<Post>];
type ErrorResponse = [boolean, any];

const { apiBaseUrl } = config;
const apiLinkPath = "/get-post-feed"; 

const getPostFeed = async (): Promise<SuccessResponse | ErrorResponse> => {
  let postFeed: Array<Post> = [];
  let resError: any;

  await Axios.get(`${apiBaseUrl}${apiLinkPath}`).then(response => {
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
