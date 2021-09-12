import React from 'react';

import { Button, ButtonProps } from './Button';

import '../../../index.css';

export default {
  component: Button,
  title: 'Buttons/Generic',
  argTypes: {
    label: {
      text: 'Overwritten text',
      style: 'TailwindCSS classes',
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

/* export const StartRun = Template.bind({},{
  ...Default.args
}) */
