import Espera from './Espera'
import '../../../../sass/layout/Material/_material_view.scss'
import { getAllMateriales } from '../../../../../services/materias.service'
import { useEffect, useState } from 'react'
import { keyGenerator } from '../../../../../helpers/key'

const Material_Espera = () => {

    const[documentos, setDocumentos] = useState([]);

    const extrarDocumentos = async()=>{
        const extraer = await getAllMateriales();
        setDocumentos(extraer.documents);
    }

    useEffect(()=>{
        extrarDocumentos();
    },[])

    console.log(documentos);

    return (
        <div className='material-container'>
            <h1>MATERIAL</h1>
            {
                documentos.map((documento)=>{
                    return <Espera documento={documento} key={keyGenerator()}/>
                })
            }
        </div>
    )
}
export default Material_Espera