import { Guid } from "guid-typescript";
import { Authenticate } from "./authenticate";
import { Basket } from "./basket";

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

  baskets: Basket[];
}
