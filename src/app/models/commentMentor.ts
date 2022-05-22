import { Guid } from "guid-typescript";
import { Mentor } from "./mentor";

export interface CommentMentor{
  commentMentorId: Guid;
  commentId: Guid;
  mentorId: Guid;

  comment: Comment;
  mentor: Mentor;
}
