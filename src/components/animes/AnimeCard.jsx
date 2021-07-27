import { Link } from 'react-router-dom';
import styles from '../../css/Begin.module.css'

const AnimeCard = ({top}) => {
    //const imageurl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
    return ( 
        <li className={styles.li}>
            <Link to={"/anime/" + top.mal_id}>
                <img className={styles.image} src={top.image_url} alt={top.title}/>
                <div>{top.title}</div>
            </Link>
            </li>
     );
}
 
export default AnimeCard;