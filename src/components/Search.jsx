import '../css/Search.css';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

export function Search({clickS}) {
    const [searchText, setSearchText] = useState("");
    const history = useHistory();  
    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push("/?search=" + searchText); //to add a consultation parameter on browser's search
    }
    return (
        <form  onSubmit={handleSubmit} className={clickS ? 'searchContainer active' : 'searchContainer'}>
            <div className='box'>
                <input className='searchInput' 
                    type="text" 
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
