import styles from '../../css/Begin.module.css'
import MovieCard from './MovieCard';

const MovieGrid = ({moviesData}) => {
   
    return ( 
        <ul className={styles.ul}>
            {moviesData.map((movie) =>
               <MovieCard key={movie.id} movie={movie}/>
            )}
        </ul>
     );
}
 
export default MovieGrid
