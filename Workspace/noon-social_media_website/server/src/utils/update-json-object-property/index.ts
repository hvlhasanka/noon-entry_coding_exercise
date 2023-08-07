import { writeFileSync } from "fs";
import { SuccessReturn, ErrorReturn } from "../../types";

interface Args {
  objId: number;
  dataValues: {
    isLiked: boolean,
    noOfLikesAction: "INCREMENT_ONE" | "DECREMENT_ONE"
  };
  dataObjArrToUpdate: Array<any>;
  jsonFilePath: string;
}

const updateJsonObjectProperty = (args: Args): SuccessReturn | ErrorReturn => {
  const {
    objId,
    dataValues,
    dataObjArrToUpdate,
    jsonFilePath,
  } = args;

  try {
    for (let index = 0; index < dataObjArrToUpdate.length; index++) {
      if (dataObjArrToUpdate[index].id === objId) {
        dataObjArrToUpdate[index].isLiked = dataValues.isLiked;

        switch (dataValues.noOfLikesAction) {
          case "INCREMENT_ONE":
            dataObjArrToUpdate[index].noOfLikes = dataObjArrToUpdate[index].noOfLikes + 1
            break;
          case "DECREMENT_ONE":
              dataObjArrToUpdate[index].noOfLikes = dataObjArrToUpdate[index].noOfLikes - 1
              break;
        }

        break;
      }
      if (index === dataObjArrToUpdate.length - 1) {
        // Post record not found
        console.log(new Error(`Record with ID: ${objId} not found`));
        return [true, new Error(`Record with ID: ${objId} not found`)];
      }
    }
  
    const stringifiedData = JSON.stringify(dataObjArrToUpdate, null, 2);
  
    writeFileSync(jsonFilePath, stringifiedData, "utf8");
  } catch (error) {
    console.log(new Error(`Error in updating file, ${error}`));
    return [true, new Error(`Error in updating file, ${error}`)];
  }

  return [false, "Record updated"];
};

export default updateJsonObjectProperty;
