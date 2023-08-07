import Axios from "axios";
import config from "@/configs/development";
import { Post } from "@/types";
import { getFavoritePostsPathname } from "@/pathnames";

type SuccessResponse = [boolean, Array<Post> | null];
type ErrorResponse = [boolean, any];

const { apiBaseUrl } = config;

const getFavoritePosts = async (): Promise<SuccessResponse | ErrorResponse> => {
  let favoritePosts: Array<Post> = [];
  let resError: any;

  await Axios.get(`${apiBaseUrl}${getFavoritePostsPathname}`).then(response => {
    favoritePosts = response.data;
  }).catch(error => {
    resError = error;
  });

  if (resError) {
    return [true, resError];
  }

  return [false, favoritePosts]
};

export default getFavoritePosts;
