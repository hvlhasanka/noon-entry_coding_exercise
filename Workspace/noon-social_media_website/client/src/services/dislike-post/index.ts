import axios from "axios";
import config from "@/configs/development";
import { dislikePostPathname } from "@/pathnames";

type SuccessResponse = [boolean | string];
type ErrorResponse = [boolean, any];

const { apiBaseUrl } = config;

const dislikePost = async (id: number): Promise<SuccessResponse | ErrorResponse> => {
  let responseData: any;

  await axios.patch(`${apiBaseUrl}${dislikePostPathname}/${id}`).then(response => {
    responseData = response;
  }).catch(error => {
    console.error("error: ", error);
    return [true, error];
  });

  return [false, responseData];
};

export default dislikePost;
