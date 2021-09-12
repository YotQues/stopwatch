import React, { useState } from 'react';

import { ButtonStack } from './components/Buttons';

export const App: React.FunctionComponent = (): JSX.Element => {
  const [isRun, setIsRun] = useState(true);

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
  };

  return (
    <div className="p-8">
      <ButtonStack state={{ isRun }} {...eventHandlers} />
    </div>
  );
};
