import { Guid } from "guid-typescript";
import { Client } from "./client";
import { CourseMentor } from "./courseMentor";

export interface CourseMentorClient {
  courseMentorClientId: Guid;
  courseMentorId: Guid;
  clientId: Guid;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;

  client: Client;
  courseMentor: CourseMentor;
}
