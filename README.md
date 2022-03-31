# Simple Rest endpoints with Nest.js backend, ReactJS frontend

typeorm implementation: https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f

common/envs implementation: https://github.com/hellokvn/medium-nest-typeorm-postgres-sample/tree/main/src/common/envs

## Getting Started
Install TypeScript globally on your machine if you don't have it installed already:

```bash
npm install -g typescript
```

## Backend
### Change directory into the backend
```bash
cd backend
```

### Install backend dependencies

```bash
npm install
```

### Create .env file
Once the installation process is complete, you can check `.env` and `backend/src/envs/`:

```bash
touch dev.env
```

Open the newly created file and add the following code:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=app
DATABASE_USER=docker
DATABASE_PASSWORD=docker
```

Ensure that you replaced the database variables with docker-compose variables.

### Run the application
Open another terminal and still within the `backend` project directory run the application with:

```bash
npm run start
```

This will start the backend application on port `8089`. This was modified to avoid confliction with the frontend application which by default will run on port `3000`

## Frontend
Open another terminal and navigate to the `./frontend` folder to setup the frontend

### Frontend dependencies
```bash
cd frontend
npm install
```

### Run the frontend app

```bash
npm start
```

### Create .env file and include Auth0 App credentials

Create a `.env` file as shown here:

```
touch .env
```

Open the file and paste the following code in it:

```
BASE_URL=http://localhost:8089/api
```

### Test the application
Finally open your browser and view the application on http://localhost:3000

## Prerequisites
 [Node.js](https://nodejs.org/en/), [Docker](https://docker.com)

## Built With
[Node.js]()
[Nest.js]()
[React.js]()
[TypeScript]()
[Postgres]() 