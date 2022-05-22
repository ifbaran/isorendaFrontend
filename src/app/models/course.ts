import { Guid } from "guid-typescript";
import { CategoryCourse } from "./categoryCourse";
import { CourseMentor } from "./courseMentor";

export interface Course{
  courseId: Guid;
  name: string;
  clientId: string;
  status: boolean;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;

  categoryCourses: CategoryCourse[];
  courseMentors: CourseMentor[];

}
