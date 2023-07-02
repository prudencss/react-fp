import React, { FC, PropsWithChildren, useState } from "react";
import classNames from "classnames";

import { IBehaviorProps } from "../../interfaces/Behaviors";
import useBehavior from "../../hooks/useBehavior";

export enum ELabelType {
  Basic = "c-label-basic",
  NoBorder = "c-label--no-border",
  Stroked = "c-label--stroked",
  Flat = "c-label--flat",
  Ghost = "c-label--ghost",
}

export interface ILabelProps extends IBehaviorProps {
  /**
   * Add _custom styles_ as string-array class-list
   * *default:* []
   * *example:*
   * ```tsx
   * import Label, { ELabelType } from '@prudencss/react-fp';
   *
   * <Label
   *   moduleSpecificClassList={['first-module__labels--primary', 'u-hidden@xl']}
   * >
   *   {labelContent}
   * </Label>
   * ```
   */
  moduleSpecificClassList?: string[];

  /**
   * Add prepackaged styles per type easily
   * *options:* ```ELabelType```
   */
  labelType?: ELabelType;

  /**
   * Make the label a Floating Action Label (circular)
   */
  fab?: boolean;
  onBlur?: (ev: React.SyntheticEvent<HTMLElement>) => void;
}

export const Label: FC<PropsWithChildren<ILabelProps>> = ({
  children,
  moduleSpecificClassList,
  labelType,
  fab,
  animation,
  color,
  decoration,
  size,
  disabled,
  onBlur,
}) => {
  const [animationState, setAnimationState] = useState(false);
  const classList = classNames(
    "c-label",
    labelType,
    { "c-label--fab": fab ?? false },
    useBehavior("label", { animation, color, decoration, size, disabled }),
    moduleSpecificClassList,
    { in: animationState }
  );
  const handleTransitionEndEvents = (
    ev: React.TransitionEvent<HTMLElement>
  ): boolean => {
    ev.stopPropagation();
    ev.preventDefault();

    return false;
  };

  return (
    <label
      className={classList}
      onMouseDown={() => setAnimationState(true)}
      onMouseUp={() => setAnimationState(false)}
      onTransitionEnd={handleTransitionEndEvents}
      onBlur={onBlur}
    >
      {children}
    </label>
  );
};

export default Label;
