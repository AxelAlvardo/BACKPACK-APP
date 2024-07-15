import { useEffect } from "react";
import { NavLink } from "react-router-dom"

export const Materia = ({materia, setNameMateria}) => {

  return (
    <section className="materia-sector">
        
        <div className="materia">

            <figure className="materia__img">
                <img src={`${materia.image}`} alt="materia-img"/>
            </figure>

            <div className="materia__text">
                <h3 className="materia__title">{materia.name}</h3>

                <button className='materia__cta' onClick={()=>{
                    setNameMateria(materia.name);
                }}>
                    <NavLink to={`/materiaAll`} className='cta'>
                        <p className="cta__p">
                            Entrar
                        </p>

                        <figure className="cta__img">
                            <img src="../../../../../public/images/white-arrow.svg" alt="white-arrow"/>
                        </figure>
                    </NavLink>
                </button>   
            </div>

        </div>
    </section>
  )
}
