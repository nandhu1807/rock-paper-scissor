import Styled from 'styled-components';
import { minWidthDevice } from '../utils/deviceSizes';

export const Body = Styled.div`
    text-align: center;
`;

export const Heading = Styled.h1`
    color: #fff;
    font-weight: 700;    
    font-family: Silkscreen,cursive;
    
    @media ${minWidthDevice.mobileXS} {
      font-size: 18px;
    }  
    
    @media ${minWidthDevice.mobileM} {
      font-size: 24px;
    }
    
    @media ${minWidthDevice.mobileL} {
      font-size: 40px;
    }  
`;
