const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router
  .get('/turmas', TurmaController.getAllClass)
  .get('/turmas/:id', TurmaController.getClassById)
  .post('/turmas', TurmaController.createClass)
  .put('/turmas/:id', TurmaController.updateClass)
  .delete('/turmas/:id', TurmaController.deleteClass);

module.exports = router;
