import { Response } from "express";
import { getFavoritePostsController } from "../../controllers";

const getFavoritePostsResolver = (res: Response) => {
  try {
    res.status(200).json(getFavoritePostsController());
  } catch (error) {
    res.status(500).json({
      error: `Error: ${error}`,
    });
  }
};

export default getFavoritePostsResolver;
