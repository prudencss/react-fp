import { useMemo } from 'react';

import {
  componentColor,
  componentSize,
  TBehavior,
  IBehaviorProps,
} from './Behaviors';

const useBehavior = <ComponentProps extends IBehaviorProps>(
  componentInfix: string,
  {
    animation,
    color,
    decoration,
    size,
    disabled,
  } : ComponentProps): (TBehavior | string)[] => {
    return useMemo((): (TBehavior | string)[] => [
      animation ?? null,
      color ? componentColor(componentInfix)(color) : null,
      decoration ?? null,
      size ? componentSize(componentInfix)(size) : null,
      disabled ?? null,
    ].filter(Boolean) as (TBehavior | string)[],
    [componentInfix, animation, color, decoration, size, disabled]);
  }

export default useBehavior;
