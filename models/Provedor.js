const mongoose = require('mongoose');

//Este debe ser igual al esquema JSON de la base de datos

const provedorSchema = mongoose.Schema({

    nombre:
    {
        type: String,
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
    descripcion:
    {
        type: String,
        require: true
    }


},{versionKey:false});

module.exports = mongoose.model('Provedor',provedorSchema);