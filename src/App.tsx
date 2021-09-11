import React from 'react';
// import {StartPauseButton} from '@buttons/'
import { StartPauseButton } from './components/Buttons';
import { RunState } from './state/States';

function App(): JSX.Element {
  const onRunClick = () => {
    console.log('running');
  };
  const onPauseClick = () => {
    console.log('paused');
  };

  return (
    <div className="p-8">
      <StartPauseButton
        onPauseClick={onPauseClick}
        onRunClick={onRunClick}
        state={RunState.RUNNING}
      />
    </div>
  );
}

export default App;
