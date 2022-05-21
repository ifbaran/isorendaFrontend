import { Guid } from "guid-typescript";

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

    // user : User;
    // parentClients : ParentClients[];
}
