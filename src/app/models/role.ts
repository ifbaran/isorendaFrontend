import { Guid } from "guid-typescript";

export interface Role {
    roleId: Guid;
    name: string;
    status: boolean;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    // AuthenticateRoles: AuthenticateRole[];
    // RoleUsers: RoleUser[];
}