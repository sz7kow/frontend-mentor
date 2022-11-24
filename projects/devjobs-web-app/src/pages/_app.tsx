import {NextPage} from 'next';
import {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';

import {GlobalStyle} from 'core/components/global-style';
import {DEFAULT_THEME} from '~theming/constants/default-theme';

import 'core/scss/reset.scss';

const Application: NextPage<AppProps> = props => {
  const {Component, pageProps} = props;

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default Application;
