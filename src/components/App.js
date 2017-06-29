import React from 'react';

import PuzzleApp from './PuzzleApp'
import AppSkeleton from './AppSkeleton'


export default class App extends React.Component {

  render() {
    return (
      <AppSkeleton>
        <PuzzleApp />
      </AppSkeleton>
    );
  }
}
