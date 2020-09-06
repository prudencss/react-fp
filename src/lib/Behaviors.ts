export enum EAnimation {
  Jiggle = "a-jiggle",
  Ripple = "a-ripple",
  RevealOpacity = "a-reveal-opacity",
  RevealScale = "a-reveal-scale2d",
  RevealSlide = "a-reveal-slide",
  Tata = "a-tata",
}

export enum EColor {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
  Success = "success",
  Info = "info",
  Warn = "warn",
  Danger = "danger",
  Disabled = "disabled",
  Light = "neutral-light",
  Dark = "neutral-dark",
}

export const componentColor = (componentType: string) => (componentColor: EColor) => `c-${componentType}-${componentColor}`;

export enum EDecoration {
  Discrete = 'u-shadow--discrete',
  Elevated = 'u-shadow--elevated',
  ElevatedBottom = 'u-shadow--elevated-bottom',
  sunken = 'u-shadow--sunken',
}

export const disabled = 'u-pointer--disabled';

export enum ESize {
  Tiny = 'tiny',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Huge = 'huge',
}

export const componentSize = (componentType: string) => (componentSize: ESize) => `c-${componentType}-${componentSize}`;
