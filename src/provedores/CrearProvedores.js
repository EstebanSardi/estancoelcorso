import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'http://172.173.138.200:5000/api/provedores';

const CompCrearProvedores = () => {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()

    //FUNCION AGREGAR
    const guardarProvedor = async (g) => {
        g.preventDefault()
        await axios.post(URL, {
            nombre: nombre, correo: correo,telefono: telefono, descripcion: descripcion
        })
        navigate('/provedores')

    }

    return (

        <div>
            <h4>CREAR PROVEDORES</h4>
            <form onSubmit={guardarProvedor}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre} onChange={(g) => setNombre(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input value={correo} onChange={(g) => setCorreo(g.target.value)}
                        type='text' className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input value={telefono} onChange={(g) => setTelefono(g.target.value)}
                        type='number' className='form-control' />
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

export default CompCrearProvedores;