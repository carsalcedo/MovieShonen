import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Begin from './components/movies/Begin';
import Tv from './components/tv/Tv';
import MovieDetail from './components/movies/MovieDetail';
import TvDetail from './components/tv/TvDetail';
import { useEffect, useState } from 'react';
import {useQuery} from './hooks/useQuery'
import { get } from './utils/clientHttp';
import FooterPage from './components/FooterPage';
import { Spinner } from './components/Spinner';
import { Search } from './components/Search';
import Contactus from './components/Contactus';
import Anime from './components/animes/Anime';
import AnimeDetail from './components/animes/AnimeDetail';



function App() {
  //to responsive menu
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  //to responsive search
  const [clickS, setClickS] = useState(false);
  const hadleSearch = () => setClickS(!clickS);

  //state to spinner
  const [isLoading, setIsLoading] = useState(true);

  //const query = useQuery();
  //const search = query.get("search");
  //console.log(search)

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

/*useEffect(() => {
  setIsLoading(true);
  const searchUrl = search
    ? "/search/movie?query=" + search
    : "/discover/movie";
  get(searchUrl).then((data) => {
    setMoviesData(data.results);
    setIsLoading(false);
  });
}, [search]);*/

  //useState and useEffect to tv shows
  const [tvData, setTvData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    /*const searchUrl = search
    ? "/search/tv?query=" + search
    : "/discover/tv"*/
    get("/discover/tv").then((data) => {
        console.log(data)
     setTvData(data.results);
     setIsLoading(false)
    });
}, []);

//load animes top 
const [topAnime, setTopAnime] = useState([]);
const getTopAnimes = async () => {
  const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
  .then(res => res.json())

  setTopAnime(temp.top);
}

useEffect(() => {
  setIsLoading(true);
  getTopAnimes();
  setIsLoading(false);
  },[]);
console.log(topAnime);

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
        <nav className={click ? 'navMenu active animated fadeInRight' : 'navMenu'}>
            <Link to='/' className="a active">Movies</Link>
            <Link to='/tv' className="a">TV Shows</Link>
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
        <Route exact path="/tv/:tvId">
          <TvDetail tvData={tvData}/>
        </Route>
        <Route exact path="/anime/:topMal_id">
          <AnimeDetail topAnime={topAnime}/>
        </Route>
        <Route path='/components/Contactus'>
       <Contactus/>
       </Route>
       <Route path='/animes'>
        <Anime topAnime={topAnime}/>
       </Route>
       <Route path='/tv'>
       <Tv tvData={tvData}/>
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
