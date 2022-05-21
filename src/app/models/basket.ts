import { Guid } from "guid-typescript";

export interface Basket{
  basketId: Guid;
  userId: Guid;
  status: boolean;
}
