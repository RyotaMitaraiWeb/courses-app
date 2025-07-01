import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
      imports: [PrismaModule, JwtModule],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('throws UnauthorizedException when a user is not found', async () => {
      jest.spyOn(prisma.user, 'findFirst').mockResolvedValueOnce(null);

      await expect(() => service.validateUser('a', '1')).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('throws UnauthorizedException when password is incorrect', async () => {
      jest.spyOn(prisma.user, 'findFirst').mockResolvedValueOnce({
        id: 1,
        email: 'a',
        password: 'some_hash',
      });

      jest.spyOn(bcrypt, 'compare').mockImplementation(() => false);

      await expect(() => service.validateUser('a', '1')).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('Returns a user when successful', async () => {
      jest.spyOn(prisma.user, 'findFirst').mockResolvedValueOnce({
        id: 1,
        email: 'a',
        password: 'some_hash',
      });

      jest.spyOn(bcrypt, 'compare').mockImplementation(() => true);

      const result = await service.validateUser('a', 'some_hash');
      expect(result.id).toBe(1);
      expect(result.email).toBe('a');
    });
  });
});
