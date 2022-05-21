import { Guid } from "guid-typescript";
import { Category } from "./category";
import { Course } from "./course";

export interface CategoryCourse{
  categoryCourseId: Guid;
  categoryId: Guid;
  courseId: Guid;

  course: Course;
  category: Category;
}
