const express = require('express');
const router =  express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/',clienteController.mostrarClientes);
router.post('/',clienteController.agregarClientes);

router.get('/:id',clienteController.mostrarClienteID);
router.delete('/eliminar/:id',clienteController.eliminarCliente);
module.exports = router;