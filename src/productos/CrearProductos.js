import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'http://172.173.138.200:5000/api/productos';

const CompCrearProductos = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()

    //FUNCION AGREGAR
    const guardarProducto = async (g) => {
        g.preventDefault()
        await axios.post(URL, {
            nombre: nombre, precio:precio,categoria:categoria,descripcion:descripcion
        })
        navigate('/productos')

    }

    return (

        <div>
            <h4>CREAR PRODUCTOS</h4>
            <form onSubmit={guardarProducto}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre} onChange={(g) => setNombre(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input value={precio} onChange={(g) => setPrecio(g.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Categoria</label>
                    <input value={categoria} onChange={(g) => setCategoria(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Descripcion</label>
                    <input value={descripcion} onChange={(g) => setDescripcion(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'>Guardar</button>

            </form>

        </div>

    )


}

export default CompCrearProductos;