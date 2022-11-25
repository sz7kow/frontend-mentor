import {createGlobalStyle} from 'styled-components';

import {createTypographyStyles} from 'themes/utils/create-typography-styles';

export const GlobalStyle = createGlobalStyle`
  body {
    ${createTypographyStyles('body')}
    background-color: ${({theme}) => theme.palette.background.primary};
    font-family: ${({theme}) => theme.typography.fontFamily};
    color: ${({theme}) => theme.palette.typography.default};
  }
  h1 {
    ${createTypographyStyles('h1')}
    color: ${({theme}) => theme.palette.typography.title};
  }
  h2 {
    ${createTypographyStyles('h2')}
    color: ${({theme}) => theme.palette.typography.title};
  }
  h3 {
    ${createTypographyStyles('h3')}
    color: ${({theme}) => theme.palette.typography.title};
  }
  h4 {
    ${createTypographyStyles('h4')}
    color: ${({theme}) => theme.palette.typography.title};
  }
`;
