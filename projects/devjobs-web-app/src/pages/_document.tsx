import {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';

import {themeInjectingScript} from '~/theme/theme-injecting-script';

const Document: React.FC = () => (
  <Html>
    <Head>
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
      <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet" />
      <link href="/images/avatar-sz7kow.png" rel="shortcut icon" type="image/x-icon" />
    </Head>
    <body>
      <div id="modal-root" />
      <Main />
      <NextScript />
      <Script
        dangerouslySetInnerHTML={{__html: themeInjectingScript}}
        id="load-theme-preference"
        strategy="afterInteractive"
      />
    </body>
  </Html>
);

// eslint-disable-next-line import/no-default-export
export default Document;
