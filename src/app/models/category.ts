import { Guid } from "guid-typescript";
import { CategoryCourse } from "./categoryCourse";

export interface Category{
  categoryId: Guid;
  categoryParentId: Guid;
  name: string;
  status: boolean;
  insertDate: Date;
  updateDate: Date;
  updateUserId: Guid;

  categoryParent: Category;
  categoryCourses: CategoryCourse[];
  inverseCategoryParents: Category[];

}
