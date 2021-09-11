import React from 'react';

import { RunState } from './state/States';

import { LapButton, StartPauseButton } from './components/Buttons';

export const App: React.FunctionComponent = (): JSX.Element => {
  const onRunClick = () => {
    console.log('running');
  };
  const onPauseClick = () => {
    console.log('paused');
  };
  const onLapClick = () => {
    console.log('lap');
  };

  return (
    <div className="p-8 grid grid-cols-4">
      <StartPauseButton
        onPauseClick={onPauseClick}
        onRunClick={onRunClick}
        state={RunState.RUNNING}
      />
      <LapButton onClick={onLapClick} />
    </div>
  );
};

export default App;
