import { Guid } from "guid-typescript";
import { Client } from "./client";
import { Parent } from "./parent";

export interface ParentClient{
    parentClientId: Guid;
    parentId: Guid;
    clientId: Guid;

    client: Client;
    parent: Parent;
}
