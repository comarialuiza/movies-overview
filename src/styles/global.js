import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font: 13px 'Roboto Condensed', sans-serif;
        background: url('https://image.freepik.com/free-photo/starry-night-sky_1048-11828.jpg');
    }

    img {
        max-width: 100%;
    }
`;