import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDto } from '../../../auth/dto/user.dto';

export const User = createParamDecorator(
  (data: keyof any, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    return request.user as UserDto;
  },
);
