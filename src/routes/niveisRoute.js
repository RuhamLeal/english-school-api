const { Router } = require('express');
const NivelController = require('../controllers/NivelController');
 
const router = Router();

const routeToLevels = '/niveis';
const routeToLevelByID = '/niveis/:id';

router
  .get(routeToLevels, NivelController.getAllLevels)
  .get(routeToLevelByID, NivelController.getLevelById)
  .post(routeToLevels, NivelController.createLevel)
  .put(routeToLevelByID, NivelController.updateLevel)
  .delete(routeToLevelByID, NivelController.deleteLevel);

module.exports = router;
