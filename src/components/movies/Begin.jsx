import MovieGrid from "./MovieGrid";
import styles from '../../css/Begin.module.css'

const Begin = () => {
    return ( 
        <div className={styles.container}>
            <h5 className={styles.title}>Movies</h5>
            <main>
              <MovieGrid/>
            </main>
        </div>
     );
}
 
export default Begin;