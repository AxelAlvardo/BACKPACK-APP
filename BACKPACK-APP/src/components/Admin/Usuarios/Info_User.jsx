import { useState } from "react";
import { deleteUser } from "../../../../services/post.subject.service";
import '../../../sass/layout/Users/_user_info.scss'
import { Error } from '../../Alert/Error';

const Info_User = ({ user }) => {
    const { username, carrera, email, _id } = user;
    const [del, setDel] = useState(false);

    const onDelete = () => {
        deleteUser(_id)
        console.log('delete');
        setDel(true);
        setTimeout(() => {
            setDel(false);
            window.location.reload();
        }, 3000);
    }

    return (
       <div>
            {
                del ? <Error>Usuario {_id} eliminado</Error> : null
            }

         <table className="info-users-table">

            <thead>
                <tr>
                    <th>Email del Usuario</th>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{email}</td>
                    <td>{username}</td>
                    <td>{carrera}</td>


                    <td> 
                        <button className="eliminar" onClick={onDelete}>Eliminar</button>
                    </td>
                </tr>
                {/* Puedes agregar más filas según sea necesario */}
            </tbody>
            </table>
       </div>
    )
}

export default Info_User