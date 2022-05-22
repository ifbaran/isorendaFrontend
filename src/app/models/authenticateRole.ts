import { Guid } from "guid-typescript";
import { Authenticate } from "./authenticate";
import { Role } from "./role";

export interface AuthenticateRole{
  authenticateRoleId: Guid;
  authenticateId: Guid;
  roleId: Guid;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;

  authenticate: Authenticate;
  role: Role;
}
