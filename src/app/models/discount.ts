import { Guid } from "guid-typescript";
import { DiscountCourseMentor } from "./discountCourseMentor";

export interface Discount {
  discountId: Guid;
  percentage: number;
  startDate: Date;
  expirationDate: Date;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;
  status: boolean;

  discountCourseMentors: DiscountCourseMentor[];
}
