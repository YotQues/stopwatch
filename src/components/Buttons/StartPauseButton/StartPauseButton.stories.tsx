import React from 'react';
import { RunState } from '../../../state/States';

import { StartPauseButton, StartPauseButtonProps } from './StartPauseButton';

export default {
  component: StartPauseButton,
  title: 'Buttons/StartPause',
};

const Template = (args: StartPauseButtonProps) => (
  <StartPauseButton {...args} />
);

export const Running = Template.bind(
  {},
  {
    state: RunState.RUNNING,
    onRunClick: () => {},
    onPauseClick: () => {},
  }
);

export const Paused = Template.bind(
  {},
  {
    state: RunState.PAUSED,
    onRunClick: () => {},
    onPauseClick: () => {},
  }
);
