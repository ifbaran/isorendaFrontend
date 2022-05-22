import { Guid } from "guid-typescript";
import { City } from "./city";
import { Town } from "./town";
import { User } from "./user";

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

  city: City;
  town: Town;
  user: User;
}
