import { Guid } from "guid-typescript";
import { User } from "./user";

export interface LoginLog{
    loginLogId: Guid;
    userId: Guid;
    loginDate: Date;
    logoutDate: Date;

    user: User;
}
