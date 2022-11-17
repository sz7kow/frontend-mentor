import type {AppProps} from 'next/app';

const Application: React.FC<AppProps> = props => {
  const {Component, pageProps} = props;

  return <Component {...pageProps} />;
};

export default Application;
