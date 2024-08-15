# Problem Service

This is a backend service for managing coding problems, similar to LeetCode.

## Project Structure

```

Problem Service
├── src
│ ├── config
│ │ └── server.config.js
│ ├── controllers
│ │ └── problem.controller.js
│ ├── repositories
│ ├── routes
│ │ ├── index.js
│ │ ├── v1
│ │ │ ├── index.js
│ │ │ └── problems.routes.js
│ ├── services
│ ├── utils
│ └── index.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file and set the `PORT` variable
4. Run `npm start` to start the server

## API Endpoints

The base URL for all API endpoints is `/api/v1/problem`.

- `GET /ping`: Check if the problem controller is up
- `GET /:id`: Get a specific problem by ID
- `GET /`: Get all problems
- `POST /`: Add a new problem
- `DELETE /`: Delete a problem
- `PUT /`: Update a problem

## Request Flow

The request flow follows this pattern:

1. The main Express app (`src/index.js`)
2. API Router (`src/routes/index.js`)
3. V1 Router (`src/routes/v1/index.js`)
4. Problem Router (`src/routes/v1/problems.routes.js`)
5. Problem Controller (`src/controllers/problem.controller.js`)

For example, a request to `GET /api/v1/problem/ping` would flow through:

apiRouter -> v1Router -> problemRouter -> problemController.pingProblemController

## To-Do

- Implement MongoDB connection
- Complete controller functions
- Add input validation
- Implement error handling
- Add authentication and authorization
- Implement code execution and judging system

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

```

```
