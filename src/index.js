const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

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

    const server = app.listen(PORT, () => {});

    // Graceful shutdown
    process.on("SIGTERM", () => {
      server.close(() => {
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
}

startServer();
