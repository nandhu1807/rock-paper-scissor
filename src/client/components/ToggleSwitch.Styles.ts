import Styled from 'styled-components';

export const Body = Styled.div`
  float: right;
`;

export const Switch = Styled.div`
  position: relative;
  height: 26px;
  background-color: #e4e4e4;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 30%), 0 1px rgb(255 255 255 / 10%);
  top: 10px;
  left: 20px;
`;

export const SwitchRadio = Styled.input`
  display: none;
`;

export const SwitchSelection = Styled.span`
  position: absolute;
  left: 0px;
  width: 45px;
  height: 26px;
  background: #216ba5;
  border-radius: 3px;
`;

export const SwitchLabel = Styled.label`
  position: relative;
  z-index: 2;
  float: left;
  width: 45px;
  line-height: 26px;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  cursor: pointer;

  ${SwitchRadio}:checked + & {
    color: #fff;
  }
`;
