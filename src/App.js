import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Begin from './components/movies/Begin';
import MovieDetail from './components/movies/MovieDetail';



function App() {
  return (
    <div>
    <Router>
      <header>
      <div className="contenedor">
        <h2 className="logotipo">MovieShonen</h2>
        <nav>
            <Link to='/' className="a active">Movies</Link>
            <Link to='/series' className="a">Series</Link>
            <Link to='/animes' className="a">Animes</Link>
            <Link to='/contactus' className="a">Contact Us</Link>
          </nav>
         </div>
      </header>
      
      <Switch>
        <Route exact path="/movie/:movieId">
          <MovieDetail/>
        </Route>
      <Route path='/'>
       <Begin/>
       </Route>
     </Switch>


    </Router>

    
    </div>
  );
}

export default App;
