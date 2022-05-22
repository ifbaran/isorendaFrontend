import { Guid } from "guid-typescript";
import { Post } from "./post";
import { User } from "./user";

export interface Like {
  likeId: Guid;
  postId: Guid;
  userId: Guid;
  likeDate: Date;
  status: boolean;

  post: Post;
  user: User;
}
