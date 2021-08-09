import styles from '../../css/MovieDetail.module.css'
//import Pelicula from '../Pelicula.json';
import { useParams } from 'react-router';
import { Fragment, useEffect, useState } from 'react';
import { get } from '../../utils/clientHttp';
import MovieCarousel from './MovieCarousel';
import { Spinner } from '../Spinner';
import Rating from '@material-ui/lab/Rating'

const MovieDetail = ({moviesData}) => {
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true); //state to load-time movie
    const [movie, setMovie] = useState(null);

    const [clickm, setClickm] = useState(false);
    const handleClickM = () => setClickm(!clickm);

    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then((data) =>{
            setIsLoading(false)
            setMovie(data);
        });
    }, [movieId]);

    if (isLoading){
        return <Spinner/>;
    }

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
                <div className={styles.date}><Rating name="read-only" value={movie.popularity} readOnly /></div>
                <button role="button" className={styles.boton}><i className="fas fa-play"></i>Display</button>
                <button onClick={handleClickM} role="button" className={styles.boton}><i className="fas fa-info-circle"></i>Most Information</button>
                {clickm && 
                <div className={`${styles.msinfo} animated fadeInUp`}>
                <p>Genres: {movie.genres.map(genre => genre.name).join(", ")}</p>
                <p>Realease Date: {movie.release_date}</p>
                <p> <strong>Original title:</strong> {movie.original_title}</p>
                <p> <strong>Original Language:</strong> {movie.original_language}</p>
                </div>
                } 
            </div>
            
        </div>
        <MovieCarousel moviesData={moviesData} />
        </Fragment>
      );
}
 
export default MovieDetail;