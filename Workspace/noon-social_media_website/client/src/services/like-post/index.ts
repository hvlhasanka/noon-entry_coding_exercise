import axios from "axios";
import configs from "@/configs";
import { likePostPathname } from "@/pathnames";

type SuccessResponse = [boolean, string];
type ErrorResponse = [boolean, any];

const { apiBaseUrl } = configs;

const likePost = async (id: number): Promise<SuccessResponse | ErrorResponse> => {
  let responseData: any;

  await axios.patch(`${apiBaseUrl}${likePostPathname}/${id}`).then(response => {
    responseData = response;
  }).catch(error => {
    console.error("error: ", error);
    return [true, error];
  });

  return [false, responseData];
};

export default likePost;
