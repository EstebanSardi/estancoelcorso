const Producto = require('../models/Producto.js');


exports.mostrarProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error)
        res.status(500), send('Hubo un error')

    }
}

exports.agregarProductos = async(req,res) => 
{
    try {
        let productos;
        productos = new Producto(req.body)
        await productos.save();
        res.send(productos);

        
    } catch (error) {
        console.log(error)
        res.status(500).send(' hubo un error al agregar productos')
    }
}

exports.eliminarProducto = async (req, res) => {

    try {
        let productos = await Producto.findById(req.params.id);

        if (!productos) {
            res.status(404).json({ msg: "no se encuentra el producto" })
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "El profucto a sido eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send(' hubo un error al consultar los productos')
    }
}

exports.mostrarProductoID = async (req, res) => {
    try {
        let productos = await Producto.findById(req.params.id);

        if (!productos) {
            res.status(404).json({ msg: "el producto no existe" })
        }
        res.json(productos);
    }
    catch
    {
        console.log(error)
        res.status(500).send(' hubo un error al consultar los productos')
    }

}
