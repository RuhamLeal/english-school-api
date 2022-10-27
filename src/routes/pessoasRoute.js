const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController');

const router = Router();

router
  .get('/pessoas', PessoaController.getAllPersons)
  .get('/pessoas/:id', PessoaController.getPersonById)
  .post('/pessoas', PessoaController.createPerson)
  .put('/pessoas/:id', PessoaController.updatePerson)
  .delete('/pessoas/:id', PessoaController.deletePerson)

module.exports = router;
