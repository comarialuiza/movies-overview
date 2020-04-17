import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;

    h1 {
        max-width: 200px;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        
        @media (min-width: 1141px) {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 20px;
        }

        @media (min-width: 481px) and (max-width: 1140px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            padding: 0 20px;
        }
    }
`;