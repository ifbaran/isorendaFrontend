import { Guid } from "guid-typescript";

export interface FileMentor {
  fileMentorId: Guid;
  fileId: Guid;
  mentorId: Guid;

  file: File;
}
