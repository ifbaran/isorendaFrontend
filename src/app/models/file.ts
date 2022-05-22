import { Guid } from "guid-typescript";
import { FileAuthenticate } from "./fileAuthenticate";
import { FileClient } from "./fileClient";
import { FileMentor } from "./fileMentor";

export interface File{
  fileId: Guid;
  name: string;
  path: string;
  status: boolean;

  fileAuthenticates: FileAuthenticate[];
  fileClients: FileClient[];
  fileMentors: FileMentor[];
}
