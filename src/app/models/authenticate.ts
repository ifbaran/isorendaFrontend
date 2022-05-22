import { Guid } from "guid-typescript";
import { AuthenticateRole } from "./authenticateRole";

export interface Authenticate{
  authenticateId: Guid;
  name: string;
  description: string;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;
  status: boolean;

  authenticateRoles: AuthenticateRole[];
}
