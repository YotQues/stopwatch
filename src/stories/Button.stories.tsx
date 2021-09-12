import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../components/Buttons/Button/Button';

import { Pause, Play, PlusCircleIcon } from '../components/Icons';

// import * as PauseStories from './Icons/Pause.stories';

import '../index.css';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    (story) => (
      <div className="flex justify-center items-center">{story()}</div>
    ),
  ],
} as Meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Generic Button',
  styles: {
    bgColor: 'gray-400',
    activeBgColor: 'gray-500',
    textColor: 'white',
    activeTextColor: 'white',
  },
};

export const StartButton = Template.bind({});
StartButton.args = {
  label: 'Start',
  styles: {
    bgColor: 'green-400',
    activeBgColor: 'green-500',
    textColor: 'gray-200',
    activeTextColor: 'gray-100',
  },
  children: <Play styles={{ color: 'gray-200', activeColor: 'gray-100' }} />,
};

export const PauseButton = Template.bind({});
PauseButton.args = {
  label: 'Pause',
  styles: {
    bgColor: 'yellow-300',
    activeBgColor: 'yellow-400',
    textColor: 'gray-900',
    activeTextColor: 'gray-800',
  },
  children: <Pause styles={{ color: 'gray-900', activeColor: 'gray-800' }} />,
};
export const LapButton = Template.bind({});
LapButton.args = {
  label: 'Lap',
  styles: {
    bgColor: 'gray-700',
    activeBgColor: 'gray-800',
    textColor: 'gray-200',
    activeTextColor: 'white',
  },
  children: (
    <PlusCircleIcon styles={{ color: 'gray-200', activeColor: 'white' }} />
  ),
};
