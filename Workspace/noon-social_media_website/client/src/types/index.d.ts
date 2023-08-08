type Configs = {
  apiBaseUrl: string;
}

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
} & Account;

export type {
  Configs,
  Post,
};
