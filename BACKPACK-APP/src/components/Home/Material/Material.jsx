import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Reporte } from '../Reporte/Reporte';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { favoriteService } from '../../../../services/favorite.service';
import useAuthStore from '../../../store/store';


export const Material = ({ setBackReport, doc }) => {

  const [fav, setFav] = useState(false);
  const [countFav, setCountFav] = useState(0);


  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(0);


  const{token} = useAuthStore();

  const handleFavClick = async () => {
    try {

      console.log(token);
      favoriteService(doc._id, token);

      setFav(!fav);
      setCountFav(prevCount => fav ? prevCount - 1 : prevCount + 1);

    } catch (error) {
      console.error("Error al marcar como favorito:", error);
      alert('Error al marcar como favorito: ' + (error.message || ''));
    }
  }

  return (
    <div className='material'>


      <div className="fav__content">

        <figure>
          <img src="../../../../public/images/pdf.png" alt="pdf-image" />
        </figure>

        <div className="fav__info">
          <h2 className='fav-title'>{doc.title}</h2>
          <p className='fav__description'>Año: {doc.publication_year}</p>
          <p className='fav__description'>Categoría: {doc.category}</p>

          <div className="fav__info--dates">

            <p className='dates__cicle'>Ciclo : 0{doc.publication_cycle}</p>
          </div>

        </div>
      </div>

      <div className="fav__interaction">
        <div className="fav__section" >

          <div className="fav__section-heart" onClick={handleFavClick}>
            {
              fav ? (
                <figure>
                  <img src="../../../../public/images/fav.svg" alt="heart-ico" />
                  <p className='count'>{countFav}</p>
                </figure>
              ) : (
                <figure>
                  <img src="../../../../public/images/heart.svg" alt="heart-ico" />
                  <p className='count'>{countFav}</p>
                </figure>
              )
            }
          </div>

          <div className="fav__section-like" onClick={() => { setLike(!like) }}>
            {
              like ? (
                <figure>
                  <img src="../../../../public/images/addLike.png" className='like-ico' alt="like-ico" />
                  <p className='count'>{countLike + 1}</p>
                </figure>
              ) : (
                <figure>
                  <img src="../../../../public/images/like.png" alt="like-ico" className='like-ico' />
                  <p className='count'>{countLike}</p>
                </figure>
              )
            }
          </div>

        </div>

        <div className="fav__options">

          <a href={doc.document} className='ico-fav-container' to='/oneMateria' target='_blank'>
            <img src="../../../../public/images/send-pdf.svg" alt="descarga" />
          </a>

          <button to='/reporte' className='ico-fav-container' onClick={() => { setBackReport(true) }}>
            <img src="../../../../public/images/report.svg" alt="descarga" />
          </button>
        </div>
      </div>

    </div>
  )
}