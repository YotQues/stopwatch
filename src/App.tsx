import React from 'react';

import { RunState } from './state/States';

import { StartPauseButton } from './components/Buttons';

function App(): JSX.Element {
  const onRunClick = () => {
    console.log('running');
  };
  const onPauseClick = () => {
    console.log('paused');
  };

  return (
    <div className="p-8 grid grid-cols-4 grid">
      <StartPauseButton
        onPauseClick={onPauseClick}
        onRunClick={onRunClick}
        state={RunState.PAUSED}
      />
    </div>
  );
}

export default App;
