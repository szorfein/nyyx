# nyyx-db

SQLite for the app/desktop

Created by follow the Prisma docs, combine:

- https://www.prisma.io/docs/prisma-orm/quickstart/sqlite
- https://www.prisma.io/docs/guides/deployment/turborepo

## Env file

    echo 'DATABASE_URL="file:/home/user/.config/nyyx/dev.db"' > .env

Only absolute file for now

## Create migration

Edit the file `prisma/schema.prisma`, create new model, add new field

After, you need to create migration with a name

    turbo run db:migrate -- --name post-tags
    turbo run db:migrate -- --name post-create-category

And generate them to fill the database

    turbo run db:generate
