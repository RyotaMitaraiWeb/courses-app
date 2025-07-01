import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UpdateCourseDto } from './dto/update-course.dto';
import { NotFoundException } from '@nestjs/common';
import { Course } from '@prisma/client';

describe('CoursesController', () => {
  let controller: CoursesController;
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      providers: [CoursesService],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<CoursesController>(CoursesController);
    service = module.get(CoursesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('update', () => {
    it('Throws a NotFoundException if service cannot edit the course', async () => {
      jest.spyOn(service, 'update').mockResolvedValueOnce(null);

      await expect(() =>
        controller.update(1, new UpdateCourseDto()),
      ).rejects.toThrow(NotFoundException);
    });

    it('Returns a course when successful', async () => {
      const course: Course = {
        id: 1,
        title: 'a',
        description: 'b',
        imagePath: 'c',
      };

      jest.spyOn(service, 'update').mockResolvedValueOnce(course);

      const result = await controller.update(1, new UpdateCourseDto());

      expect(result).toEqual(course);
    });
  });
});
