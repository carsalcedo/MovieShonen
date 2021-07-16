import { Link } from 'react-router-dom';
import styles from '../../css/Begin.module.css'

const MovieCard = ({movie}) => {
    const imageurl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
    return ( 
        <li className={styles.li}>
            <Link to={"/movie/" + movie.id}>
                <img className={styles.image} src={imageurl} alt={movie.title}/>
                <div>{movie.title}</div>
            </Link>
            </li>
     );
}
 
export default MovieCard;