import '../css/Search.css';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router';
import {BsSearch} from 'react-icons/bs';
import {useQuery} from '../hooks/useQuery'

export function Search({clickS}) {
    const query = useQuery();
    const search = query.get("search");
  
    const [searchText, setSearchText] = useState("");
    const history = useHistory();
  
    useEffect(() => {
      setSearchText(search || "");
    }, [search]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      history.push("/?search=" + searchText);
    };
 
    return (
        <form  onSubmit={handleSubmit} className={clickS ? 'searchContainer active' : 'searchContainer'}>
            <div className='box'>
                <input className='searchInput' 
                    type="text" 
                    placeholder="search"
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)}
                 />
                <button className='searchButton' type="submit">
                    <BsSearch size={15}/>
                    {/*<i className="fas fa-search"/>*/}
                </button>
            </div>
        </form>
    )
}
