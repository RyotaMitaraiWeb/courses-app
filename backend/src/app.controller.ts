import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Test } from './Test.dto';
import { AnotherTest } from './AnotherTest.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  test(@Body() body: Test) {
    return body;
  }

  @Patch()
  anotherTest(@Body() body: AnotherTest) {
    return body;
  }
}
