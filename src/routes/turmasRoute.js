const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

const routeToClasses = '/turmas';
const routeToClassByID = '/turmas/:id';

router
  .get(routeToClasses, TurmaController.getAllClass)
  .get(routeToClassByID, TurmaController.getClassById)
  .post(routeToClasses, TurmaController.createClass)
  .put(routeToClassByID, TurmaController.updateClass)
  .delete(routeToClassByID, TurmaController.deleteClass);

module.exports = router;
