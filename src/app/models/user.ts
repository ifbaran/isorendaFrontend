import { Guid } from "guid-typescript";
import { Address } from "./address";
import { Client } from "./client";
import { Company } from "./company";
import { Like } from "./like";
import { LoginLog } from "./loginLog";
import { Mentor } from "./mentor";
import { Parent } from "./parent";
import { RoleUser } from "./roleUser";

export interface User {
    userId: Guid;
    username: string;
    email: string;
    passwordHash: number[];
    passwordSalt: number[];
    status: boolean;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    addresses: Address[];
    clients: Client[];
    comments: Comment[];
    companies: Company[];
    likes: Like[];
    loginLogs: LoginLog[];
    mentors: Mentor[];
    parents: Parent[];
    roleUsers: RoleUser[];
}
