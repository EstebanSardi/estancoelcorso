import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://172.173.138.200:5000/api/productos';

const CompMostrarProductos = () => {

    const [productos, setProducto] = useState([])
    useEffect(() => {
        getProductos()
    }, []);

    //FUNCION MOSTRAR producto

    const getProductos = async () => {
        const resul = await axios.get(URL)
        setProducto(resul.data);
    }

    //FUNCION ELIMINAR producto

    const eliminarProductos = async (id) => {
        await axios.delete(`${URL}${'/eliminar/'}${id}`)
        getProductos()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/productos/agregar' className='btn btn-success mt-2 mb-2'>Agregar <i class="fa-solid fa-user-plus"></i></Link>
                    <table className='table table-striped'>
                        <thead className='tableTheBg'>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoria </th>
                                <th>Descripcion </th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, index) => (
                                <tr key={index}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.categoria}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>
                                    <Link to={`/productos/editar/${producto._id}`} className='btn btn-primary'><i class="fa-solid fa-user-pen"></i></Link>
                        
                                    <button onClick={()=>eliminarProductos(producto._id)} className='btn btn-danger' > <i class="fa-solid fa-user-minus"></i></button>
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
export default CompMostrarProductos;