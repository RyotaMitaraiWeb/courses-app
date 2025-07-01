import { Course } from '@prisma/client';

export const courses: Course[] = [
  {
    id: 1,
    title: 'JavaScript for dummies',
    description:
      'console.log("Learn how to make interactive web pages, web servers, mobile apps, and more.")',
    imagePath: 'course-image-1.webp',
  },
  {
    id: 1,
    title: 'JavaScript for dummies',
    description:
      'console.log("Learn how to make interactive web pages, web servers, mobile apps, and more.")',
    imagePath: 'javascript-for-dummies-course.png',
  },
  {
    id: 1,
    title: 'JavaScript for Dummies',
    description:
      'console.log("Learn how to make interactive web pages, web servers, mobile apps, and more.")',
    imagePath: 'course-image-1.webp',
  },
  {
    id: 2,
    title: 'Java for JavaScript Developers',
    description: 'They are basically the same, right? Right...?',
    imagePath: 'java-for-javascript-developers-course.png',
  },
  {
    id: 3,
    title: 'How To Train Your Dragon',
    description:
      'Training your dragon is no longer something that you can only watch in movies',
    imagePath: 'how-to-train-your-dragon-course.webp',
  },
  {
    id: 4,
    title: 'Latin language course (B1)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imagePath: 'latin-course.png',
  },
  {
    id: 5,
    title: 'How to listen to music',
    description:
      'You will not believe how to do this (spoiler alert: with your ears)',
    imagePath: 'how-to-listen-to-music-course.jpg',
  },
  {
    id: 6,
    title: 'Tango dance lessons',
    description:
      'A 12-week course dedicated to this popular Argentinian dance. Newcomers are welcome!',
    imagePath: 'tango-course.png',
  },
  {
    id: 7,
    title: 'Photoshop lessons for beginners',
    description:
      'No need to go to France to take a photo of yourself in front of the Eiffel Tower...',
    imagePath: 'photoshop-lessons-for-beginners-course.jpg',
  },
];
