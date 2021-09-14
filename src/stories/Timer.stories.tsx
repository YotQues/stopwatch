import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Timer, TimerProps } from '../components/Timer';

import '../index.css';

export default {
  component: Timer,
  title: 'Components/Timer',
} as Meta;

const Template: Story<TimerProps> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: Date.now(),
};
