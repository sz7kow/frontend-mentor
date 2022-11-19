import {Html, Head, Main, NextScript} from 'next/document';

/* -------------------------------------------------------------------------- */
/*                                  Document                                  */
/* -------------------------------------------------------------------------- */
const Document: React.FC = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

// eslint-disable-next-line import/no-default-export
export default Document;
