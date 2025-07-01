#!/bin/sh
set -e 

echo "Setting up .env..."
if [ ! -f ./.env ]; then
  echo "Creating .env file from sample.env..."
  cp ./sample.env ./.env
else
  echo ".env file already exists, skipping."
fi

echo "Applying Prisma migrations..."
npx prisma migrate deploy

echo "Preparing Prisma client..."
npx prisma generate

echo "Building NestJS project (generating Swagger schemas...)"
npm run build

echo "Starting app..."
npm run start:dev