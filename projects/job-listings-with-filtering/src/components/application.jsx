import {createGlobalStyle, ThemeProvider} from 'styled-components';

import {ApplicationLayout} from 'components/application-layout';
import {JobsColumnContainer} from 'components/jobs-column-container';
import {defaultTheme} from 'constants/default-theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.palette.background.body};
    font-family: ${({theme}) => theme.typography.fontFamily};
    color: ${({theme}) => theme.palette.typography.default};
  }
`;

export const Application = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <ApplicationLayout>
      <JobsColumnContainer />
    </ApplicationLayout>
  </ThemeProvider>
);

Application.propTypes = {};
