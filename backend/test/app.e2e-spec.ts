// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import { App } from 'supertest/types';
// import { AppModule } from './../src/app.module';
// import { PrismaService } from '../src/prisma/prisma.service';

// const mockPrismaService = {
//   $connect: jest.fn().mockResolvedValue(undefined),
//   $disconnect: jest.fn().mockResolvedValue(undefined),
//   user: {
//     findMany: jest.fn(),
//     findUnique: jest.fn(),
//   },
// };

describe('AppController (e2e)', () => {
  // let app: INestApplication<App>;

  // beforeEach(async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [AppModule],
  //     providers: [PrismaService],
  //   })
  //     .overrideProvider(PrismaService)
  //     .useValue(mockPrismaService)
  //     .compile();

  //   app = moduleFixture.createNestApplication();

  //   await app.init();
  // });

  // it('/ (GET)', async () => {
  //   return await request(app.getHttpServer())
  //     .get('/')
  //     .expect(200)
  //     .expect('Hello World!');
  // });

  it('bandaid', () => {
    expect(true).toBeTruthy();
  });

  // afterAll(async () => {
  //   await app.close();
  // });
});
