import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://172.173.138.200:5000/api/productos/';

const CompEditarProductos = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()

    const { id } = useParams()

    //FUNCION ACT
    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${'/actualizar/'}${id}`, {
            nombre: nombre,
            precio: precio,
            categoria: categoria,
            descripcion: descripcion,
        })
        navigate('/productos/')
    }
    useEffect(() => {
        getProductoById()
        // eslint-disable-next-line
    }, []);


    const getProductoById = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setNombre(resul.data.nombre)
        setPrecio(resul.data.precio)
        setCategoria(resul.data.categoria)
        setDescripcion(resul.data.descripcion)
    }

    return (

        <div>
            <h4> ACTUALIZAR PRODUCTOS</h4>
            <form onSubmit={Actualizar}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre} onChange={(a) => setNombre(a.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input value={precio} onChange={(a) => setPrecio(a.target.value)}
                        type='number' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Categoria</label>
                    <input value={categoria} onChange={(a) => setCategoria(a.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Descripcion</label>
                    <input value={descripcion} onChange={(a) => setDescripcion(a.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'>Actualizar</button>


            </form>





        </div>

    )
}

export default CompEditarProductos;
