import React, { useState } from 'react'
import { NavBar } from '../NavBar/NavBar'
import { FooterEnd } from '../../Page/Footer/FooterEnd'
import { Load } from '../Load/Load'
import { useForm } from 'react-hook-form'
import { Alert } from '../../Alert/Alert'

export const Reporte = ({setBackReport}) => {

  const{register, handleSubmit} = useForm();
  const[alerta, setAlerta] = useState(false);


  const onSUbmitReport = handleSubmit((values)=>{
    console.log(values);
    setAlerta(true);

    setTimeout(() => {
        setAlerta(false);
        setBackReport(false);
    }, 3000);
  })

  return (
   <div className='report-container'>

        <button className='close-report'onClick={()=>{setBackReport(false)}}>
            <img src="../../../../public/images/close.svg" alt="close" />
        </button>


         <div className='report-div'>
            <form action="#" method="post" className='form-report' onSubmit={onSUbmitReport}>

                {
                    alerta ? <Alert>Reporte enviado con exito</Alert> : null
                }

                <h2 className='form__title-report'>Formulario de Denuncias de Documentos</h2>
                <label className='label-de'>Selecciona el tipo de denuncia:</label>
                
                <div className="report-campo">
                    <input type="checkbox" id="tipo1" name="denuncias[]" value="Contenido Falso" 
                        {...register('falso', {required: false})}
                    />
                    <label for="tipo1">Contenido Falso</label>
                </div>
                <div className="report-campo">
                    <input type="checkbox" id="tipo2" name="denuncias[]" value="Plagio" 
                        {...register('plagio', {required: false})}
                    />
                    <label for="tipo2">Plagio</label>
                </div>
                <div className="report-campo">
                    <input type="checkbox" id="tipo3" name="denuncias[]" value="Contenido Ofensivo" 
                        {...register('ofensivo', {required: false})}
                    />
                    <label for="tipo3">Contenido Ofensivo</label>
                </div>
                <div className="report-campo">
                    <input type="checkbox" id="tipo4" name="denuncias[]" value="Información Confidencial" 
                        {...register('confidencial', {required: false})}
                    />
                    <label for="tipo4">Información Confidencial</label>
                </div>
                <div className="report-campo">
                    <input type="checkbox" id="tipo5" name="denuncias[]" value="Manipulación de Información" 
                        {...register('manipulacion', {required: false})}
                    />
                    <label for="tipo5">Manipulación de Información</label>
                </div>

                <input type="submit" value="Enviar Denuncia" />
            </form>

        </div>
   
   </div>
  )
}
