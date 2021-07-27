import TvGrid from "./TvGrid";
import styles from '../../css/Begin.module.css'

const Tv = ({tvData}) => {
    return ( 
        <div className={styles.container}>
            <h5 className={styles.title}>Tv Shows</h5>
            <main>
              <TvGrid tvData={tvData}/>
            </main>
        </div>
     );
}
 
export default Tv;