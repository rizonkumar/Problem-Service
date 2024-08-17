const { Problem } = require("../models");
const NotFoundError = require("../errors/not_found.error");
const BadRequestError = require("../errors/badrequest.error");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const newProblem = await Problem.create(problemData);
      return newProblem;
    } catch (error) {
      if (error.name === "ValidationError") {
        throw new BadRequestError("Invalid problem data", error.errors);
      }
      throw error;
    }
  }

  async getAllProblems() {
    const problemList = await Problem.find({});
    return problemList;
  }

  async getProblem(id) {
    const retrievedProblem = await Problem.findById(id);
    if (!retrievedProblem) {
      throw new NotFoundError("Problem", id);
    }
    return retrievedProblem;
  }

  async deleteProblem(id) {
    const deletedProblem = await Problem.findByIdAndDelete(id);
    if (!deletedProblem) {
      throw new NotFoundError("Problem", id);
    }
    return deletedProblem;
  }

  async updateProblem(id, problemData) {
    const updatedProblem = await Problem.findByIdAndUpdate(id, problemData, {
      new: true,
      runValidators: true,
    });
    if (!updatedProblem) {
      throw new NotFoundError("Problem", id);
    }
    return updatedProblem;
  }
}

module.exports = ProblemRepository;
