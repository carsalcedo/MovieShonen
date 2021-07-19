import styles from '../../css/MovieDetail.module.css'
//import Pelicula from '../Pelicula.json';
import { useParams } from 'react-router';
import { Fragment, useEffect, useState } from 'react';
import { get } from '../../utils/clientHttp';
import MovieCarousel from './MovieCarousel';

const MovieDetail = ({moviesData}) => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then((data) =>{
            setMovie(data);
        });
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
    return (
        <Fragment>
        <div className={styles.peliculaP} style={{ backgroundImage:`url(${imageUrl})` }}>
            <div className={styles.contenedor}>
                <h3 className={styles.title}>{movie.title}</h3>
                <p className={styles.description}>{movie.overview}</p>
                <p className={styles.date}>Realease Date: {movie.release_date}</p>
                <button role="button" className={styles.boton}><i className="fas fa-play"></i>Display</button>
                <button role="button" className={styles.boton}><i className="fas fa-info-circle"></i>Most Information</button>
            </div>
        </div>
        <MovieCarousel moviesData={moviesData} />
        </Fragment>
      );
}
 
export default MovieDetail;