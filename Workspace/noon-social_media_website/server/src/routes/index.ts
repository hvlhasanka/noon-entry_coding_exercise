import config from "../configs/development";
import express, { Express, Request, Response } from "express";
import controllers from "../controllers";
import cors from "cors";

const { port: PORT } = config;
const {
  getPostFeed,
  getFavoritePosts,
} = controllers;
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
 * Routes
 */
app.get("/noon/api-v1/get-post-feed", (req: Request, res: Response) => {
  res.json(getPostFeed());
});

app.get("/noon/api-v1/get-favorite-posts", (req: Request, res: Response) => {
  res.json(getFavoritePosts());
});

app.patch("/noon/api-v1/like-post/{id}", (req: Request, res: Response) => {});

app.patch("/noon/api-v1/dislike-post/{id}", (req: Request, res: Response) => {});

export default app;
