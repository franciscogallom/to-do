# to-do ✔️.

## Description

This project consists of a task application, where you can create, edit and delete items. It is mainly based on ReactJS and NestJS, and communicates with a MySQL database. As you can see, the repository is separated into backend and frontend.

## Installation

**You need to have installed [Node](https://nodejs.org/es/) (v14.17.5) and [MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html) (v8.0.26). The versions are the recommended versions. NPM will take care of everything else.**

#### Step 1.

- Clone the repository.

#### Step 2.

- Install all dependencies (it can take a few minutes). In the root folder, follow the steps:

```bash
# install backend dependencies.
$ cd backend
$ npm install

# install frontend dependencies.
$ cd ../frontend
$ npm install
```

- **¿What am I installing?** Well, you are installing all the dependencies that the project needs to run, like _React_ and _Axios_ in the frontend folder, and _Nest_, _mysql2_, _TypeScript_, _typeORM_ and some more in the backend folder. You can see all the dependencies in the respective _package.json_.

#### Step 3.

- In the backend folder, create a _.env_ file.

```javascript
MYSQL_USERNAME = myUsername
MYSQL_PASSWORD = myPassword
MYSQL_DB = myDB
```

- **In adittion to this, you must create a database with the name you gave in the .env file. (in this case, _myDB_), or use a pre-existing one with that name.**

## Running the app

- Run server in watch mode. After that, the server is running on port 8080.

```bash
$ cd backend
$ npm run start:dev
```

- On another terminal, run the app in development mode. After that, you should automatically see the app in your browser (localhost:3000).

```bash
$ cd frontend
$ npm run start
```
