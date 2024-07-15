import React, { useEffect, useState } from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Load } from '../Load/Load'
import { getAllMaterialesClient, getMateriaEspecific } from '../../../../services/materias.service'
import { Material } from '../Material/Material'
import { keyGenerator } from '../../../../helpers/key'
import { Materia } from '../Materia/Materia'
import { FooterEnd } from '../../Page/Footer/FooterEnd'
import useAuthStore from '../../../store/store'
import { whoami } from '../../../../services/favorite.service'

export const MateriaAll = ({ nameMateria, idMateria }) => {


  const [backReport, setBackReport] = useState(false);
  const [backAdd, setBackAdd] = useState(false);

  const [documentsEsp, setDocumentsEsp] = useState([]);
  const [search, setSearch] = useState('');

  const [favArray, setFavArray] = useState([])


  const { token } = useAuthStore();

  const docsEsp = async () => {
    const posts = await getMateriaEspecific(idMateria, token);
    setDocumentsEsp(posts);

    const saveFavs = await whoami(token);
    setFavArray(saveFavs);
  }

  //METODO DEL FILTRADO AUTOMATICO

  const results = !search ? documentsEsp : documentsEsp.filter((dato) => dato.title.includes(search));

  useEffect(() => {
    docsEsp();
  }, [])

  console.log(documentsEsp);

  return (
    <div className='div-main'>
      <Load />
      <NavBar search={search} setSearch={setSearch} />

      <div className="materia-name">
        <h2 className='name-title'>{nameMateria}</h2>
      </div>


      <div className='material__div'>
        {
          results.map((doc) => {
            return <Material setBackReport={setBackReport} doc={doc} key={keyGenerator()} favArray={favArray} />
          })
        }
      </div>


      <FooterEnd />

    </div>
  )
}
