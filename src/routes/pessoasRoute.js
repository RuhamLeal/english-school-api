const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController');

const router = Router();

const routeToActivePersons = '/pessoas';
const routeToPersonByID = '/pessoas/:id';
const routeToAllPersons = '/pessoas/all';
const routeToRestorePerson = '/pessoas/:id/restore';
const routeToRegisterByPersonID = '/pessoas/:studentId/matricula';
const routeToRegisterByID = '/pessoas/:studentId/matricula/:registerId';
const routeToConfirmedRegistersByPerson = '/pessoas/:studentId/matriculas-confirmadas';
const routeToAllConfirmedRegisterByClass = '/pessoas/matricula/:classId/confirmadas';
const routeToCancelPerson = '/pessoas/:studentId/cancela';

router
  .get(routeToActivePersons, PessoaController.getAllActivePersons)
  .get(routeToAllPersons, PessoaController.getAllPersons)
  .get(routeToPersonByID, PessoaController.getPersonById)
  .get(routeToRegisterByID, PessoaController.getRegisterByPersonId)
  .get(routeToConfirmedRegistersByPerson, PessoaController.getRegistersByStudent)
  .get(routeToAllConfirmedRegisterByClass, PessoaController.getRegistersByClass)
  .post(routeToActivePersons, PessoaController.createPerson)
  .post(routeToCancelPerson, PessoaController.cancelPerson)
  .post(routeToRegisterByPersonID, PessoaController.createRegisterByPersonId)
  .post(routeToRestorePerson, PessoaController.restorePerson)
  .put(routeToPersonByID, PessoaController.updatePerson)
  .put(routeToRegisterByID, PessoaController.updateRegister)
  .delete(routeToPersonByID, PessoaController.deletePerson)
  .delete(routeToRegisterByID, PessoaController.deleteRegister);

module.exports = router;
