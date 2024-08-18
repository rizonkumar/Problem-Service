const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const logger = require("./config/logger.config");

const app = express();

// Middleware
app.use(helmet());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes
app.use("/api", apiRouter);

app.get("/health", (req, res) => {
  logger.info("Health check endpoint called");
  res
    .status(200)
    .json({ status: "healthy", message: "Problem Service is operational" });
});

// Error handling
app.use(errorHandler);

// Server startup function
async function startServer() {
  try {
    await connectToDB();
    logger.info("Successfully connected to DB");

    const server = app.listen(PORT, () => {
      logger.info(`Server started at PORT: ${PORT}`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      logger.info("SIGTERM signal received: closing HTTP server");
      server.close(() => {
        logger.info("HTTP server closed");
        process.exit(0);
      });
    });
  } catch (error) {
    logger.error("Failed to start the server:", error);
    process.exit(1);
  }
}

startServer();
