import AnimeGrid from "./AnimeGrid";
import styles from '../../css/Begin.module.css'

const Anime = ({topAnime}) => {
    return ( 
        <div className={styles.container}>
            <h5 className={styles.title}>Animes</h5>
            <main>
              <AnimeGrid topAnime={topAnime}/>
            </main>
        </div>
     );
}
 
export default Anime;