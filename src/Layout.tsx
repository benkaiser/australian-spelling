import React from 'react';
import { AppBar, Container, Fab, Toolbar, Typography } from '@material-ui/core';

export default class Layout extends React.Component {
  public render(): React.ReactNode {
    return <>
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
            { this.renderInternal() }
          </div>
        </Container>
    </>;
  }

  protected renderInternal(): React.ReactNode {
    return <></>;
  }
}