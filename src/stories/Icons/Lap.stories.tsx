import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PlusCircleIcon } from '../../components/Icons';
import { IconProps } from '../../components/Icons/Types';

export default {
  component: PlusCircleIcon,
  title: 'Components/Icons/PlusCircle',
} as Meta;

const Template: Story<IconProps> = (args) => <PlusCircleIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  solid: false,
  styles: {
    color: 'gray-800',
    activeColor: 'gray-900',
    width: '4/5',
  },
};
