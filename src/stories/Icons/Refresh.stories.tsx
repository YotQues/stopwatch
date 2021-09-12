import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Refresh } from '../../components/Icons';
import { IconProps } from '../../components/Icons/Types';

export default {
  component: Refresh,
  title: 'Components/Icons/Refresh',
} as Meta;

const Template: Story<IconProps> = (args) => <Refresh {...args} />;

export const Default = Template.bind({});
Default.args = {
  solid: false,
  styles: {
    color: 'gray-800',
    activeColor: 'gray-900',
    width: '4/5',
  },
};
