type Account = {
  accountUsername: String;
  accountProfileImageUrl: String;
};

type Post = {
  id: Number;
  postImageUrl: String;
  postHeading: String;
  postPrice: Number;
  noOfLikes: Number;
  postDescription: String;
  postHashtags: String;
  numberOfPostComments: Number;
  isLiked: Boolean;
} & Account;

export type {
  Post,
};
