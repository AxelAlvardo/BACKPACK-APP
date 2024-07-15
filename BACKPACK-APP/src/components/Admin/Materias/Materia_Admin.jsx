import { useEffect, useState } from "react"
import Materia_Info from "./Materia_Info"
import { getAllMateriasAdmin, postMateria } from "../../../../services/post.subject.service"
import { useForm } from "react-hook-form"
import { keyGenerator } from "../../../../helpers/key"
import { Alert } from "../../Alert/Alert"

import '../../../sass/layout/Materia/_materia_admin.scss'

const Materia_Admin = () => {


    const { register, handleSubmit, setValue } = useForm();

    const[add, setAdd] = useState(false);


    const onSubmitForm = handleSubmit((values) => {
        console.log(values);
        postMateria(values);
        setAdd(true);

        setTimeout(() => {
            setAdd(false);
            window.location.reload();
        }, 2500);
    })

    const[materiasAdmin, setMateriasAdmin] = useState([]);
  
    const getMateriasAdmin = async()=>{
      const allMateriasAdmin = await getAllMateriasAdmin();
      setMateriasAdmin(allMateriasAdmin.materias);
      return allMateriasAdmin;
    }
    
    useEffect(()=>{
      getMateriasAdmin();
    },[])


    return (
        <div className="view-container">

            <div className="title-container">
                <h2 className="user-mat">MATERIAS</h2>
            </div>


            <form className="info-container" onSubmit={onSubmitForm}>
                <input placeholder="Nombre"
                    {...register('name', { required: true })}
                />
                <input className="imgInput" placeholder="Imagen" type="text"
                    {...register('imgUrl', { required: true })}
                />
                <input type="text" placeholder="Código"
                    {...register('codigo', { required: true })}
                />
                <input type="text" placeholder="Carrera"
                    {...register('carreras', { required: true })}
                />
                <button>AGREGAR</button>


                {
                    add ? <Alert>Materia Agregada</Alert> : null
                }
            </form>

            <div className="cards-container">
            {
                materiasAdmin.map((materia)=>{
                    return <Materia_Info materia={materia} key={keyGenerator()}/>
                })
            }
            </div>

        </div>
    )
}

export default Materia_Admin