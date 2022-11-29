import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://localhost:5000/api/provedores/';

const CompEditarProvedores = () => {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()

    const { id } = useParams()

    //FUNCION ACT
    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${'/actualizar/'}${id}`, {
            nombre: nombre,
            correo: correo,
            telefono: telefono,
            descripcion: descripcion,
        })
        navigate('/provedores/')
    }
    useEffect(() => {
        getProvedorById()
        // eslint-disable-next-line
    }, []);


    const getProvedorById = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setNombre(resul.data.nombre)
        setCorreo(resul.data.correo)
        setTelefono(resul.data.telefono)
        setDescripcion(resul.data.descripcion)
    }

    return (

        <div>
            <h4> ACTUALIZAR PROVEDORES</h4>
            <form onSubmit={Actualizar}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre} onChange={(a) => setNombre(a.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input value={correo} onChange={(a) => setCorreo(a.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input value={telefono} onChange={(a) => setTelefono(a.target.value)}
                        type='number' className='form-control' />
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

export default CompEditarProvedores;
