# Courses

## How to run with Docker Compose
This is the recommended way to run the app. The provided ``docker-compose.dev.yml`` file has everything you need to spin up the app - it does not require any additional actions from you. It will take care of everything, including
creating a PostgreSQL database and seeding it with courses and users. This setup also allows development, as it implements mounting which makes hot reloading possible with code changes from the host machine.

Keep in mind that this setup requires rebuilding in certain scenarios. Examples include installing a new dependency, needing to run ``npm run build`` for any reason, and so on.

In addition to the required services, this setup also provides **adminer**, an interface to connect to the PostgreSQL database. Use the following credentials to log in:

- server - ``db`
- user - ``postgres``
- password - ``A!strongpassword1234``
- database - ``courses-database``

**Note:** if you get an error like this:

```bash
./init.sh: 3: : not found
```

make sure that the ``init.sh`` file in the ``backend`` directory uses ``LF`` as end line of sequence (and NOT CRLF)!

## Environment
The ``.dev`` variant of the Docker Compose file copies the content of ``sample.env`` in the ``backend`` project to an ``.env`` file. However, it only does that if the ``.env`` file is missing. Therefore, if you make any changes to ``sample.env``, **you need to delete the .env file** on the host machine.

## Seeding
When using the Docker Compose file, it will seed the database with a few courses and users. The following users can be used to log in:

- john@gmail.com (password: 123456789)
- jane@gmail.com (password: nameofmycat)
- linus@outlook.com (password: root)

The app uses JWT authentication. Logging out merely causes the client to delete the token from local storage, but it does not invalidate it. Each token is valid for one day.

There are in total seven courses if using this setup.

If you want to make adjustments to the seeding (such as add more users), check out the ``backend/prisma/seed.ts`` file.

## Image storage
For convenience, images are stored in the local file system, with the database storing a reference to them (in this case, the paths to the images). The images can be found in the ``backend/static`` folder. The repository provides a few images which are associated with the courses that are seeded.