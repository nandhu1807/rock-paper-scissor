import styled from 'styled-components';
import { maxWidthDevice, minWidthDevice } from '../utils/deviceSizes';

export const Body = styled.div`
  position: static;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 30px;
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
`;

export const ToggleFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media ${maxWidthDevice.tablet} and (min-height: 42em) {
    bottom: 16px;
    right: 16px;
  }
  @media ${minWidthDevice.tablet} and (min-height: 34.375em) {
    bottom: 16px;
    right: 16px;
  }
`;

export const ToggleRules = styled.button`
  background-color: rgba(0, 0, 0, 0);
  padding: 14px 32px;
  color: white;
  letter-spacing: 3.2px;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;

  @media ${minWidthDevice.tablet} {
    left: unset;
    transform: none;
    bottom: 24px;
    right: 24px;
  }
`;
