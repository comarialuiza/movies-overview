import React from 'react';

import { Container } from './style';

const Movie = ({ name, image, year, key}) => {
    return (
        <Container key={ key }>
            <div className="movieImageContainer">
                <img src={ image } alt={ name }/>
            </div>
            <p className="movieName">{ name }</p>
            <p className="movieYear">{ year }</p>
        </Container>
    );
}

export default Movie;