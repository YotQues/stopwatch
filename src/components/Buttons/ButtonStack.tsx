import { IntervalId } from '../../state/reducers/watchReducer';

import {
  LapButton,
  StartButton,
  PauseButton,
  ResetButton,
  StopButton,
} from './index';

type Handler = () => void;

interface ButtonStackProps {
  state: IntervalId;
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
    return !state ? (
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
