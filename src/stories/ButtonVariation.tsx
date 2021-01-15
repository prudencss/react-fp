import React, { PropsWithChildren } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import Button, { IProps } from '../components/Button';
import { EButtonType, EIntrinsicButtonType } from '../enums/Button';
import * as EBehavior from '../enums/Behaviors';

interface ButtonProps extends IProps {
  label: string,
}

export class ButtonVariation extends React.Component<{ buttonPropsList: PropsWithChildren<ButtonProps>[] }, {}> {
  render() {
    const { buttonPropsList } = this.props;

    return (<section>
      {buttonPropsList.map((bp: ButtonProps, id) => (
        <article key={id} className="u-mb--l">
          <header><h3>{bp.label}</h3></header>
          <Button {...bp} />
          <hr/>
        </article>)
      )}
    </section>);
  }
}

const Template: Story<{ buttonPropsList: PropsWithChildren<ButtonProps>[]}> = args => <ButtonVariation {...args} />;
const args = {
  animation: EBehavior.EAnimation.Ripple,
  color: EBehavior.EColor.Primary,
  decoration: EBehavior.EDecoration.ElevatedBottom,
  size: EBehavior.ESize.M,
  disabled: undefined,
  type: EIntrinsicButtonType.Button,
  buttonType: EButtonType.Basic,
  moduleSpecificClassList: ['u-mb--m'],
  fab: false,
  onClick: () => null,
  onBlur: () => null,
  label: 'Medium Button',
  children: 'Click me!'
};

export const SizeVariations = Template.bind({});
SizeVariations.args = {
  buttonPropsList: [
    { ...args, size: EBehavior.ESize.XS, label: 'Tiny Button' },
    { ...args, size: EBehavior.ESize.S, label: 'Small Button' },
    { ...args },
    { ...args, size: EBehavior.ESize.L, label: 'Large Button' },
    { ...args, size: EBehavior.ESize.XL, label: 'Huge Button' },
  ],
};

export const ColorVariations = Template.bind({});
ColorVariations.args = {
  buttonPropsList: [
    { ...args, color: EBehavior.EColor.Primary, label: 'Primary Button' },
    { ...args, color: EBehavior.EColor.Secondary, label: 'Secondary Button' },
    { ...args, color: EBehavior.EColor.Accent, label: 'Accent Button' },
    { ...args, color: EBehavior.EColor.Info, label: 'Info Button' },
    { ...args, color: EBehavior.EColor.Warn, label: 'Warn Button' },
    { ...args, color: EBehavior.EColor.Danger, label: 'Danger Button' },
    { ...args, color: EBehavior.EColor.Success, label: 'Sucess Button' },
    { ...args, color: EBehavior.EColor.Disabled, label: 'Disabled Themed Button' },
    { ...args, color: EBehavior.EColor.NeutralPrimary, label: 'Neutral Primary Button' },
    { ...args, color: EBehavior.EColor.NeutralSecondary, label: 'Neutral Secondary Button' },
    { ...args, color: EBehavior.EColor.NeutralAccent, label: 'Neutral Accent Button' },
  ],
};

export const DecorationVariations = Template.bind({});
DecorationVariations.args = {
  buttonPropsList: [
    { ...args, decoration: EBehavior.EDecoration.Discrete, label: '"Discrete" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.DiscreteBottom, label: '"Discrete Bottom" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.Elevated, label: '"Elevated" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.ElevatedBottom, label: '"Elevated Bottom" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.Sunken, label: '"Sunken" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.Smooth, label: '"Smooth" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.FX1, label: '"FX1" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.FX2, label: '"FX2" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.Dreamy, label: '"Dreamy" decorated Button' },
    { ...args, decoration: EBehavior.EDecoration.DreamyExtra, label: '"DreamyExtra" decorated Button' },
  ],
};

export const AnimationVariations = Template.bind({});
AnimationVariations.args = {
  buttonPropsList: [
    { ...args, animation: EBehavior.EAnimation.Ripple, label: '"Ripple" animated Button' },
    { ...args, animation: EBehavior.EAnimation.Tata, label: '"Tata" animated Button' },
    { ...args, animation: EBehavior.EAnimation.Jiggle, label: '"Jiggle" animated Button' },
    { ...args, animation: EBehavior.EAnimation.RevealSlide, label: '"RevealSlide" animated Button' },
    { ...args, animation: EBehavior.EAnimation.RevealOpacity, label: '"RevealOpacity" animated Button' },
  ],
};

export const DisabledVariations = Template.bind({});
DisabledVariations.args = {
  buttonPropsList: [
    { ...args, disabled: EBehavior.EDisabled.Events, label: '"Events disabled" disabled Button' },
    { ...args, disabled: EBehavior.EDisabled.Pointer, label: '"Pointer disabled" disabled Button' },
  ],
};

export const TypeVariations = Template.bind({});
TypeVariations.args = {
  buttonPropsList: [
    { ...args, buttonType: EButtonType.Basic, label: '"Basic" typed Button' },
    { ...args, buttonType: EButtonType.Flat, label: '"Flat" typed Button' },
    { ...args, buttonType: EButtonType.Ghost, label: '"Ghost" typed Button' },
    { ...args, buttonType: EButtonType.Stroked, label: '"Stroked" typed Button' },
    { ...args, buttonType: EButtonType.NoBorder, label: '"NoBorder" typed Button' },
  ],
};




