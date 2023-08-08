import config from "../configs/development";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getPostFeedResolver, getLikedPostsResolver, likePostResolver, dislikePostResolver } from "../resolvers";

const { port: PORT } = config;
const app: Express = express();

/**
 * cors to handle cross origin api requests
 */
app.use(cors());

/**
 * Triggered with server is live
 */
app.listen(PORT, () => {
  console.log(`Server active on port ${PORT}`);
});

/**
 * Routes - GET method
 */
app.get("/noon/api-v1/get-post-feed", (req: Request, res: Response) => getPostFeedResolver(res));

app.get("/noon/api-v1/get-liked-posts", (req: Request, res: Response) => getLikedPostsResolver(res));

/**
 * Routes - PATCH method
 */
app.patch("/noon/api-v1/like-post/:id", (req: Request, res: Response) => likePostResolver(req, res));

app.patch("/noon/api-v1/dislike-post/:id", (req: Request, res: Response) => dislikePostResolver(req, res));

export default app;
