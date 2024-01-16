<p>This repository is a NestJS project. I have an idea to create a website where users can add their own images and other users can comment on them. Users could find or filter (on the ui will be search form) images by theme or title. Now I have created a backend (I will improve it), in the near future I want to create a frontend in React.</p>

Technologies

This project uses the following technologies:

🔥NestJS: is a framework for building efficient, scalable Node.js server-side applications.

🔥TypeScript: a superset of JavaScript that provides optional static typing and other features.

🔥TypeORM: is the most mature Object Relational Mapper (ORM) available for TypeScript.

🔥Swagger: allows to describe the structure of your APIs so that machines can read them.

Database: 

🔥PostgreSQL is an object-relational database management system (ORDMBS).

## Installation

```bash
$ npm install
```

## Env: create .env file and copy variables from .env.example file

## Running the app

```bash
# development
$ npm run start
```
## Migration

$ npm run typeorm -- -d src/db-utils/typeOrm.config.ts migration:generate
