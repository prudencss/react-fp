import React, {
  FC,
  PropsWithChildren,
  useState,
} from "react";
import classnames from "classnames";

import { IBehaviorProps } from '../lib/Behaviors';
import useBehavior from '../lib/useBehavior';

export interface IProps extends IBehaviorProps {
  material: string,
  materialModSize: string,
  moduleSpecificClassList: string[],
}

const Component: FC<PropsWithChildren<IProps>> = (props: IProps) => {
  const [ maximizedState, setMaximizedState] = useState(false);
  const [ animationState, setAnimationState ] = useState(false);

  const { children, material, materialModSize, moduleSpecificClassList } = props;

  const classList = classnames(
    'e-document',
    {
      "m-body": material ?? false,
      "m-body__size": materialModSize ?? false,
    },
    useBehavior('document', props),
    moduleSpecificClassList,
    { 'in': animationState },
  );

  const handleOnDocumentToggleMaximize = (ev: React.SyntheticEvent<Element>): boolean => {
    setMaximizedState(!maximizedState);

    return false;
  }

  return (
    <div
      className={classList}
      on={handleOn}
    >
      {children}
    </div>
  );
}

export default Component;
