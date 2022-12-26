import Styled from 'styled-components';

export const Body = Styled.div`
  float: right;
  margin-top: 8px;
  
  @media(max-width: 35em) {
    margin-top: 16px;
    text-align: center;
    float: unset;
  }
`;

export const Label = Styled.label`
   color: #fff;
   display: inline-block;
`;

export const Switch = Styled.div`
  display: inline-block;
  position: relative;
  height: 26px;
  background-color: #e4e4e4;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 30%), 0 1px rgb(255 255 255 / 10%);
  top: 6px;
  left: 10px;
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

export const SwitchLabel = Styled.label<{ isChecked: boolean }>`
  position: relative;
  z-index: 2;
  float: left;
  width: 45px;
  line-height: 26px;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  cursor: pointer;
  color: ${(props: { isChecked: boolean; }) => props.isChecked ? '#fff' : '#000'};
`;
