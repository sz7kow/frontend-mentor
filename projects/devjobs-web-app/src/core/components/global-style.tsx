import {createGlobalStyle} from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                                Global Style                                */
/* -------------------------------------------------------------------------- */
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.palette.background.primary};
    font-family: ${({theme}) => theme.typography.fontFamily};
    font-size: ${({theme}) => theme.typography.body.fontSize};
    font-weight: ${({theme}) => theme.typography.body.fontWeight};
    line-height: ${({theme}) => theme.typography.body.lineHeight};
    color: ${({theme}) => theme.palette.typography.default};
  }

  h1 {
    font-size: ${({theme}) => theme.typography.h1.fontSize};
    font-weight: ${({theme}) => theme.typography.h1.fontWeight};
    line-height: ${({theme}) => theme.typography.h1.lineHeight};
    color: ${({theme}) => theme.palette.typography.title};
  }

  h2 {
    font-size: ${({theme}) => theme.typography.h2.fontSize};
    font-weight: ${({theme}) => theme.typography.h2.fontWeight};
    line-height: ${({theme}) => theme.typography.h2.lineHeight};
    color: ${({theme}) => theme.palette.typography.title};
  }

  h3 {
    font-size: ${({theme}) => theme.typography.h3.fontSize};
    font-weight: ${({theme}) => theme.typography.h3.fontWeight};
    line-height: ${({theme}) => theme.typography.h3.lineHeight};
    color: ${({theme}) => theme.palette.typography.title};
  }

  h4 {
    font-size: ${({theme}) => theme.typography.h4.fontSize};
    font-weight: ${({theme}) => theme.typography.h4.fontWeight};
    line-height: ${({theme}) => theme.typography.h4.lineHeight};
    color: ${({theme}) => theme.palette.typography.title};
  }

  button {
    font-size: ${({theme}) => theme.typography.button.fontSize};
    font-weight: ${({theme}) => theme.typography.button.fontWeight};
    line-height: ${({theme}) => theme.typography.button.lineHeight};
    color: ${({theme}) => theme.palette.typography.title};
  }
`;
