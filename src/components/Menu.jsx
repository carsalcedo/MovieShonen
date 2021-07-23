import {Link} from "react-router-dom";


const Menu = () => {
    
    return ( 
        <div className="contenedor">
        <nav>
            <Link to='/' className="a active">Movies</Link>
            <Link to='/series' className="a">Series</Link>
            <Link to='/animes' className="a">Animes</Link>
            <Link to='/contactus' className="a">Contact Us</Link>
          </nav>
    </div>


     );
   }
 
export default Menu;