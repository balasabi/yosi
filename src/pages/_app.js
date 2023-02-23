import * as React from 'react';
import { store ,persistor} from '../store'
import { Provider } from 'react-redux'
import LayoutWrapper from '../layouts';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Head from 'next/head';
import "../styles/css/globals.css";
import createEmotionCache from '../createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { PersistGate, } from "redux-persist/integration/react";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/svg/AppLogo.svg" />
        <title>YosiLab</title>
      </Head>
      <Provider store={store}>
      <PersistGate persistor={persistor} >
        <ThemeProvider theme={theme}>
          <LayoutWrapper {...pageProps}>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ThemeProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  )
}
