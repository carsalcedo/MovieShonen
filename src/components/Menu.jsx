import {Link} from "react-router-dom";


const Menu = () => {
    
    return ( 
        <div className="contenedor">
        <h2 className="logotipo">MovieShonen</h2>
        <nav>
            <Link to='/' className="a active">Begin</Link>
            <Link to='/series' className="a">Series</Link>
            <Link to='/movies' className="a">Movies</Link>
            <Link to='/animes' className="a">Animes</Link>
            <Link to='/mrecent' className="a">Most Recent</Link>
          </nav>
    </div>


     );
   }
 
export default Menu;