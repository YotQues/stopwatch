import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import '../index.css';

import { SingleLap, SingleLapProps } from '../components/Laps/SingleLap';

export default {
  component: SingleLap,
  title: 'Components/Laps/SingleLap',
  propTypes: {},
} as Meta;

const Template: Story<SingleLapProps> = (args) => <SingleLap {...args} />;

export const GenericTime = Template.bind({});
GenericTime.args = {
  time: 16556445,
  index: 0,
};

export const LongTime = Template.bind({});
LongTime.args = {
  time: 1655644534,
  index: 0,
};
