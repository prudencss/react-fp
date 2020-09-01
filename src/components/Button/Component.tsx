import React, { FC } from 'react';
import classNames from 'classnames';

import { Disabled as DisabledBehaviour } from '../../lib/Behaviours';

export interface IProps {
  /**
   * Define _button behaviour_
   * *default:* 'button'
   * *example:*
   * ```tsx
   * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
   *
   *   <Button
   *     htmlType="submit"
   *   >
   *     {buttonContent}
   *   </Button>
   * ```
   */
  htmlType?: 'button' | 'submit' | 'reset' | undefined;

  /**
   * Add _custom styles_ as string-array class-list
   * *default:* []
   * *example:*
   * ```tsx
   * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
   *
   * <Button
   *   moduleSpecificClassList={['first-module__buttons--primary', 'u-hidden@xl']}
   * >
   *   {buttonContent}
   * </Button>
   * ```
   */
  moduleSpecificClassList?: string[];

  /**
   * Add a predefined _prudencss/framework-specific animation_
   * *default:* undefined
   * *example:*
   * ```tsx
   * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
   * import Behaviours from '@prudencss/react-ts-fp/lib'
   *
   * <Button
   *   animation={Behaviours.Animation.Ripple}
   * >
   *   {buttonContent}
   * </Button>
   * ```
   */
  animation?: string;

  /**
   * Add a predefined _prudencss/framework-sepecific color_ by _category_
   * *default:* primary
   * *options:* Primary, Secondary, Accent, Success, Info, Warn, Danger, Disabled, Light, Dark
   * *example:*
   * ```tsx
   * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
   * import Behaviours from '@prudencss/react-ts-fp/lib';
   *
   * <Button
   *   color={(Behaviours.ComponentColor.Primary as unknown as Function)('btn')},
   * >
   *   {buttonContent}
   * </Button>
   * ```
   */
  color?: string;

  /**
   * Add a predefined _decorative shadow_
   *
   * *default:* ElevatedBottom
   * *options:* Discrete, Elevated, ElevatedBottom, Sunken, ...
   * *example:*
   * ```tsx
   * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
   * import Behaviours from '@prudencss/react-ts-fp/lib'
   *
   * <Button
   *   decoration={Behaviours.Decoration.Elevated}
   * >
   *   {buttonContent}
   * </Button>
   * ```
   */
  decoration?: string;

  /**
   * Add disabled behaviour/appearance to the button
   *
   * 1. The _disabled_ and _aria-disabled_ html properties will be used/enabled
   * 2. A certain helper class will be added that stops pointer events and adds a fitting pointer decoration (_not-allowed_)
   * 3. An additional sugar css-class *disabled* will be added for your quick concerns
   *
   * *default:* undefined
   * *options:* true | false
   * *example:*
   * ```tsx
   * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
   * import Behaviours from '@prudencss/react-ts-fp/lib';
   *
   * <Button
   *  disabled={true}
   * >
   *   {buttonContent}
   * </Button>
   * ```
   */
  disabled?: boolean;

  /*
   * Add a predefined size variation to your specific button instance
   *
   * *default:* (Behaviours.ComponentSize.Medium as unknown as Function)('btn')
   * *options:* Tiny | Small | Medium | Large | Huge
   * *example:*
   * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
   * import Behaviours from '@prudencss/react-ts-fp/lib';
   *
   * <Button
   *  size={(Behaviours.ComponentSize.Small as unknown as Function)('btn')}
   * >
   *   {buttonContent}
   * </Button>
   *
   * ```tsx
   */
  size?: string;

  /*
   *
   */
  buttonType?: string;
  onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
  onBlur?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}


export class Component extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    const { onClick, onBlur,  animation, color, decoration, disabled, size, buttonType, moduleSpecificClassList, htmlType } = this.props;
    const _disabled: string = disabled ? DisabledBehaviour : '';
    const classList = [animation, color, decoration, size, buttonType, _disabled];
    const optionalDisabledProps = disabled ? { disabled: true, "aria-disabled": true } : {};

    return (
      <button
        type={htmlType}
        className={`${disabled ? 'disabled' : ''} c-btn ${classList.join(' ')} ${(moduleSpecificClassList || []).join(' ')}`}
        {...optionalDisabledProps}
        onClick={onClick}
        onBlur={onBlur}
        onTransitionEnd={this.handleTransitionEndEvents}
      >
        {this.props.children}
      </button >
    );
  }

  protected handleTransitionEndEvents = (ev: React.TransitionEvent<HTMLElement>): boolean => {
    ev.stopPropagation();
    ev.preventDefault();

    return false;
  }
}

interface IState {}

export default Component;

