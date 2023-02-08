import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '../theme';
import { Provider } from 'react-redux';
import { store } from '../store';
import LayoutWrapper from '../layouts';



export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>        
            <LayoutWrapper {...pageProps}>
              <Component {...pageProps} />
            </LayoutWrapper>  
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};


