import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCourseDto } from './dto/update-course.dto';
import { SearchCoursesDto } from './dto/search-courses.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(params: SearchCoursesDto) {
    return await this.prisma.course.findMany({
      orderBy: {
        id: 'asc',
      },
      where: {
        OR: [
          {
            title: {
              contains: params.query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: params.query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
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
