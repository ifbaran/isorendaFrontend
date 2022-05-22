import { Guid } from "guid-typescript";
import { CommentMentor } from "./commentMentor";
import { CommentPost } from "./commentPost";
import { User } from "./user";

export interface Comment{
  commentId: Guid;
  userId: Guid;
  commentContent: string;
  date: Date;
  status: boolean;

  user: User;
  commentMentors: CommentMentor[];
  commentPosts: CommentPost[];
}
