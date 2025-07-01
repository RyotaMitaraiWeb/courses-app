import { PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { courses } from './courses';

const PASSWORD_HASH_SALT_ROUNDS = Number(process.env.PASSWORD_HASH_SALT_ROUNDS);

// passwords are unhashed, those are hashed in main()
const users: User[] = [
  {
    id: 1,
    email: 'john@gmail.com',
    password: '123456789',
  },
  {
    id: 2,
    email: 'jane@gmail.com',
    password: 'nameofmycat',
  },
  {
    id: 3,
    email: 'linus@outlook.com',
    password: 'root',
  },
];

const prisma = new PrismaClient();
async function main() {
  const hash = await bcrypt.genSalt(PASSWORD_HASH_SALT_ROUNDS);

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, hash);
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: { ...user, password: hashedPassword },
    });
  }

  for (const course of courses) {
    await prisma.course.upsert({
      where: { id: course.id },
      update: {},
      create: { ...course },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
