import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserDto } from './dto/user.dto';
import { User } from '../shared/decorators/user/user.decorator';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: LoginDto })
  async login(@User() user: UserDto) {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  @ApiBearerAuth('jwt')
  refreshSession(@User() user: UserDto) {
    return user;
  }
}
