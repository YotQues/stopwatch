import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../state/reducers';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Stopwatch, StopwatchProps } from '../components/Stopwatch';
import '../index.css';

export default {
  component: Stopwatch,
  title: 'Components/Stopwatch',
  decorators: [
    (story) => <Provider store={createStore(reducer)}>{story()}</Provider>,
  ],
  argTypes: {
    onLapClick: { action: 'Lap Click' },
  },
} as Meta;

const Template: Story<StopwatchProps> = (args) => <Stopwatch {...args} />;

export const Default = Template.bind({});
