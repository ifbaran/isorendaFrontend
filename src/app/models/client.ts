import { Guid } from "guid-typescript";
import { Authenticate } from "./authenticate";
import { Basket } from "./basket";
import { ClientEducationInformation } from "./clientEducationInformation";
import { CourseMentorClient } from "./courseMentorClient";
import { FileAuthenticate } from "./fileAuthenticate";
import { ParentClient } from "./parentClient";
import { User } from "./user";

export interface Client{
  clientId: Guid;
  userId: Guid;
  identityNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: number;
  martialStatus: boolean;
  realBirthDate: Date;
  birthDateOnIdentity: Date;

  user: User;
  baskets: Basket[];
  clientEducationInformations: ClientEducationInformation[];
  courseMentorClients: CourseMentorClient[];
  fileAuthenticates: FileAuthenticate[];
  parentClients: ParentClient[];
}
