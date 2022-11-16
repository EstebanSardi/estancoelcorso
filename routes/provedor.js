const express = require('express');
const router =  express.Router();
const provedorController = require('../controllers/provedorController');

router.get('/',provedorController.mostrarProvedores);
router.post('/',provedorController.agregarProvedores);

router.get('/:id',provedorController.mostrarProvedorID);
router.delete('/eliminar/:id',provedorController.eliminarProvedores);
module.exports = router;