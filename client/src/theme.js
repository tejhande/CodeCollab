import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#61dafb',
    },
    secondary: {
      main: '#f0db4f',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Hack", "monospace"',
  },
});

export const darkTheme = createTheme({
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
    fontFamily: '"Hack", "monospace"',
  },
});
