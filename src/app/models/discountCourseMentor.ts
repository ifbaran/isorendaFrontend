import { Guid } from "guid-typescript";
import { CourseMentor } from "./courseMentor";
import { Discount } from "./discount";

export interface DiscountCourseMentor{
  discountCourseMentorId: Guid;
  courseMentorId: Guid;
  discountId: Guid;
  type: boolean;

  courseMentor: CourseMentor;
  discount: Discount;
}
