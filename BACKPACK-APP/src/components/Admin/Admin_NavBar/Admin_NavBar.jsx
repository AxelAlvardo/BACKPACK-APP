import { Link } from 'react-router-dom';
import '../../../sass/layout/Navigate/_navbar_admin.scss'

const Navbar_admin = () => {
    return (
        <nav className="nav-bar">
            <div className='img-container'>
                <h2 className='title'>BACKPACK</h2>
            </div>

            {/* aquí se guardan las cuestiones de los apartados */}
            <div className="nav-views">
                <ul className='admin-list'>
                    <ol>
                        <Link className='element' to="/admin/subjects">Materias</Link>
                    </ol>
                    <ol>
                        <Link className='element' to="/admin/requests">Materiales</Link>
                    </ol>
                    <ol>
                        <Link className='element' to="/admin/users">Usuarios</Link>
                    </ol>
                    <ol>
                        <Link className='element' to="/admin/complaints">Denuncias</Link>
                    </ol>
                </ul>
            </div>

            {/* contenedor de botones */}
            <div className="nav-options">
                <Link to="../../../">
                    <button className='btn'>Salir</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar_admin;
