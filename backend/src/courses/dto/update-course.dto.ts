import { IsNotEmpty } from 'class-validator';

export class UpdateCourseDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
