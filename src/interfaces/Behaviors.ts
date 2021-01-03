import {
  EAnimation,
  EColor,
  EDecoration,
  EDisabled,
  ESize,
} from '../enums/Behaviors';

export interface IBehaviorProps {
  animation?: EAnimation;
  color?: EColor;
  decoration?: EDecoration;
  size?: ESize;
  disabled?: EDisabled;
}
