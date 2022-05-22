import { Guid } from "guid-typescript";
import { Basket } from "./basket";
import { CourseMentor } from "./courseMentor";

export interface BasketCourseMentor{
  basketCourseMentorId: Guid;
  basketId: Guid;
  courseMentorId: Guid;
  basketType: boolean;

  basket: Basket;
  courseMentor: CourseMentor;
}
