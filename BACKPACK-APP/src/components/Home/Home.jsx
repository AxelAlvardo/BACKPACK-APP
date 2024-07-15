import { useEffect, useState } from "react"
import { getAllMaterias } from "../../../services/materias.service"
import { FooterEnd } from "../Page/Footer/FooterEnd"
import { Bar } from "./Bar/Bar"
import { Load } from "./Load/Load"
import { Materia } from "./Materia/Materia"
import { keyGenerator } from "../../../helpers/key"
import { NavBar } from "./NavBar/NavBar"
import useAuthStore from "../../store/store"

export const Home = ({ activeCamp, setActiveCamp, userLog, setNameMateria, setIdMateria }) => {

  const [materiasHome, setMateriasHome] = useState([]);

  const { token } = useAuthStore();

  const [search, setSearch] = useState('');

  //METODO DEL FILTRADO AUTOMATICO
  const results = !search ? materiasHome : materiasHome.filter((dato) => dato.name.includes(search));

  setActiveCamp(true);

  useEffect(() => {

    const fetchMaterias = async () => {
      try {
        const allMaterias = await getAllMaterias(token);
        if (Array.isArray(allMaterias.subjects)) {
          setMateriasHome(allMaterias.subjects);
        } else {
          setMateriasHome([]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMaterias();

  }, [token])

  return (
    <>
      <div className="container-home">
        <Load />

        <NavBar search={search} setSearch={setSearch} />

        <Bar activeCamp={activeCamp} />

        <div className="materia__div">
          {
            Array.isArray(materiasHome) && results.map((materia) => {
              return <Materia materia={materia} setNameMateria={setNameMateria} key={keyGenerator()} setIdMateria={setIdMateria} />
            })
          }

        </div>
      </div>

      <FooterEnd />

    </>
  )
}
