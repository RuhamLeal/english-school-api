const { Router } = require('express');
const PessoaController = require('../controllers/PessoasController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPersons);
router.get('/pessoas/:id', PessoaController.getPersonById);
router.post('/pessoas', PessoaController.createPerson);
router.put('/pessoas/:id', PessoaController.updatePerson);
router.delete('/pessoas/:id', PessoaController.deletePerson);

module.exports = router;
