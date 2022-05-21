import { Guid } from "guid-typescript";

export interface ParentClient{
    parentClientId: Guid;
    parentId: Guid;
    clientId: Guid;

    // client: Client;
    // parent: Parent;
}
