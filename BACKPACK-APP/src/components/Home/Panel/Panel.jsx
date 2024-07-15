import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuthStore from '../../../store/store'

export const Panel = ({ setBack }) => {
  return (
    <div className='panel-container'>
      <div className="panel">
        <h2>¿Desea Salir?</h2>

        <div className="panel__btn">
          <NavLink to='/login' className='pa-btn pa-sal'>Salir</NavLink>

          <button onClick={() => {setBack(false)}} className='pa-btn pa-no'>
            Regresar
          </button>

        </div>

      </div>
    </div>
  )
}