import { Guid } from "guid-typescript";

export interface Authenticate{
  authenticateId: Guid;
  name: string;
  description: string;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;
  status: boolean;
}
