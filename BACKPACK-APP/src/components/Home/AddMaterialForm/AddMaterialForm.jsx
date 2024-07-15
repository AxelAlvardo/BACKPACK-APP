import React from 'react'
import { useForm } from 'react-hook-form'
import { postMaterial } from '../../../../services/materias.service';

export const AddMaterialForm = ({setBackAdd}) => {

  const{register, handleSubmit, setValue} = useForm();


  const onSubmitMateria = handleSubmit((values)=>{
    values.admitido = false;
    console.log(values);
    postMaterial(values);
  })

  return (
    <div className='add-material-container'>

        <button className='close-add'onClick={()=>{setBackAdd(false)}}>
            <img src="../../../../public/images/close.svg" alt="close" />
        </button>

        <form action="/tu/endpoint/de/destino" method="post" enctype="multipart/form-data" className='form-mat'
          onSubmit={onSubmitMateria}
        >
            
            <h2 className='form__title-add'>Formulario de Denuncias de Documentos</h2>

            <label>Título:</label>
            <input type="text" id="titulo" name="titulo" required
              {...register('titulo', {required: true})}
              placeholder='Título del Documento'
            />

            <label>Descripción:</label>
            <input id="materia" name="materia" required
              {...register('materia', {required: true})}
              placeholder='Materia'
            />

            <label >Ciclo:</label>
            <input type="text" id="ciclo" name="ciclo" required
              {...register('ciclo', {required: true})}
              placeholder='Ciclo del Documento'
            />

            <label  >Descripción:</label>
            <input id="descripcion" name="descripcion" rows="4" required
              {...register('descripcion', {required: true})}
              placeholder='Descripción....'
            />

            <label>Subir archivo PDF:</label>
            <input type="file" accept=".pdf" required
              onChange={(e)=>{
                setValue('archivo', e.target.value);
              }}
            />

            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}
