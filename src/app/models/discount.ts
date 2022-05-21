import { Guid } from "guid-typescript";

export interface Discount {
  discountId: Guid;
  percentage: number;
  startDate: Date;
  expirationDate: Date;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;
  status: boolean;
}
