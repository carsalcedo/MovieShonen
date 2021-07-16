//import moviesData from '../moviesData.json';
import styles from '../../css/Begin.module.css'
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import { get } from '../../utils/clientHttp';



const MovieGrid = () => {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        get("/discover/movie")
        .then((data) => {
            console.log(data)
         setMoviesData(data.results);
        });
    }, []);

    

    return ( 
        <ul className={styles.ul}>
            {moviesData.map((movie) =>
               <MovieCard key={movie.id} movie={movie}/>
            )}
        </ul>
     );
}
 
export default MovieGrid
