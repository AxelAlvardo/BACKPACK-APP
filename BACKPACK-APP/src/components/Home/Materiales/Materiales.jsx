import React, { useEffect, useState } from 'react'
import { Load } from '../Load/Load'
import { NavBar } from '../NavBar/NavBar'
import { Bar } from '../Bar/Bar'
import { FooterEnd } from '../../Page/Footer/FooterEnd'
import { Material } from '../Material/Material'
import { Reporte } from '../Reporte/Reporte'
import { AddMaterialForm } from '../AddMaterialForm/AddMaterialForm'
import { getAllMaterialesClient } from '../../../../services/materias.service'
import { keyGenerator } from '../../../../helpers/key'
import useAuthStore from '../../../store/store'
import { whoami } from '../../../../services/favorite.service'

export const Materiales = () => {
  const [backReport, setBackReport] = useState(false);
  const [backAdd, setBackAdd] = useState(false);


  const [documentosClient, setDocumentosCLient] = useState([]);

  const [search, setSearch] = useState('');
  const [favArray, setFavArray] = useState([])
  const { token } = useAuthStore();

  useEffect(() => {

    const fetchMterials = async () => {
      try {
        const data = await getAllMaterialesClient(token);
        setDocumentosCLient(data)

        const saveFavs = await whoami(token);
        setFavArray(saveFavs);

      } catch (error) {
        console.log(error);
      }
    }

    fetchMterials();

  }, [token])


  //METODO DEL FILTRADO AUTOMATICO

  const results = !search ? documentosClient : documentosClient.filter((dato) => dato.title.includes(search));



  return (
    <>
      <div className='mat-div-2'>

        {
          backReport ? <Reporte setBackReport={setBackReport} /> : null
        }

        {
          backAdd ? <AddMaterialForm setBackAdd={setBackAdd} /> : null
        }


        <Load />
        <NavBar search={search} setSearch={setSearch} />
        <Bar />


        <div className='material__div'>
          {
            results.map((doc) => {
              return <Material setBackReport={setBackReport} doc={doc} key={keyGenerator()} favArray={favArray}/>
            })
          }
        </div>


      </div>

      <FooterEnd />

    </>
  )
}
