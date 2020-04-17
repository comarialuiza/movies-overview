import React, { useState, useEffect } from 'react';
import Movie from '../Movie';
import axios from 'axios';

const MovieList = () => {
    const [ movies, setMovies ] = useState([]);
    const getMovieInfo = async () => {
        const res = await axios.get('http://www.omdbapi.com/?s=star+wars&apikey=93e74609');
        const movieInfo = res.data.Search;
        setMovies(movieInfo);
    }

    useEffect(() => {
        getMovieInfo()
    })

    return (
        <>
        <h1>Movie List!</h1>
            <ul>
                { movies.map(movie => (
                    <Movie name={ movie.Title } image={ movie.Poster } year={ movie.Year } key={ movie.imdbID } />
                ))}
            </ul>
        </>
    );
}

export default MovieList;