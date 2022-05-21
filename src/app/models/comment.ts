import { Guid } from "guid-typescript";

export interface Comment{
  commentId: Guid;
  userId: Guid;
  commentContent: string;
  date: Date;
  status: boolean;
}
