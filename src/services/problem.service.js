const cleanAndSanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1. Sanitize the markdown for description
      problemData.description = cleanAndSanitizeMarkdown(
        problemData.description,
      );

      console.log("Problem Data from service", problemData);
      const problem = await this.problemRepository.createProblem(problemData);
      console.log("Problem", problem);
      return problem;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProblems() {
    try {
      const problems = await this.problemRepository.getAllProblems();
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = await this.problemRepository.getProblem(problemId);
      return problem;
    } catch (e) {
      console.error(e);
    }
  }

  async deleteProblem(problemId) {
    try {
      const problem = await this.problemRepository.deleteProblem(problemId);
      return problem;
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = ProblemService;
