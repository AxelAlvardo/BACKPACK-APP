import { useEffect, useState } from "react";
import { getFavorites, whoami } from "../../../../services/favorite.service"
import useAuthStore from "../../../store/store";
import { Material } from "../Material/Material";
import { Reporte } from "../Reporte/Reporte";
import { AddMaterialForm } from "../AddMaterialForm/AddMaterialForm";
import { keyGenerator } from "../../../../helpers/key";

export const Favorites = () => {

  const { token } = useAuthStore();

  const [backReport, setBackReport] = useState(false);
  const [backAdd, setBackAdd] = useState(false);

  const [fav, setFav] = useState([]);
  const [search, setSearch] = useState('');

  const [favArray, setFavArray] = useState([])


  const results = !search ? fav : fav.filter((dato) => dato.title.includes(search));


  useEffect(() => {

    const getFavAPI = async () => {
      const data = await getFavorites(token);
      setFav(data);

      const saveFavs = await whoami(token);
      setFavArray(saveFavs);
    }

    getFavAPI();
  }, [])


  return (
    <>
      <div className="materia-name">
        <h2 className='name-title'>Favoritos</h2>
      </div>

      <div className='material__div-fav'>
        {
          backReport ? <Reporte setBackReport={setBackReport} /> : null
        }

        {
          backAdd ? <AddMaterialForm setBackAdd={setBackAdd} /> : null
        }

        <div className='material__div'>
          {
            results.map((doc) => {
              return <Material setBackReport={setBackReport} doc={doc} key={keyGenerator()} favArray={favArray} />
            })
          }
        </div>

      </div>
    </>
  )
}
