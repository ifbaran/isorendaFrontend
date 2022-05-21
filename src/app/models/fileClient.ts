import { Guid } from "guid-typescript";

export interface FileClient{
  fileClientId: Guid;
  fileId: Guid;
  clientId: Guid;

  file: File;
}
