import '../styles/globals.css'
import Script from 'next/script';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <Layout>
      <Script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"></Script>
      <Component {...pageProps} />
    </Layout>
  )
}
