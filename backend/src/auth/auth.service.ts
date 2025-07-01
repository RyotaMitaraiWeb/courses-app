import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<void> {
    const user = await this.prisma.user.findFirst({ where: { email } });
    if (!user) throw new UnauthorizedException();

    const passwordMatches = await this._comparePasswords(
      password,
      user.password,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException();
    }
  }

  async login(user: UserDto) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private async _comparePasswords(password: string, passwordInDb: string) {
    return await bcrypt.compare(password, passwordInDb);
  }
}
