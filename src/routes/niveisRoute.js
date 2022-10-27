const { Router } = require('express')
const NivelController = require('../controllers/NivelController')
 
const router = Router()
router
 .get('/niveis', NivelController.getAllLevels)
 .get('/niveis/:id', NivelController.getLevelById)
 .post('/niveis', NivelController.createLevel)
 .put('/niveis/:id', NivelController.updateLevel)
 .delete('/niveis/:id', NivelController.deleteLevel)
module.exports = router