import React from 'react';
import Layout from './Layout';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CurriculumLists from './components/CurriculumLists';


export default class App extends Layout {
  public renderInternal(): React.ReactNode {
    return <>
      <Fab color="secondary" variant="extended" style={({width: '100%'})}>
        <AddIcon />
        Create List
      </Fab>
      {/* <RecentLists />
      <CustomLists /> */}
      <CurriculumLists />
    </>;
  }
}