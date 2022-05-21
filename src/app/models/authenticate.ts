import { Guid } from "guid-typescript";

export interface Authenticate{
  authenticateId: Guid;
  name: string;
  description: Guid;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;
  status: boolean;
}
