import '../styles/globals.css'
import { wrapper } from '../app/store'
import type { AppProps } from 'next/app'
import { lstat } from 'fs'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
// export default wrapper.useWrappedStore(MyApp)

