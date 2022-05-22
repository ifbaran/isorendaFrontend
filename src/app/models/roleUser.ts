import { Guid } from "guid-typescript";
import { Role } from "./role";
import { User } from "./user";

export interface RoleUser{
    roleUserId: Guid;
    userId: Guid;
    roleId: Guid;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    roles: Role[];
    user: User[];
}
