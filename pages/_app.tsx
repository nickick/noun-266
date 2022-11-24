import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import ContractContextProvider from '../src/components/ContractContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContractContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContractContextProvider>
  )
}

export default MyApp
