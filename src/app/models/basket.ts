import { Guid } from "guid-typescript";
import { BasketCourseMentor } from "./basketCourseMentor";
import { Order } from "./order";
import { User } from "./user";

export interface Basket{
  basketId: Guid;
  userId: Guid;
  status: boolean;

  user: User;
  basketCourseMentors: BasketCourseMentor[];
  orders: Order[];
}
