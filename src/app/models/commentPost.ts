import { Guid } from "guid-typescript";

export interface CommentPost{
  commentPostId: Guid;
  commentId: Guid;
  postId: Guid;

  comment: Comment;
}
