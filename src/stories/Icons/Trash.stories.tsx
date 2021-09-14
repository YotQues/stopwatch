import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Trash } from '../../components/Icons';
import { IconProps } from '../../components/Icons/Types';

export default {
  component: Trash,
  title: 'Components/Icons/Trash',
} as Meta;

const Template: Story<IconProps> = (args) => <Trash {...args} />;

export const Default = Template.bind({});
Default.args = {
  solid: false,
  styles: {
    color: 'gray-800',
    activeColor: 'gray-900',
    width: '4/5',
  },
};
