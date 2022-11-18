import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    max-height: 100vh;
    overflow: hidden;
    background-color: ${({theme}) => theme.palette.background.primary};
    font-family: ${({theme}) => theme.typography.fontFamily};
    font-size: ${({theme}) => theme.typography.body.fontSize};
    font-weight: ${({theme}) => theme.typography.body.fontWeight};
    line-height: ${({theme}) => theme.typography.body.lineHeight};
    color: ${({theme}) => theme.palette.typography.default};
  }

  h1,h2,h3,h4 {
    color: ${({theme}) => theme.palette.typography.default};
  }
`;

export {GlobalStyle};
