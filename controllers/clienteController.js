const Cliente = require('../models/Cliente.js');


exports.mostrarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500), send('Hubo un error')

    }
}

exports.agregarClientes = async(req,res) => 
{
    try {
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);

        
    } catch (error) {
        console.log(error)
        res.status(500).send(' hubo un error al agregar clientes')
    }
}

exports.eliminarCliente = async (req, res) => {

    try {
        let clientes = await Cliente.findById(req.params.id);

        if (!clientes) {
            res.status(404).json({ msg: "no se encuentra el cliente" })
        }

        await Cliente.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "El cliente a sido eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send(' hubo un error al consultar los clientes')
    }
}

exports.mostrarClienteID = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);

        if (!clientes) {
            res.status(404).json({ msg: "el cliente no existe" })
        }
        res.json(clientes);
    }
    catch
    {
        console.log(error)
        res.status(500).send(' hubo un error al consultar los clientes')
    }

}
