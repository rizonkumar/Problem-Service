const express = require('express');

const {ProblemController} = require('../../controllers');
const problemRouter = express.Router();


problemRouter.get('/ping', ProblemController.pingProblemController)

problemRouter.get('/:id', ProblemController.getProblem)

problemRouter.get('/id', ProblemController.getProblems)

problemRouter.post('/', ProblemController.addProblem)

problemRouter.delete('/', ProblemController.deleteProblem)

problemRouter.put('/', ProblemController.updateProblem)


module.exports = problemRouter;





