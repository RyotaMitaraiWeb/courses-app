import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return `This action returns all courses`;
  }

  async update(
    id: number,
    updateCourseDto: UpdateCourseDto,
  ): Promise<Course | null> {
    return await this.prisma.course.update({
      where: { id },
      data: {
        title: updateCourseDto.title,
        description: updateCourseDto.description,
      },
    });
  }
}
