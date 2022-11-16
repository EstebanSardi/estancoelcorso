const express = require('express');
const router =  express.Router();
const productoController = require('../controllers/productoController');

router.get('/',productoController.mostrarProductos);
router.post('/',productoController.agregarProductos);

router.get('/:id',productoController.mostrarProductoID);
router.delete('/eliminar/:id',productoController.eliminarProducto);
module.exports = router;