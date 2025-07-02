export interface Course {
  id: number;
  title: string;
  description: string;
  imagePath: string;
}

export interface SearchCoursesParams {
  query: string;
}

export interface EditCourseBody {
  title: string;
  description: string;
}