import { Response } from "express";
import { getLikedPostsController } from "../../controllers";

const getLikedPostsResolver = (res: Response) => {
  try {
    res.status(200).json(getLikedPostsController());
  } catch (error) {
    res.status(500).json({
      error: `Error: ${error}`,
    });
  }
};

export default getLikedPostsResolver;
