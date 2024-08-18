const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const NotFoundError = require("../errors/not_found.error");
const BadRequestError = require("../errors/badrequest.error");

const problemService = new ProblemService(new ProblemRepository());

async function healthCheck(req, res) {
  res
    .status(StatusCodes.OK)
    .json({ status: "healthy", message: "Problem controller is operational" });
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      data: newProblem,
    });
  } catch (error) {
    if (error instanceof BadRequestError) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Failed to create problem",
        error: error.message,
      });
    } else {
      next(error);
    }
  }
}

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched problem",
      data: problem,
    });
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Problem not found",
        error: error.message,
      });
    } else {
      next(error);
    }
  }
}

async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getAllProblems();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all problems",
      data: problems,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req, res, next) {
  try {
    const updatedProblem = await problemService.updateProblem(
      req.params.id,
      req.body,
    );
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully updated problem",
      data: updatedProblem,
    });
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Problem not found",
        error: error.message,
      });
    } else if (error instanceof BadRequestError) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Failed to update problem",
        error: error.message,
      });
    } else {
      next(error);
    }
  }
}

async function deleteProblem(req, res, next) {
  try {
    const deletedProblem = await problemService.deleteProblem(req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted problem",
      data: deletedProblem,
    });
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Problem not found",
        error: error.message,
      });
    } else {
      next(error);
    }
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  healthCheck,
};
