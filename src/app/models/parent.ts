import { Guid } from "guid-typescript";
import { ParentClient } from "./parentClient";
import { User } from "./user";

export interface Parent {
    parentId: Guid;
    userId: Guid;
    identityNumber: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: number;
    maritalStatus: boolean;
    realBirthDate: Date;
    birthDateOnIdentity: Date;

    user : User;
    parentClients : ParentClient[];
}
