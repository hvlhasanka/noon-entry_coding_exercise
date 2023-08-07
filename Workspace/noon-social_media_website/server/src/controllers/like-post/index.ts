import postData from "../../data/posts.json";
import { SuccessReturn, ErrorReturn } from "../../types";
import { updateJsonObjectProperty } from "../../utils";

const filePath = "src/data/posts.json";

const likePostController = (id: number): SuccessReturn | ErrorReturn => {
  return updateJsonObjectProperty({
    objId: id,
    dataValues: {
      isLiked: true,
      noOfLikesAction: "INCREMENT_ONE",
    },
    dataObjArrToUpdate: postData,
    jsonFilePath: filePath,
  });
};

export default likePostController;
