import { EColor, ESize } from '../enums/Behaviors';

export const componentColor = (componentType: string) => (componentColor: EColor) => `c-${componentType}--${componentColor}`;

export const componentSize = (componentType: string) => (componentSize: ESize) => `c-${componentType}--${componentSize}`;

