const express = require('express');
const habitatController = require('../controllers/habitatController');

const router = express.Router();

router.get('/', habitatController.getAllHabitats);
router.get('/:id', habitatController.getHabitatById);
router.post('/', habitatController.createHabitat);
router.put('/:id', habitatController.updateHabitat);
router.delete('/:id', habitatController.deleteHabitat);

module.exports = router;