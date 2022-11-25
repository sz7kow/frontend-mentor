import {NextPage} from 'next';
import {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';

import {GlobalStyle} from 'common/components/global-style';
import {DEFAULT_THEME} from 'themes/constants/default-theme';

import 'styles/scss/reset.scss';

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
