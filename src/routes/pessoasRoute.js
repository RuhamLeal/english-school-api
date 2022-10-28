const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController');

const router = Router();

const routeToRegisterByID = '/pessoas/:studentId/matricula/:registerId';
const routeToPersonByID = '/pessoas/:id';
const routeToRegisterByPersonID = '/pessoas/:studentId/matricula';
const routeToPerson = '/pessoas';
const routeToRestorePerson = '/pessoas/:id/restore';

router
  .get(routeToPerson, PessoaController.getAllPersons)
  .get(routeToPersonByID, PessoaController.getPersonById)
  .get(routeToRegisterByID, PessoaController.getRegisterByPersonId)
  .post(routeToPerson, PessoaController.createPerson)
  .post(routeToRegisterByPersonID, PessoaController.createRegisterByPersonId)
  .post(routeToRestorePerson, PessoaController.restorePerson)
  .put(routeToPersonByID, PessoaController.updatePerson)
  .put(routeToRegisterByID, PessoaController.updateRegister)
  .delete(routeToPersonByID, PessoaController.deletePerson)
  .delete(routeToRegisterByID, PessoaController.deleteRegister);

module.exports = router;
