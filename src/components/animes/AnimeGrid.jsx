import styles from '../../css/Begin.module.css'
import AnimeCard from './AnimeCard';

const AnimeGrid = ({topAnime}) => {
   
    return ( 
        <ul className={styles.ul}>
            {topAnime.map((top) =>
               <AnimeCard key={top.mal_id} top={top}/>
            )}
        </ul>
     );
}
 
export default AnimeGrid
