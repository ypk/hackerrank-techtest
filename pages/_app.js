import Head from 'next/head'
import RootLayout from "../app/layout";
import { commonMetadata as metadata } from "../app/metadata";
import "../app/globals.css";

function CapcoTestApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default CapcoTestApp;
