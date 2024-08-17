const cleanAndSanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1. Sanitize the markdown for description
      problemData.description = cleanAndSanitizeMarkdown(
        problemData.description
      );

      console.log("Problem Data from service", problemData);
      const problem = await this.problemRepository.createProblem(problemData);
      console.log("Problem", problem);
      return problem;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProblemService;
