import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import ContractContextProvider from '../src/components/ContractContext';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContractContextProvider>
      <Layout>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </Layout>
    </ContractContextProvider>
  )
}

export default MyApp
