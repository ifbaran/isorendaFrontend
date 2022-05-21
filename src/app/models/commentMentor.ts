import { Guid } from "guid-typescript";

export interface CommentMentor{
  commentMentorId: Guid;
  commentId: Guid;
  mentorId: Guid;

  comment: Comment;
}
