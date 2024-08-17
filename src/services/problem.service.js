const cleanAndSanitizeMarkdown = require("../utils/markdownSanitizer");
const NotFoundError = require("../errors/not_found.error");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    problemData.description = cleanAndSanitizeMarkdown(problemData.description);
    const newProblem = await this.problemRepository.createProblem(problemData);
    return newProblem;
  }

  async getAllProblems() {
    return this.problemRepository.getAllProblems();
  }

  async getProblem(problemId) {
    const retrievedProblem = await this.problemRepository.getProblem(problemId);
    if (!retrievedProblem) {
      throw new NotFoundError("Problem", problemId);
    }
    return retrievedProblem;
  }

  async deleteProblem(problemId) {
    const deletedProblem =
      await this.problemRepository.deleteProblem(problemId);
    if (!deletedProblem) {
      throw new NotFoundError("Problem", problemId);
    }
    return deletedProblem;
  }

  async updateProblem(problemId, problemData) {
    if (problemData.description) {
      problemData.description = cleanAndSanitizeMarkdown(
        problemData.description,
      );
    }
    const updatedProblem = await this.problemRepository.updateProblem(
      problemId,
      problemData,
    );
    if (!updatedProblem) {
      throw new NotFoundError("Problem", problemId);
    }
    return updatedProblem;
  }
}

module.exports = ProblemService;
