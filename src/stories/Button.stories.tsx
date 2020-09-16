import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { IProps as ButtonProps, EButtonType } from '../components/Button';
import * as Behavior from '../lib/Behaviors';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  animation: Behavior.EAnimation.Ripple,
  color: Behavior.componentColor('btn')(Behavior.EColor.Primary),
  decoration: Behavior.EDecoration.ElevatedBottom,
  size: Behavior.componentSize('btn')(Behavior.ESize.Medium),
  disabled: null,
  type:  "button",
  moduleSpecificClassList: [],
  buttonType: EButtonType.Basic,
  fab: false,
  onClick: null,
  onBlur: null,
  children: 'Default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  color: Behavior.componentColor('btn')(Behavior.EColor.Secondary),
  children: 'Secondary ...',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  color: Behavior.componentColor('btn')(Behavior.EColor.Success),
  size: Behavior.componentSize('btn')(Behavior.ESize.Large),
  children: 'Laaarge!',
};

