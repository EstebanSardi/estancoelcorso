const mongoose = require('mongoose');

//Este debe ser igual al esquema JSON de la base de datos

const clienteSchema = mongoose.Schema({

    nombres:
    {
        type: String,
        require: true
    },
    apellidos:
    {
        type: String,
        require: true
    },
    documento:
    {
        type: Number,
        require: true
    },
    correo:
    {
        type: String,
        require: true
    },
    telefono:
    {
        type: Number,
        require: true
    },
    direccion:
    {
        type: String,
        require: true
    }


},{versionKey:false});

module.exports = mongoose.model('Cliente',clienteSchema);