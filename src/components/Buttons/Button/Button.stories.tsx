import React from 'react';

import { Button } from './Button';

export default {
  component: Button,
  title: 'Buttons: Button',
};
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'px-4 py-2 bg-blue text-white rounded hover:bg-blue-400',
  children: 'Default Button',
  onClick: () => console.log('button clicked'),
};