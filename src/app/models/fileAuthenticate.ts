import { Guid } from "guid-typescript";
import { Client } from "./client";

export interface FileAuthenticate {
  fileAuthenticateId: Guid;
  fileId: Guid;
  mentorId: Guid;
  clientId: Guid;

  client:Client;
  file: File;
}
