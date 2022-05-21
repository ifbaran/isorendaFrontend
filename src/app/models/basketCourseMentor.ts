import { Guid } from "guid-typescript";
import { Basket } from "./basket";

export interface BasketCourseMentor{
  basketCourseMentorId: Guid;
  basketId: Guid;
  courseMentorId: Guid;
  basketType: boolean;

  basket: Basket;
}
