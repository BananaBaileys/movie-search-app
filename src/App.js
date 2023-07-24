import { useEffect } from 'react';

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
        <h1>App

        </h1>
    );
}

export default App;