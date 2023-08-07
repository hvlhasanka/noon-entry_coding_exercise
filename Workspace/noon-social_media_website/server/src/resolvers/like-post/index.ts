import { Request, Response } from "express";
import { isValidNumberString } from "../../utils";
import { likePostController } from "../../controllers";

const likePostResolver = (req: Request, res: Response) => {
  const id = req.params.id;
  const isValidParam = isValidNumberString(id)

  if (!isValidParam) {
    res.status(400).json({
      error: "Invalid request params",
    });
  }

  try {
    const [isError, data] = likePostController(Number(id));

    if (isError) {
      throw data as Error;
    }

    res.status(200).json({
      message: "Post record updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      error: `Post record update failed, ${error}`,
    });
  }
};

export default likePostResolver;
