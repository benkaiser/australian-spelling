import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Container, createMuiTheme, Fab, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
        <AppBar position="static">
            <Toolbar>
              <Container fixed>
                <Typography variant="h6" color="textSecondary">
                  Australian Spelling
                </Typography>
              </Container>
            </Toolbar>
          </AppBar>
        <Container fixed>

          <div className='containerContent'>
            <Fab color="secondary" variant="extended" style={({width: '100%'})}>
              <AddIcon />
              Create List
            </Fab>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));