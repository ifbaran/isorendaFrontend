import { Guid } from "guid-typescript";
import { BasketCourseMentor } from "./basketCourseMentor";
import { Course } from "./course";
import { CourseMentorClient } from "./courseMentorClient";
import { DiscountCourseMentor } from "./discountCourseMentor";
import { Mentor } from "./mentor";

export interface CourseMentor {
  courseMentorId: Guid;
  courseId: Guid;
  mentorId: Guid;
  price: number; // decimal olması gerekiyor
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;

  course: Course;
  mentor: Mentor;
  basketCourseMentors: BasketCourseMentor[];
  courseMentorClients: CourseMentorClient[];
  discountCourseMentors: DiscountCourseMentor[];
}
