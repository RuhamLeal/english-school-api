const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController');

const router = Router();

router
  .get('/pessoas', PessoaController.getAllActivePersons)
  .get('/pessoas/all', PessoaController.getAllPersons)
  .get('/pessoas/:id', PessoaController.getPersonById)
  .get('/pessoas/:studentId/matricula/:registerId', PessoaController.getRegisterByPersonId)
  .get('/pessoas/:studentId/matriculas-confirmadas', PessoaController.getRegistersByStudent)
  .get('/pessoas/matricula/:classId/confirmadas', PessoaController.getRegistersByClass)
  .post('/pessoas', PessoaController.createPerson)
  .post('/pessoas/:studentId/cancela', PessoaController.cancelPerson)
  .post('/pessoas/:studentId/matricula', PessoaController.createRegisterByPersonId)
  .post('/pessoas/:id/restore', PessoaController.restorePerson)
  .put('/pessoas/:id', PessoaController.updatePerson)
  .put('/pessoas/:studentId/matricula/:registerId', PessoaController.updateRegister)
  .delete('/pessoas/:id', PessoaController.deletePerson)
  .delete('/pessoas/:studentId/matricula/:registerId', PessoaController.deleteRegister);

module.exports = router;
