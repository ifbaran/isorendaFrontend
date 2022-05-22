import { Guid } from "guid-typescript";
import { AuthenticateRole } from "./authenticateRole";
import { RoleUser } from "./roleUser";

export interface Role {
    roleId: Guid;
    name: string;
    status: boolean;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    authenticateRoles: AuthenticateRole[];
    roleUsers: RoleUser[];
}
