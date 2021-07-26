import { Link } from 'react-router-dom';
import styles from '../../css/Begin.module.css'

const TvCard = ({tv}) => {
    const imageurl = 'https://image.tmdb.org/t/p/w300' + tv.poster_path
    return ( 
        <li className={styles.li}>
            <Link to={"/tv/" + tv.id}>
                <img className={styles.image} src={imageurl} alt={tv.name}/>
                <div>{tv.name}</div>
            </Link>
            </li>
     );
}
 
export default TvCard;