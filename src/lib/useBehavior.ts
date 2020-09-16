import { useMemo } from 'react';

import {
  EAnimation,
  EColor,
  EDecoration,
  EDisabled,
  ESize,
  componentColor,
  componentSize,
  TBehavior,
  IBehaviorProps,
} from './Behaviors';

const useBehavior = <ComponentProps extends IBehaviorProps>({
  animation,
  color,
  decoration,
  size,
  disabled,
} : ComponentProps): (TBehavior | string)[] => {
  return useMemo((): (TBehavior | string)[] => [
    animation ?? null,
    color ?? null,
    decoration ?? null,
    size ?? null,
    disabled ?? null,
  ].filter(Boolean) as (TBehavior | string)[],
  [animation, color, decoration, size, disabled]);
}

export default useBehavior;
