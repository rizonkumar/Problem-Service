const BaseError = require("../errors/base.error");
const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
  console.error("Error:", err);

  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: null,
    });
  }

  // For unknown errors
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "An unexpected error occurred",
    error:
      process.env.NODE_ENV === "development"
        ? "Internal Server Error"
        : err.message,
    data: null,
  });
}

module.exports = errorHandler;
