import React from 'react';
import { render } from 'react-dom';
import MainApp from './mainApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#7A527E",
  }
});

const App = () => (
  <MuiThemeProvider>
    <MainApp />
  </MuiThemeProvider>
);

render(
    <App/>,
    document.getElementById('main')
)