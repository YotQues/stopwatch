import React from 'react';

import { Button, ButtonProps } from './Button';

import '../../../index.css';

export default {
  component: Button,
  title: 'Buttons/Button',
};
const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind(
  {},
  {
    /** Use only TailwindCSS classes */
    className:
      'px-4 py-2 leading-4 bg-blue-500 text-white rounded hover:bg-blue-600',
    children: 'Default Button',
  }
);
