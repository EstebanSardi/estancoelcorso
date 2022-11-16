const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');


const app = express();
const port = 5000;

//ENLAZAR  BD
conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/clientes',require('../routes/cliente.js'));
app.use('/api/provedores',require('../routes/provedor.js'));
app.use('/api/productos',require('../routes/producto.js'));

app.get('/',(req,res)=>{
    res.send("Bienvenido ");
});

app.listen(port,()=>console.log('Servidor funcionando :)',port));