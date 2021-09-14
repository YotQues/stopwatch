import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../state/reducers';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Stopwatch } from '../components/Stopwatch';
import { LapList } from '../components/Laps/LapList';
import { App } from '../App';
import '../index.css';

export default {
  component: App,
  title: 'Components/App',
} as Meta;

const Template: Story = () => (
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>
);

export const FullApp = Template.bind({});
