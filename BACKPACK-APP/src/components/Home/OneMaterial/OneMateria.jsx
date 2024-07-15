import React from 'react'
import { Load } from '../Load/Load'
import { NavBar } from '../NavBar/NavBar'
import { FooterEnd } from '../../Page/Footer/FooterEnd'

export const OneMateria = () => {
  return (
    <div>
       <Load/>
      <NavBar/>

      <div className="materia-name">
        <h2 className='name-title'>Documento</h2>
      </div>

      <div className="archive-container">
        <div className="archive__info-one">
            <figure >
              <img src="../../../../public/images/pdfred.png" alt="pdf-image" className='info-one' />
            </figure>

            <div className="one__info">
              <h2 className='one__title'>Titulo del PDF</h2>
              <p className='one__description'>Descripcion del PDF</p>
              
              <div className="one__info--dates">
                <p className='one__date'>Fecha del PDF</p>

                <p className='one__cicle'>Ciclo del PDF</p>
            </div>


            <button className='one__des'>
              Descargar
            </button>

          </div>
        </div>

        <div className="archive-watch">
            
        </div>
      </div>


      <FooterEnd/>

    </div>
  )
}
