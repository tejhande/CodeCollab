import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#61dafb',
    },
    secondary: {
      main: '#f0db4f',
    },
    background: {
      default: '#282c34',
      paper: '#21252b',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontFamily: '"Fira Code", "monospace"',
    },
    h4: {
      fontFamily: '"Fira Code", "monospace"',
    },
    h6: {
      fontFamily: '"Fira Code", "monospace"',
    },
  },
});

export default theme;
