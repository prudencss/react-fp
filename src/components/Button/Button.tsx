import React, { FC, PropsWithChildren, useState } from "react";
import classnames from "classnames";

import useBehavior from "../../hooks/useBehavior";
import { IBehaviorProps } from "../../interfaces/Behaviors";
import { EButtonType, EIntrinsicButtonType } from "../../enums/Button";

export interface IButtonProps extends IBehaviorProps {
  /**
   * Define _button behaviour_
   * *default:* 'button'
   * *options:* 'button', 'submit', 'reset'
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
  type?: EIntrinsicButtonType;

  /**
   * Add _custom styles_ as string-array class-list
   * *default:* []
   * *example:*
   * ```tsx
   * import Button, { EButtonType } from '@prudencss/react-fp';
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
   * Add prepackaged styles per type easily
   * *options:* ```EButtonType```
   */
  buttonType?: EButtonType;

  /**
   * Make the button a Floating Action Button (circular)
   */
  fab?: boolean;
  onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
  onBlur?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  animation,
  color,
  decoration,
  size,
  disabled,
  onClick,
  onBlur,
  moduleSpecificClassList,
  type,
  buttonType,
  fab,
}) => {
  const [animationState, setAnimationState] = useState(false);

  const classList = classnames(
    "c-btn",
    buttonType,
    { "c-btn--fab": fab ?? false },
    useBehavior("btn", { animation, color, decoration, size, disabled }),
    moduleSpecificClassList,
    { in: animationState }
  );
  const optionalDisabledProps = disabled
    ? { disabled: true, "aria-disabled": true }
    : {};
  const handleOnTransitionEnd = (
    ev: React.TransitionEvent<HTMLElement>
  ): boolean => {
    ev.stopPropagation();
    ev.preventDefault();

    return false;
  };
  const handleOnBlur = (
    ev: React.SyntheticEvent<HTMLButtonElement>
  ): boolean => {
    setAnimationState(false);
    onBlur?.call(this, ev);

    return true;
  };

  return (
    <button
      type={type ?? "button"}
      className={classList}
      {...optionalDisabledProps}
      onClick={onClick}
      onMouseDown={() => setAnimationState(true)}
      onMouseUp={() => setAnimationState(false)}
      onBlur={handleOnBlur}
      onTransitionEnd={handleOnTransitionEnd}
    >
      {children}
    </button>
  );
};

export default Button;
