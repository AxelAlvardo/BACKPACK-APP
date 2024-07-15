import React, { useEffect, useState } from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Load } from '../Load/Load'
import {getAllMaterialesClient, getMateriaEspecific } from '../../../../services/materias.service'
import { Material } from '../Material/Material'
import { keyGenerator } from '../../../../helpers/key'
import { Materia } from '../Materia/Materia'
import { FooterEnd } from '../../Page/Footer/FooterEnd'

export const MateriaAll = ({nameMateria}) => {


  const[backReport, setBackReport] = useState(false);
  const[backAdd, setBackAdd] = useState(false);

  const[documentsEsp, setDocumentsEsp] = useState([]);

  const docsEsp = async()=>{
    const esp = await getMateriaEspecific(nameMateria);
    setDocumentsEsp(esp.documents);
  }


  useEffect(()=>{
    docsEsp();
  }, [])

  const[search, setSearch] = useState('');


  //METODO DEL FILTRADO AUTOMATICO

  const results = !search ? documentsEsp : documentsEsp.filter((dato)=> dato.title.includes(search));


  return (
    <div className='div-main'>
       <Load/>
      <NavBar search={search} setSearch={setSearch}/>

      <div className="materia-name">
        <h2 className='name-title'>Documetos</h2>
      </div>


      <div className='materialAll-div'>
          {
                results.map((doc)=>{
                  return <Material setBackReport={setBackReport} doc={doc} key={keyGenerator()}/>
              })
          }
      </div>

      
      <FooterEnd/>

    </div>
  )
}
