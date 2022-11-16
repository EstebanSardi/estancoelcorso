const Provedor = require('../models/Provedor.js');


exports.mostrarProvedores = async (req, res) => {
    try {
        const provedores = await Provedor.find();
        res.json(provedores);

    } catch (error) {
        console.log(error)
        res.status(500), send('Hubo un error')

    }
}

exports.agregarProvedores = async(req,res) => 
{
    try {
        let provedores;
        provedores = new Provedor(req.body)
        await provedores.save();
        res.send(provedores);

        
    } catch (error) {
        console.log(error)
        res.status(500).send(' hubo un error al agregar provedores')
    }
}

exports.eliminarProvedores = async (req, res) => {

    try {
        let provedores = await Provedor.findById(req.params.id);

        if (!provedores) {
            res.status(404).json({ msg: "no se encuentra el provedor" })
        }

        await Provedor.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "El provedro a sido eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send(' hubo un error al consultar los provedores')
    }
}

exports.mostrarProvedorID = async (req, res) => {
    try {
        let provedores = await Provedor.findById(req.params.id);

        if (!provedores) {
            res.status(404).json({ msg: "el provedor no existe" })
        }
        res.json(provedores);
    }
    catch
    {
        console.log(error)
        res.status(500).send(' hubo un error al consultar los provedores')
    }

}
