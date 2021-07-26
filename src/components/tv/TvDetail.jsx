import styles from '../../css/MovieDetail.module.css'
//import Pelicula from '../Pelicula.json';
import { useParams } from 'react-router';
import { Fragment, useEffect, useState } from 'react';
import { get } from '../../utils/clientHttp';
import TvCarousel from './TvCarousel';
import { Spinner } from '../Spinner';

const TvDetail = ({tvData}) => {
    const {tvId} = useParams();
    const [isLoading, setIsLoading] = useState(true); //state to load-time tv
    const [tv, setTv] = useState(null);

    const [clickm, setClickm] = useState(false);
    const handleClickM = () => setClickm(!clickm);

    useEffect(() => {
        setIsLoading(true);
        get("/tv/" + tvId).then((data) =>{
            setIsLoading(false)
            setTv(data);
        });
    }, [tvId]);

    if (isLoading){
        return <Spinner/>;
    }

    if (!tv) {
        return null;
    }

    const imageUrl = 'https://image.tmdb.org/t/p/w500' + tv.backdrop_path;
    return (
        <Fragment>
        <div className={styles.peliculaP} style={{ backgroundImage:`url(${imageUrl})` }}>
            <div className={styles.contenedor}>
                <h3 className={styles.title}>{tv.name}</h3>
                <p className={styles.description}>{tv.overview}</p>
                <p className={styles.date}>Genres: {tv.genres.map(genre => genre.name).join(", ")}</p>
                <button role="button" className={styles.boton}><i className="fas fa-play"></i>Display</button>
                <button onClick={handleClickM} role="button" className={styles.boton}><i className="fas fa-info-circle"></i>Most Information</button>
                {clickm && 
                <div className={`${styles.msinfo} animated fadeInUp`}>
                <p> <strong>Ratting:</strong> {tv.popularity}</p>
                <p> <strong>Seasons:</strong> {tv.number_of_seasons}</p>
                <p> <strong>Episodes:</strong> {tv.number_of_episodes}</p>
                <p>Episode Run Time: {tv.episode_run_time}min</p>
                <p>Status: {tv.status}</p>
                <p> <strong>Network:</strong> {tv.networks.map(net => net.name).join(", ")}</p>
                <p> <strong>Air Date:</strong> {tv.first_air_date}</p>
                <p> <strong>Original Language:</strong> {tv.original_language}</p>
                </div>
                } 
            </div>
            
        </div>
        <TvCarousel tvData={tvData}/>
        </Fragment>
      );
}
 
export default TvDetail;