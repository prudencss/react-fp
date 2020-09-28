import React, {
  FC,
  PropsWithChildren,
  useState,
} from 'react';
import classNames from 'classnames';

import { IBehaviorProps } from '../../lib/Behaviors';
import useBehavior from '../../lib/useBehavior';

export enum ELabelType {
  Basic = 'c-label-basic',
  NoBorder = 'c-label--no-border',
  Stroked = 'c-label--stroked',
  Flat = 'c-label--flat',
  Ghost = 'c-label--ghost',
};

export interface IProps extends IBehaviorProps {
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
  onClose?: (ev: React.SyntheticEvent<HTMLLabelElement>) => void;
}

const Label: FC<PropsWithChildren<IProps>> = (props: PropsWithChildren<IProps>) => {
  // const [animationState, setAnimationState] = useState(false);

  const { onClose, moduleSpecificClassList, labelType, fab } = props;
  const classList = classNames(
    'c-label',
    labelType,
    { 'c-label--fab': fab ?? false },
    useBehavior('label', props),
    moduleSpecificClassList,
    // { 'in': animationState },
  );
  const handleTransitionEndEvents = (ev: React.TransitionEvent<HTMLElement>): boolean => {
    ev.stopPropagation();
    ev.preventDefault();

    return false;
  };

  return (
    <label
      className={classList}
      // onMouseDown={() => setAnimationState(true)}
      // onMouseUp={() => setAnimationState(false)}
      onTransitionEnd={handleTransitionEndEvents}
    >
      {props.children}
    </label >
  );
};

export default Label;

