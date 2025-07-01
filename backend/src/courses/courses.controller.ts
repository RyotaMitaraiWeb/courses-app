import {
  Controller,
  Get,
  Body,
  Param,
  ParseIntPipe,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    const course = await this.coursesService.update(id, updateCourseDto);

    if (!course) {
      throw new NotFoundException();
    }

    return course;
  }
}
