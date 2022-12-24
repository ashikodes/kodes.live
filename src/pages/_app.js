import Head from 'next/head';
import Script from 'next/script';

import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Emeka Ashikodi</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6T3GJS0NW3" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6T3GJS0NW3');
        `}
      </Script>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
