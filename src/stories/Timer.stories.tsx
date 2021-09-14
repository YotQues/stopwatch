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
  time: 0,
};

export const GenericTime = Template.bind({});
GenericTime.args = {
  time: 16556445,
};

export const LongTime = Template.bind({});
LongTime.args = {
  time: 1655644534,
};
