import { Guid } from "guid-typescript";

export interface Like {
  likeId: Guid;
  postId: Guid;
  userId: Guid;
  likeDate: Date;
  status: boolean;
}
