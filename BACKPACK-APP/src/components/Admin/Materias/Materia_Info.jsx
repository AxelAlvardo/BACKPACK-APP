import { useState } from "react";
import { deleteMateria } from "../../../../services/post.subject.service";
import { Error } from "../../Alert/Error";
import '../../../sass/layout/Materia/_materia_info.scss'

const Materia_Info = ({materia}) => {
    const{imgUrl, name, _id} = materia;

    const[del, setDel] = useState(false);

    const onDeleteMateria = ()=>{
        deleteMateria(_id)
        console.log('delete');

        setDel(true);

        setTimeout(() => {
            setDel(false);
            window.location.reload();
        }, 2500);
}

    return (
        <div className="subject-card">


            {
              del ? <Error>Usuario {name} eliminado</Error> : null
            }

            <div className='img-container'>
                {/* image */}
                <img className='img-item' src={imgUrl} alt="Librito" />
            </div>

            <div className='title-container'>
                {/* title */}
                <h2>{name}</h2>
            </div>

            <div className='btn-container'>
                {/* button */}
                <button className='btn-delete' onClick={onDeleteMateria}>ELIMINAR</button>

            </div>

        </div>
    )
}

export default Materia_Info