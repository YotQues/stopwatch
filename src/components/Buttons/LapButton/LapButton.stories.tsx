import React from 'react';

import { LapButton, LapButtonProps } from './LapButton';

export default {
  component: LapButton,
  title: 'Buttons/Lap',
};

const Template = (args: LapButtonProps) => <LapButton {...args} />;

export const Default = Template.bind({}, { onClick() {} });
