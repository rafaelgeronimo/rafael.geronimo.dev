import { AppProps } from 'next/app'
import { useEffect } from 'react'
import * as gtag from '../utils/gtag'
import '../styles/globals.scss'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>Rafael Gerônimo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
