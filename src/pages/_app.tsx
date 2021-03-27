import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { theme } from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="description" content="Description" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default App
