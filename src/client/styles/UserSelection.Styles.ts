import Styled from 'styled-components';
import { maxWidthDevice, minWidthDevice } from '../utils/deviceSizes';

export const Body = Styled.div`
    margin-top: 32px;
    text-align: center;
`;

export const InfoPlayer1 = Styled.div`
    color: #fff;
    margin-top: 8px;
    margin-bottom: 16px;
    font-weight: 700;
`;

export const IconDiv = Styled.div`
    display: inline-block;
    margin-right: 24px;
`;

export const IconImage = Styled.img`
    cursor: pointer;
`;

export const ComputerButton = Styled.button`
    background-color: rgba(0,0,0,0);
    padding: 14px 32px;
    color: white;
    letter-spacing: 3.2px;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
`;

export const Flex = Styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: space-around;
    @media ${minWidthDevice.tablet} {
        justify-content: center;
        margin-top: 40px;
    }
`;

export const Container = Styled.div`
    margin-bottom: 32px;
    padding: 0 8px;
    @media ${minWidthDevice.tablet} {
        margin-right: 24px;
    }
`;

export const Heading = Styled.h3`
    color: white;
    text-align: center;
    margin-bottom: 32px;
`;

export const WinnerFlex = Styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-around;
    @media ${minWidthDevice.tablet} {
        justify-content: center;
    }
`;

export const WinnerContainer = Styled.div`
    margin-bottom: 16px;
`;

export const Winner = Styled.h1`
    margin-bottom: 16px;
    text-align: center;
    font-size: 24px;
    color: white;
    
    @media ${maxWidthDevice.tablet} {
        font-size: 20px;
    }
`;

export const ResetButton = Styled.div`
    padding: 16px 16px;
    background-color: white;
    border-radius: 5px;
    color: hsl(237, 49%, 15%);
    font-size: 14px;
    letter-spacing: 0.8px;
    cursor: pointer;
`;
