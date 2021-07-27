import styles from '../../css/MovieDetail.module.css'
//import Pelicula from '../Pelicula.json';
import { useParams } from 'react-router';
import { Fragment, useEffect, useState } from 'react';
//import { get } from '../../utils/clientHttp';
import AnimeCarousel from './AnimeCarousel';
import { Spinner } from '../Spinner';

const AnimeDetail = ({topAnime}) => {
    const {animeId} = useParams();
    const [isLoading, setIsLoading] = useState(true); //state to load-time tv
    const [anime, setAnime] = useState([]);

    const [clickm, setClickm] = useState(false);
    const handleClickM = () => setClickm(!clickm);
    
    

    if (!anime) {
        return null;
    }

    return (
        <Fragment>
        <div className={styles.peliculaP} style={{ backgroundImage:`url(${anime.image_url})` }}>
            <div className={styles.contenedor}>
                <h3 className={styles.title}>{anime.title}</h3>
               
                <p className={styles.date}>Episodes: {anime.episodes}</p>
                <p className={styles.date}>Start Date: {anime.start_date}</p>
                <p className={styles.date}>End Date: {anime.end_date}</p>
                <button role="button" className={styles.boton}><i className="fas fa-play"></i>Display</button>
                <button onClick={handleClickM} role="button" className={styles.boton}><i className="fas fa-info-circle"></i>Most Information</button>
                {clickm && 
                <div className={`${styles.msinfo} animated fadeInUp`}>
                <p> <strong>Ratting:</strong> {anime.rank}</p>
                <p> <strong>Type:</strong> {anime.type}</p>
                <p> <strong>Episodes:</strong> {anime.episodes}</p>
                </div>
                } 
            </div>
            
        </div>
        <AnimeCarousel topAnime={topAnime} />
        </Fragment>
      );
}
 
export default AnimeDetail;