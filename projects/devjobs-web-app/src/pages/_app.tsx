import {domAnimation, LazyMotion} from 'framer-motion';
import {AppType} from 'next/app';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {Fragment, useEffect} from 'react';

import {withTRPC} from '~/app/trpc-next-instance';
import {PageAnimationProvider} from '~/job-offer/page-animation-provider';
import {PageHeader} from '~/job-offer/page-header';
import {ThemeProvider} from '~/theme/theme-provider';

import '~/app/tailwind-styles.css';

const App: AppType = ({Component, pageProps}) => {
  const router = useRouter();

  useEffect(() => {
    router.beforePopState(({as, options, url}) => {
      router.push(url, as, {...options, scroll: false});

      return true;
    });
  }, [router]);

  return (
    <Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <ThemeProvider>
        <LazyMotion features={domAnimation} strict>
          <PageHeader />
          <PageAnimationProvider>
            <Component {...pageProps} />
          </PageAnimationProvider>
        </LazyMotion>
      </ThemeProvider>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default withTRPC(App);
