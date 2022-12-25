import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
}
body,#root {
    position:relative;
    min-height:100vh;
    width:100%;
}
`;
export default GlobalStyle;
