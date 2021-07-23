import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Begin from './components/movies/Begin';
import MovieDetail from './components/movies/MovieDetail';
import { useEffect, useState } from 'react';
//import {useQuery} from './hooks/useQuery'
import { get } from './utils/clientHttp';
import FooterPage from './components/FooterPage';
import { Spinner } from './components/Spinner';
import { Search } from './components/Search';
import Contactus from './components/Contactus';


function App() {
  //to responsive menu
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  //to responsive search
  const [clickS, setClickS] = useState(false);
  const hadleSearch = () => setClickS(!clickS);

  //state to spinner
  const [isLoading, setIsLoading] = useState(true);

  /*const query = useQuery();
  const search = query.get("search");
  console.log(search)*/

  //useState and useEffect to movies
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    /*const searchUrl = search
    ? "/search/movie?query=" + search
    : "/discover/movie"*/
    get("/discover/movie").then((data) => {
        console.log(data)
     setMoviesData(data.results);
     setIsLoading(false)
    });
}, []);


if(isLoading){
  return <Spinner/>;
}


  return (
    <div>
    <Router>
      <header>
      <div className="contenedor">
      <button id='btSearch' onClick={hadleSearch}><i className={clickS ? "fas fa-search-minus" : "fas fa-search-plus"}/></button>
        <h2 className="logotipo">MovieShonen</h2>
        <Search clickS={clickS}/>
        <nav className={click ? 'navMenu active' : 'navMenu'}>
            <Link to='/' className="a active">Movies</Link>
            <Link to='/series' className="a">Series</Link>
            <Link to='/animes' className="a">Animes</Link>
            <Link to='/components/Contactus' className="a">Contact Us</Link>
          </nav>
          <button id='btMenu' onClick={handleClick}><i className={click ? 'fas fa-times' : "fas fa-bars"}/></button>
         </div>
      </header>
      
      <Switch>
        <Route exact path="/movie/:movieId">
          <MovieDetail moviesData={moviesData}/>
        </Route>
        <Route path='/components/Contactus'>
       <Contactus/>
       </Route>
      <Route path='/'>
       <Begin moviesData={moviesData}/>
       </Route>
     </Switch>


    </Router>

    <footer>
      <FooterPage/>
    </footer>
    
    </div>
  );
}

export default App;
