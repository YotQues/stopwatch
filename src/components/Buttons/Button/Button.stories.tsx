import React from 'react';

import { Button, ButtonProps } from './Button';

import '../../../index.css';

export default {
  component: Button,
  title: 'Buttons/Generic',
};
const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind(
  {},
  {
    className: 'bg-blue-500 hover:bg-blue-600',
    label: {
      text: 'Generic Button',
      style: 'text-gray-200 group-hover:text-gray-100',
    },
  }
);
