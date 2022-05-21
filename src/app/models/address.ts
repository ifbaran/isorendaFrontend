import { Guid } from "guid-typescript";

export interface Address{
  addressId: Guid;
  userId: Guid;
  cityId: Guid;
  townId: Guid;
  detail: string;
  status: boolean;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;
}
