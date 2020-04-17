import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = props => {
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
        <MovieContext.Provider value={[ movies, setMovies ]}>
            { props.children }
        </MovieContext.Provider>
    );
}
