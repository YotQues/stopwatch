import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../components/Buttons/Button';

import {
  Pause,
  Play,
  PlusCircleIcon,
  Refresh,
  Stop,
} from '../components/Icons';

import '../index.css';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    onClick: { action: 'clicked', description: 'A props provided function' },
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

export const ResetButton = Template.bind({});
ResetButton.args = {
  label: 'Reset',
  styles: {
    bgColor: 'blue-500',
    activeBgColor: 'blue-600',
    textColor: 'white',
    activeTextColor: 'gray-100',
  },
  children: <Refresh styles={{ color: 'white', activeColor: 'gray-100' }} />,
};
export const StopButton = Template.bind({});
StopButton.args = {
  label: 'Stop',
  styles: {
    bgColor: 'red-500',
    activeBgColor: 'red-600',
    textColor: 'gray-200',
    activeTextColor: 'gray-100',
  },
  children: <Stop styles={{ color: 'gray-100', activeColor: 'gray-100' }} />,
};
