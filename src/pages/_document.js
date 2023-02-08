import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme';
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
