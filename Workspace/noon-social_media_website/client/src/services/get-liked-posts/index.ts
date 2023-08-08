import axios from "axios";
import configs from "@/configs";
import { Post } from "@/types";
import { getLikedPostsPathname } from "@/pathnames";

type SuccessResponse = [boolean, Array<Post> | null];
type ErrorResponse = [boolean, any];

const { apiBaseUrl } = configs;

const getLikedPosts = async (): Promise<SuccessResponse | ErrorResponse> => {
  let likedPosts: Array<Post> = [];
  let resError: any;

  await axios.get(`${apiBaseUrl}${getLikedPostsPathname}`).then(response => {
    likedPosts = response.data;
  }).catch(error => {
    resError = error;
  });

  if (resError) {
    return [true, resError];
  }

  return [false, likedPosts]
};

export default getLikedPosts;
