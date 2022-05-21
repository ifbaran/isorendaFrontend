import { Guid } from "guid-typescript";

export interface RoleUser{
    roleUserId: Guid;
    userId: Guid;
    roleId: Guid;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    //roles: Role[];
    //user: User[];
}