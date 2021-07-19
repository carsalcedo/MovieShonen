import MovieGrid from "./MovieGrid";
import styles from '../../css/Begin.module.css'

const Begin = ({moviesData}) => {
    return ( 
        <div className={styles.container}>
            <h5 className={styles.title}>Movies</h5>
            <main>
              <MovieGrid moviesData={moviesData}/>
            </main>
        </div>
     );
}
 
export default Begin;