import React, { useState } from 'react';

import { ButtonStack } from './components/Buttons';

export const App: React.FunctionComponent = (): JSX.Element => {
  const [isRun, setIsRun] = useState(false);

  const eventHandlers = {
    onStartClick: () => {
      console.log('running');
    },
    onPauseClick: () => {
      console.log('paused');
    },
    onLapClick: () => {
      console.log('lap');
    },
    onResetClick: () => {
      console.log('Refresh');
    },
    onStopClick: () => {
      console.log('Stop');
    },
  };

  return (
    <div className="p-8">
      <ButtonStack state={{ isRun }} {...eventHandlers} />
    </div>
  );
};
