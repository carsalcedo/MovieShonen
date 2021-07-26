import styles from '../../css/Begin.module.css'
import TvCard from './TvCard';


const TvGrid = ({tvData}) => {
   
    return ( 
        <ul className={styles.ul}>
            {tvData.map((tv) =>
               <TvCard key={tv.id} tv={tv}/>
            )}
        </ul>
     );
}
 
export default TvGrid
