import { Guid } from "guid-typescript";

export interface LoginLog{
    loginLogId: Guid;
    userId: Guid;
    loginDate: Date;
    logoutDate: Date;
    
    //------------\\

    // user: User;
}
