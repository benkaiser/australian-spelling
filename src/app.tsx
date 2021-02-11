import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from './Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26C6DA',
      light: '#6ff9ff',
      dark: '#0095a8',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FF4081',
      light: '#ff79b0',
      dark: '#c60055',
      contrastText: '#FFFFFF'
    },
    text: {
      secondary: '#FFFFFF',
    }
  },
});

export default class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));