import React from 'react';

import {
  LapButton,
  StartButton,
  PauseButton,
  ResetButton,
  StopButton,
} from './index';

// interface ButtonType {
//   styles: ButtonStyles;
//   label: string;
//   icon: JSX.Element;
//   onClick: () => void;
// }
type Handler = () => void;

interface ButtonStackProps {
  state: {
    isRun: boolean;
  };
  onStartClick: Handler;
  onPauseClick: Handler;
  onLapClick: Handler;
  onResetClick: Handler;
  onStopClick: Handler;
}

export function ButtonStack({
  state,
  onStartClick,
  onPauseClick,
  onLapClick,
  onResetClick,
  onStopClick,
}: ButtonStackProps): JSX.Element {
  const renderRunButton = (): JSX.Element => {
    return !state.isRun ? (
      <StartButton onClick={onStartClick} />
    ) : (
      <PauseButton onClick={onPauseClick} />
    );
  };

  return (
    <div className="flex gap-x-2 md:gap-x-3.5 lg:gap-x-5">
      {renderRunButton()}
      <LapButton onClick={onLapClick} />
      <ResetButton onClick={onResetClick} />
      <StopButton onClick={onStopClick} />
    </div>
  );
}