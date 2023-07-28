import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

//27566bf4


const API_URL = 'http://www.omdbapi.com?apikey=27566bf4'

const movie1 = { /*movie example*/
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imbdID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}



const App = () => {


    // getting movies from console log to moviecard so we can map over them
    const [movies, setMovies ]= useState([]);

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
                    /* magnifing icon */
                    onClick={() => {}}
                    /* also has a onClick property to this image */
                />
            </div>

            <div className="container">
                
                <MovieCard movie1={movie1} />
                
                {/* <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>


                </div> */}
            </div>

        </div>
    );
}

export default App;