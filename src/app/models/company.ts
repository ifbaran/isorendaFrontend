import { Guid } from "guid-typescript";

export interface Company{
  companyId: Guid;
  userId: Guid;
  taxNumber: string;
  name: string;
}
