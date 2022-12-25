import Styled from 'styled-components';

export const Body = Styled.div`
    margin-top: 32px;
    text-align: center;
`;

export const IconDiv = Styled.div`
    display: inline-block;
    margin-right: 24px;
`;

export const IconImage = Styled.img`
    cursor: pointer;
`;

export const Flex = Styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    @media(min-width: 62em) {
        justify-content: center;
    }
`;

export const Container = Styled.div`
    margin-bottom: 2rem;
    padding: 0 0.5rem;
`;

export const Heading = Styled.h3`
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    @media(max-width: 28em) {
        min-height: 2.8125rem;
    }
`;

export const WinnerContainer = Styled.div`
    @media(max-width: 61.999em) {
        margin-bottom: 1rem;
    }
    @media(min-width: 62em) {
        top: 5rem;
    }
`;

export const Winner = Styled.h1`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2.5rem;
    color: white;
    
    @media(max-width: 50em) {
        font-size: 20px;
    }
`;

export const ResetButton = Styled.div`
    padding: 1.25rem 1.5rem;
    background-color: white;
    border-radius: 5px;
    color: hsl(237, 49%, 15%);
    font-size: 0.875rem;
    letter-spacing: 0.1rem;
    cursor: pointer;

    &: hover {
        color: hsl(349, 71%, 52%);
    }
`;
