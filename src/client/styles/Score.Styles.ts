import Styled from 'styled-components';
import { maxWidthDevice, minWidthDevice } from '../utils/deviceSizes';

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
    padding: 8px;
    text-align: center;
    margin-right: 16px;
    margin-left: 20px;

    @media ${maxWidthDevice.mobileL} {
        padding: 3px;
        margin-left: 0px;
        margin-right: 8px;
    }
    
    @media ${minWidthDevice.tablet} {
        padding: 16px;
    }
`;

export const ScoreHeader = Styled.h3`
    font-size: 8px;
    letter-spacing: 0.8px;
    color: rgb(42, 70, 192);
    
    @media ${minWidthDevice.tablet} {
        font-size: 20px;
    }
`;

export const ScoreValue = Styled.h1`
    font-size: 28px;
    color: rgb(59, 67, 99);
    margin-top: 8px;
`;
