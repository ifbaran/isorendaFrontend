import { Guid } from "guid-typescript";
import { Post } from "./post";

export interface CommentPost{
  commentPostId: Guid;
  commentId: Guid;
  postId: Guid;

  comment: Comment;
  post: Post;
}
