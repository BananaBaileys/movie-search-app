import { useEffect } from 'react';


import './App.css';
import SearchIcon from './search.svg';

//27566bf4

const API_URL = 'http://www.omdbapi.com?apikey=27566bf4'

const App = () => {

    // to fetch movies
    const searchMovies = async (title) => {
        const response = await fetch('${API_URL}&s=${title}');  //call api  
        const data = await response.json();     // get the data from it

        console.log(data.search);
    }
    useEffect(() => {
        searchMovies('Spiderman');

    }, []);

    return (
        <div className="app">
            <h1>Find Your Movie</h1>        {/* title */}
            <div className="search">
                <input 
                    placeholder = "Search for movies"
                    value="superman"
                    onChange={() => {}}
                    />
                <img
                    src={SearchIcon}
                    alt="search"
                />
            </div>
        </div>
    );
}

export default App;