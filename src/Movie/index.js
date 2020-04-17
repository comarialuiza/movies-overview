import React from 'react';

const Movie = ({ name, image, year, key}) => {
    return (
        <li key={ key }>
            <p>{ name }</p>
            <img src={ image } alt={ name }/>
            <p>{ year }</p>
        </li>
    );
}

export default Movie;