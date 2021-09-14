import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../state/reducers';

import { Story, Meta } from '@storybook/react/types-6-0';

import { LapList, LapListProps } from '../components/Laps/LapList';
import '../index.css';

export default {
  component: LapList,
  title: 'Components/Laps/LapList',
  decorators: [
    (story) => <Provider store={createStore(reducer)}>{story()}</Provider>,
  ],
} as Meta;

const Template: Story<void> = (args) => <LapList />;

export const Default = Template.bind({});
