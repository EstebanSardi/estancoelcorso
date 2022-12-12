import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = 'http://172.173.138.200:5000/api/clientes/';

const CompEditarClientes = () => {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')

    const navigate = useNavigate()

    const { id } = useParams()

    //FUNCION ACT
    const Actualizar = async (a) => {
        a.preventDefault()
        await axios.put(`${URL}${'/actualizar/'}${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            direccion: direccion,
        })
        navigate('/clientes/')
    }
    useEffect(() => {
        getClienteById()
        // eslint-disable-next-line
    }, []);


    const getClienteById = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setNombres(resul.data.nombres)
        setApellidos(resul.data.apellidos)
        setDocumento(resul.data.documento)
        setCorreo(resul.data.correo)
        setTelefono(resul.data.telefono)
        setDireccion(resul.data.direccion)
    }

    return (

        <div>
            <h4> ACTUALIZAR CLIENTES</h4>
            <form onSubmit={Actualizar}>
                <div className='mb-3'>
                    <label className='form-label'>Nombres</label>
                    <input value={nombres} onChange={(a) => setNombres(a.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellidos</label>
                    <input value={apellidos} onChange={(a) => setApellidos(a.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Documento</label>
                    <input value={documento} onChange={(a) => setDocumento(a.target.value)}
                        type='number' className='form-control' />
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
                    <label className='form-label'>Direccion</label>
                    <input value={direccion} onChange={(a) => setDireccion(a.target.value)}
                        type='text' className='form-control' />
                </div>

                <button type='submit' className='btn btn-primary'>Actualizar</button>


            </form>





        </div>

    )
}

export default CompEditarClientes;
