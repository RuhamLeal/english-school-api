const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController');

const router = Router();

router
  .get('/pessoas', PessoaController.getAllPersons)
  .get('/pessoas/:id', PessoaController.getPersonById)
  .get('/pessoas/:studentId/matricula/:registerId', PessoaController.getRegisterByPersonId)
  .post('/pessoas', PessoaController.createPerson)
  .post('/pessoas/:studentId/matricula', PessoaController.createRegisterByPersonId)
  .put('/pessoas/:id', PessoaController.updatePerson)
  .put('/pessoas/:studentId/matricula/:registerId', PessoaController.updateRegister)
  .delete('/pessoas/:id', PessoaController.deletePerson)
  .delete('/pessoas/:studentId/matricula/:registerId', PessoaController.deleteRegister)

module.exports = router;
