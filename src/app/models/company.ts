import { Guid } from "guid-typescript";
import { User } from "./user";

export interface Company {
  companyId: Guid;
  userId: Guid;
  taxNumber: string;
  name: string;

  user: User;
}
