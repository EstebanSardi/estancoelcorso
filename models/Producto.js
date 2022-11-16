const mongoose = require('mongoose');

//Este debe ser igual al esquema JSON de la base de datos

const productoSchema = mongoose.Schema({

    nombre:
    {
        type: String,
        require: true
    },
    precio:
    {
        type: Number,
        require: true
    },
    categoria:
    {
        type: String,
        require: true
    },
    descripcion:
    {
        type: String,
        require: true
    }
},{versionKey:false});

module.exports = mongoose.model('Producto',productoSchema);