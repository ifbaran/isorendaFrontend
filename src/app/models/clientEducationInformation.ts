import { Guid } from "guid-typescript";
import { Client } from "./client";

export interface ClientEducationInformation {
  clientEducationInformationId: Guid;
  clientId: Guid;
  universityName: string;
  highSchoolName: string;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;

  client: Client;
}
