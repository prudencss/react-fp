import React, { PropsWithChildren } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { IProps as ButtonProps } from "../components/Button";
import { EButtonType, EIntrinsicButtonType } from "../enums/Button";
import * as EBehavior from "../enums/Behaviors";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    animation: { control: { type: "select", options: EBehavior.EAnimation } },
    color: { control: { type: "select", options: EBehavior.EColor } },
    decoration: { control: { type: "select", options: EBehavior.EDecoration } },
    size: { control: { type: "select", options: EBehavior.ESize } },
    disabled: { control: { type: "select", options: EBehavior.EDisabled } },
    type: {
      control: { type: "select", options: ["button", "submit", "reset"] },
    },
    buttonType: { control: { type: "select", options: EButtonType } },
  },
} as Meta;

const args = {
  animation: EBehavior.EAnimation.Ripple,
  color: EBehavior.EColor.Primary,
  decoration: EBehavior.EDecoration.ElevatedBottom,
  size: EBehavior.ESize.M,
  disabled: undefined,
  type: EIntrinsicButtonType.Button,
  buttonType: EButtonType.Basic,
  moduleSpecificClassList: ["u-mb--medium"],
  fab: false,
  onClick: () => null,
  onBlur: () => null,
  children: "Click me!",
};

export const Configurable: Story<PropsWithChildren<ButtonProps>> = (args) => (
  <>
    <header>
      <h3>Use Storybook Controls to configure</h3>
    </header>
    <Button {...args} />
  </>
);
Configurable.args = {
  ...args,
};
