import Styled from 'styled-components';

export const Body = Styled.div`
    margin-top: 32px;
    text-align: center;
`;

export const Container = Styled.div`
    text-align: center;
`;

export const ScoreBorder = Styled.div`
    display: inline-block;
    background-color: white;
    border-radius: 5px;
    padding: 0.5rem 0.5rem;
    text-align: center;
    margin-right: 16px;
    
    @media(max-width: 25em) {
        padding: 3px;
    }
    
`;

export const ScoreHeader = Styled.h3`
    font-size: 0.5rem;
    letter-spacing: 0.05rem;
    color: rgb(42, 70, 192);
`;

export const ScoreValue = Styled.h1`
    font-size: 1.75rem;
    color: rgb(59, 67, 99);
`;
