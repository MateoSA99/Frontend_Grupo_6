import React from 'react'

import {
    Routes,
    Route
} from "react-router-dom";
import NavBar from '../components/container/NavBar';
import AddProyecto from '../components/proyectos/AddProyecto';
import AddInscripcion from '../components/inscripciones/AddInscripcion';
import EditProyecto from '../components/proyectos/EditProyecto';
import Proyectos from '../components/proyectos/Proyectos';
import Usuario from '../components/usuarios/Usuario';
import UpdateEstadoUser from '../components/usuarios/UpdateEstadoUser';
import UpdateUser from '../components/usuarios/UpdateUser';
import User from '../components/usuarios/User';
import Inscripcion from '../components/inscripciones/Inscripcion';
import UpdateInscripcion from '../components/inscripciones/UpdateInscripcion';
const ContentRoutes = () => {
    return (
        <>

            <NavBar />
            <Routes>
                <Route path="/usuarios" element={<Usuario />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/addProyecto" element={<AddProyecto />} />
                <Route path="/editProyecto/:id" element={<EditProyecto />} />
                <Route path="/updateEstadoUser/:id" element={<UpdateEstadoUser />} />
                <Route path="/updateUser/:id" element={<UpdateUser />} />
                <Route path="/user" element={<User />} />
                <Route path="/inscripciones" element={<Inscripcion />} />
                <Route path="/updateInscripciones" element={<UpdateInscripcion />} />
                <Route path="/addInscripcion" element={<AddInscripcion />} />

                
                <Route path="/" element={<Usuario />} />
            </Routes>

        </>
    )
}

export default ContentRoutes