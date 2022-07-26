import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'
import { deepPurple, red } from '@material-ui/core/colors/'

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },

    secondary: {
      main: red[900],
    }
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

    </ThemeProvider>
  </React.StrictMode>
);


