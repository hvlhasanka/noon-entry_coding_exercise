type Account = {
  accountUsername: string;
  accountProfileImageUrl: string;
};

type Post = {
  id: Number;
  postImageUrl: string;
  postHeading: string;
  postPrice: Number;
  noOfLikes: Number;
  postDescription: string;
  postHashtags: string;
  numberOfPostComments: Number;
  isLiked: Boolean;
} & Account;

export type {
  Post,
};
