# ProblemService API

ProblemService is a RESTful API for managing coding problems. It provides endpoints for creating, reading, updating, and deleting problem entries, as well as a health check endpoint.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)
7. [Testing](#testing)
8. [Error Handling](#error-handling)
9. [Contributing](#contributing)
10. [License](#license)

## Features

- Create new coding problems
- Retrieve a list of all problems
- Retrieve a specific problem by ID
- Update existing problems
- Delete problems
- Health check endpoint

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.0 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/problem-service.git
   cd problem-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory with the following content:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/problem_service
   NODE_ENV=development
   ```

2. Adjust the values as needed for your environment.

## Running the Application

To start the server in development mode:

```bash
npm run dev
```

For production:

```bash
npm start
```

The server will start running on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

All endpoints are prefixed with `/api/v1`.

- `GET /api/v1/problem/health`: Health check
- `POST /api/v1/problem`: Create a new problem
- `GET /api/v1/problem`: Retrieve all problems
- `GET /api/v1/problem/:id`: Retrieve a specific problem by ID
- `PATCH /api/v1/problem/:id`: Update a problem
- `DELETE /api/v1/problem/:id`: Delete a problem

For detailed API documentation, refer to the [API Documentation](API_DOCUMENTATION.md) file.

## Testing

To run tests:

```bash
npm test
```

## Error Handling

The API uses custom error classes and a centralized error handling middleware. Refer to the `errors/` directory for more information on specific error types.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
