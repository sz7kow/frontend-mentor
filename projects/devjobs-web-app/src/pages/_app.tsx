import {AnimatePresence, domAnimation, LazyMotion} from 'framer-motion';
import {AppType} from 'next/app';
import Head from 'next/head';
import {Fragment} from 'react';

import {withTRPC} from '~/app/trpc-next-instance';
import {ColorSchemePreferenceProvider} from '~/theme/color-scheme-preference-provider';

import '~/app/tailwind-styles.css';

const App: AppType = ({Component, pageProps, router}) => (
  <Fragment>
    <Head>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    </Head>
    <ColorSchemePreferenceProvider>
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </LazyMotion>
    </ColorSchemePreferenceProvider>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default withTRPC(App);
