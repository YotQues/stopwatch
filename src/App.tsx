import React from 'react';
// import {StartPauseButton} from '@buttons/'
import { StartPauseButton } from './components/Buttons';
import PlayPause from './components/HeroIcons/PlayPause';
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
        state={RunState.PAUSED}
        text={'Hi'}
      />
    </div>
  );
}

export default App;
