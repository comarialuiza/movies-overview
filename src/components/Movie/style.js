import styled from 'styled-components';

export const Container = styled.li`
    padding: 20px;
    text-align: center;
    color: #fff;

    @media (max-width: 480px) {
        margin-top: 20px;
    }

    .movieImageContainer {
        min-height: 250px;
    }

    .movieYear {
        font-size: 11px;
        margin-top: 10px;
    }

    .movieName {
        margin-top: 10px;
        font-size: 12px;
        line-height: 18px;
        height: 38px;
    }  
`;