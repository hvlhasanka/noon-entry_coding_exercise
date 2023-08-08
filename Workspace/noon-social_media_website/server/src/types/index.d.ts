type Configs = {
  port: number;
}

type MetadataData = {
  createdAt: string;
  updatedAt: string;
};

type Metadata = {
  createdAt: Date;
  updatedAt: Date;
};

type Account = {
  accountUsername: string;
  accountProfileImageUrl: string;
};

type Post = {
  id: number;
  postImageUrl: string;
  postHeading: string;
  postPrice: number;
  noOfLikes: number;
  postDescription: string;
  postHashtags: string;
  numberOfPostComments: number;
  isLiked: boolean;
};

type PostData = Post & Account & MetadataData;
type ProcessedPost = Post & Account & Metadata;
type SuccessReturn = [boolean, string];
type ErrorReturn = [boolean, Error];

export type {
  Configs,
  PostData,
  ProcessedPost,
  SuccessReturn,
  ErrorReturn,
};
