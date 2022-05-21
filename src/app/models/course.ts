import { Guid } from "guid-typescript";

export interface Course{
  courseId: Guid;
  name: string;
  clientId: string;
  status: boolean;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;

}
