import { Response } from "express";
import { getPostFeedController } from "../../controllers";

const getPostFeedResolver = (res: Response) => {
  try {
    res.status(200).json(getPostFeedController());
  } catch (error) {
    res.status(500).json({
      error: `Error: ${error}`,
    });
  }
};

export default getPostFeedResolver;
