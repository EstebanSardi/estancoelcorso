import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://localhost:5000/api/provedores';

const CompMostrarProvedores = () => {

    const [provedores, setProvedores] = useState([])
    useEffect(() => {
        getProvedores()
    }, []);

    //FUNCION MOSTRAR provedor

    const getProvedores = async () => {
        const resul = await axios.get(URL)
        setProvedores(resul.data);
    }

    //FUNCION ELIMINAR provedor

    const eliminarProvedores = async (id) => {
        await axios.delete(`${URL}${'/eliminar/'}${id}`)
        getProvedores()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/provedores/agregar' className='btn btn-success mt-2 mb-2'>Agregar <i class="fa-solid fa-user-plus"></i></Link>
                    <table className='table table-striped'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo </th>
                                <th>Telefono </th>
                                <th>Descripcion </th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {provedores.map((provedor, index) => (
                                <tr key={index}>
                                    <td>{provedor.nombre}</td>
                                    <td>{provedor.correo}</td>
                                    <td>{provedor.telefono}</td>
                                    <td>{provedor.descripcion}</td>
                                    <td>
                                    <Link to={`/provedores/editar/${provedor._id}`} className='btn btn-primary'><i class="fa-solid fa-user-pen"></i></Link>
                        
                                    <button onClick={()=>eliminarProvedores(provedor._id)} className='btn btn-danger' > <i class="fa-solid fa-user-minus"></i></button>
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
export default CompMostrarProvedores;