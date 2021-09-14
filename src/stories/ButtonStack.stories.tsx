import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonStack, ButtonStackProps } from '../components/Buttons';

import * as ButtonStories from './Button.stories';

import '../index.css';

export default {
  component: ButtonStack,
  title: 'Components/ButtonStack',
  decorators: [
    (story) => (
      <div className="flex justify-center items-center">{story()}</div>
    ),
  ],
  argTypes: {
    state: {
      description:
        'Receives a value of undefined or a number(id returned from setInterval) to determine weather to display "StartButton" or "PauseButton".',
      options: [Math.floor(Math.random() * 10), undefined],
    },
    onStartClick: {
      description: 'Start the run of the stopwatch',
      action: 'Start stopwatch',
    },
    onPauseClick: {
      description: 'Pause the run of the stopwatch',
      action: 'Pause stopwatch',
    },
    onStopClick: {
      description: 'Stop the run of the stopwatch',
      action: 'Stop stopwatch',
    },
    onResetClick: {
      description: 'Reset the run of the stopwatch',
      action: 'Reset stopwatch',
    },
    onLapClick: {
      description: 'Add a lap to the list',
      action: 'Add Lap',
    },
  },
} as Meta;

const Template: Story<ButtonStackProps> = (args) => <ButtonStack {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: undefined,
};
