import { Guid } from "guid-typescript";
import { BasketCourseMentor } from "./basketCourseMentor";
import { Course } from "./course";

export interface CourseMentor {
  courseMentorId: Guid;
  courseId: Guid;
  mentorId: Guid;
  price: number; // decimal olması gerekiyor
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;

  course: Course;
  basketCourseMentors: BasketCourseMentor[];
}
