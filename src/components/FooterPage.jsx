import styles from "../css/FooterPage.module.css"

const FooterPage = () => {
    return (
        <div className={styles.contenedor}>
        <h2 className={styles.logotipo}>MovieShonen</h2>
        <div className={styles.follow}>Follow Us @Movieshonen:</div>
        <nav className={styles.navFoot}>
            <a href='#' className={styles.a}><i className="fab fa-facebook"></i></a>
            <a href='#' className={styles.a}><i className="fab fa-instagram"></i></a>
            <a href='#' className={styles.a}><i className="fab fa-twitter"></i></a>
            <a href='#' className={styles.a}><i className="fab fa-youtube"></i></a>
          </nav>
         </div>
      );
}
 
export default FooterPage;