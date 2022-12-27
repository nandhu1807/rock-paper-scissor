import Styled from 'styled-components';
import { maxWidthDevice, minWidthDevice } from '../utils/deviceSizes';

export const Modal = Styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media ${minWidthDevice.tablet} {
    background-color: rgba(0, 0, 0, 0.5);
  }
  z-index: 6;
`;

export const Body = Styled.div`
  height: 300px;
  background-color: white;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 7%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-left: 8px;
  margin-right: 8px;
  
  @media ${maxWidthDevice.mobileS} {
    left: 0%;
  }
  
  @media ${maxWidthDevice.mobileM} {
    left: 2%;
  }
  
  @media ${maxWidthDevice.tablet} {
    left: 4%;
  }
  
  @media ${minWidthDevice.laptop} {
    left: 33% !important;
  }
  
  @media ${minWidthDevice.tablet} {
    height: auto;
    border-radius: 5px;
    padding: 54px;
    position: absolute;
    top: 50%;
    left: 20%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 3;
  }
`;

export const HeadingContainer = Styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  
  @media ${minWidthDevice.tablet} {
    margin-bottom: 20px;
  }
`;

export const Heading = Styled.h1`
  color: hsl(229, 25%, 31%);
  padding-top: 32px;
  margin-bottom: 32px;
  text-align: center;

  @media ${minWidthDevice.tablet} {
    padding-top: 0;
    margin-bottom: 0;
  }
`;

const Cross = Styled.div`
  width: 32px;
  height: 32px;
  opacity: 0.3;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const CrossDesktop = Styled(Cross)`
  left: 120px;
  display: none;

  @media ${minWidthDevice.tablet} {
    display: block;
  }
`;

export const CrossMobile = Styled(Cross)`
  position: absolute;
  margin-top: 16px;
  left: 50%;
  
  @media ${minWidthDevice.tablet} {
    display: none;
  }
`;
