
import { store } from '../store'
import { Provider } from 'react-redux'
import LayoutWrapper from '../layouts';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <ThemeProvider theme={theme}>
       <LayoutWrapper {...pageProps}>
      <Component {...pageProps} />
      </LayoutWrapper>
      </ThemeProvider>
    </Provider>

  )
}


