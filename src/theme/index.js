import { createTheme } from '@mui/material/styles';
import palette from './palette';

// read more at https://material-ui.com/customization/themes
const theme = createTheme({
  palette: palette,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  topBar: {
    height: '35px'
  }
});

export default theme;