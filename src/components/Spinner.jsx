import {FaSpinner} from 'react-icons/fa';
import styles from '../css/Spinner.module.css'

export function Spinner() {
    return (
        <div className={styles.spiner}>
            <FaSpinner className={styles.spining} size={80}/>
        </div>
    )
}
