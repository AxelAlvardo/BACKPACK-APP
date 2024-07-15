import React, { useState } from 'react'

export const Filter = ({setBackAdd}) => {

  return (
    <div className='filter-div'>
        <form className='form-filter'>
                {/* <div className="campo-filter">
                    <img src="../../../../public/images/materia.svg" alt="" />
                    <select name="materia" id="materia">
                        <option value="">Materia</option>
                        <option value="calculos">Calculos</option>
                        <option value="fisicas">Fisicas</option>
                        <option value="programacion">Programacion</option>
                    </select>
                </div> */}

                <div className="campo-filter">
                    <img src="../../../../public/images/calendar.svg" alt="filter-ico" />
                    <select name="year" id="year">
                        <option value="">Año</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>

                <div className="campo-filter">
                    <img src="../../../../public/images/graduation.svg" alt="filter-ico" />
                    <select name="ciclo" id="ciclo">
                        <option value="">Ciclo</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                    </select>
                </div>

                <div className="campo-filter">
                    <img src="../../../../public/images/grid.svg" alt="filter-ico" />
                    <select name="categoria" id="categoria">
                        <option value="">Categoría</option>
                        <option value="calculos">Calculos</option>
                        <option value="fisicas">Fisicas</option>
                        <option value="programacion">Programacion</option>
                    </select>
                </div>


            <div className="campo-filter-search">
                <button>
                    <img src="../../../../public/images/filter.svg" alt="filter-ico" />
                    <p>
                        Filtrar
                    </p>
                </button>
            </div>
        </form>

        {/* <button className='close-add-material' onClick={()=>{setBackAdd(true)}}>
            <img src="../../../../public/images/add.png" alt="close" />
        </button> */}
    </div>
  )
}