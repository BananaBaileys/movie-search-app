import React from 'react';

// it's good practive for file name and component to have the same name
// not required 


const MovieCard = ( { movie1 }) => {
    return (
         <div className="movie">
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

        </div>

    );
}


export default MovieCard;