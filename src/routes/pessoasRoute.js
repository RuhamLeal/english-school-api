const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController');

const router = Router();

const routeToRegisterByID = '/pessoas/:studentId/matricula/:registerId';
const routeToPersonByID = '/pessoas/:id';
const routeToRegisterByPersonID = '/pessoas/:studentId/matricula';
const routeToActivePersons = '/pessoas';
const routeToRestorePerson = '/pessoas/:id/restore';
const routeToAllPersons = '/pessoas/all';

router
  .get(routeToActivePersons, PessoaController.getAllActivePersons)
  .get(routeToAllPersons, PessoaController.getAllPersons)
  .get(routeToPersonByID, PessoaController.getPersonById)
  .get(routeToRegisterByID, PessoaController.getRegisterByPersonId)
  .post(routeToActivePersons, PessoaController.createPerson)
  .post(routeToRegisterByPersonID, PessoaController.createRegisterByPersonId)
  .post(routeToRestorePerson, PessoaController.restorePerson)
  .put(routeToPersonByID, PessoaController.updatePerson)
  .put(routeToRegisterByID, PessoaController.updateRegister)
  .delete(routeToPersonByID, PessoaController.deletePerson)
  .delete(routeToRegisterByID, PessoaController.deleteRegister);

module.exports = router;
