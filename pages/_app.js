import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
