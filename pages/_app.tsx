// @ts-ignore
import Navigation from '../components/Navigation'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
