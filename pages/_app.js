import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Bree+Serif|Satisfy"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
