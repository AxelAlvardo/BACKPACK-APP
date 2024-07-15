import { Route, Routes } from "react-router-dom";
import Navbar_admin from "./Admin_NavBar/Admin_NavBar";
import Materia_Admin from "./Materias/Materia_Admin";
import Material_Publicado from "./Material/Aprobado/Material_Publicado";
import Material_Espera from "./Material/Espera/Material_Espera";
import User from "./Usuarios/User";
import Denuncias from "./Denucia/Denuncias";

import '../../sass/layout/_admin.scss';

const Admin = () => {
    return (
        <div className="flex">
            <Navbar_admin />

            {/* contenido */}
            <div className="content">
                <Routes>
                    <Route path="/subjects" element={<Materia_Admin />} />
                    <Route path="/material" element={<Material_Publicado />} />
                    <Route path="/requests" element={<Material_Espera />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/complaints" element={<Denuncias />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;