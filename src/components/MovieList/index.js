import React, { useContext } from 'react';
import Movie from '../Movie';

import { MovieContext } from '../MovieContext';
import { Container } from './style';

const MovieList = () => {
    const [ movies, setMovies ] = useContext(MovieContext);
    return (
        <Container>
            <h1><img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG42.png" alt="Star Wars"/></h1>
            <ul>
                { movies.map(movie => (
                    <Movie name={ movie.Title } image={ movie.Poster } year={ movie.Year } key={ movie.imdbID } />
                )) }
            </ul>
        </Container>
    );
}

export default MovieList;