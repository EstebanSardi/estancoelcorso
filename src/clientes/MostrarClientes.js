import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://172.173.138.200:5000/api/clientes';

const CompMostrarClientes = () => {

    const [clientes, setCliente] = useState([])
    useEffect(() => {
        getClientes()
    }, []);

    //FUNCION MOSTRAR CLIENTE

    const getClientes = async () => {
        const resul = await axios.get(URL)
        setCliente(resul.data);
    }

    //FUNCION ELIMINAR CLIENTE

    const eliminarClientes = async (id) => {
        await axios.delete(`${URL}${'/eliminar/'}${id}`)
        getClientes()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/clientes/agregar' className='btn btn-success mt-2 mb-2'>Agregar <i class="fa-solid fa-user-plus"></i></Link>
                    <table className='table table-striped'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Nombres cliente</th>
                                <th>Apellidos cliente</th>
                                <th>Documento </th>
                                <th>Correo </th>
                                <th>Telefono </th>
                                <th>Direccion </th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key={index}>
                                    <td>{cliente.nombres}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.documento}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>
                                    <Link to={`/clientes/editar/${cliente._id}`} className='btn btn-primary'><i class="fa-solid fa-user-pen"></i></Link>
                        
                                    <button onClick={()=>eliminarClientes(cliente._id)} className='btn btn-danger' > <i class="fa-solid fa-user-minus"></i></button>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>

            </div>

        </div>










    )


}
export default CompMostrarClientes;