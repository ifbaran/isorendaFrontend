import { Guid } from "guid-typescript";

export interface File{
  fileId: Guid;
  name: string;
  path: string;
  status: boolean;
}
