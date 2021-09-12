import React from 'react';

import { Button, ButtonProps } from '../components/Buttons/Button/Button';

import { Play, Pause, PlusCircleIcon } from '../components/Icons';

import '../../../index.css';

export default {
  component: Button,
  title: 'Buttons/Generic',
  argTypes: {
    label: {
      options: ['Start', 'Pause', 'Lap'],
      control: { type: 'radio' },
    },
    children: {
      options: [],
    },
    styles: {
      bgColor: 'gray-400',
      activeBgColor: 'gray-500',
      textColor: 'white',
      activeTextColor: 'white',
    },
  },
};
const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.arguments = {
  className: 'bg-blue-500 hover:bg-blue-600',
  label: {
    text: 'Generic Button',
    style: 'text-gray-200 group-hover:text-gray-100',
  },
};
