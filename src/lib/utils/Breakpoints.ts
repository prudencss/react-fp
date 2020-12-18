import { isMobileOnly, isTablet } from 'mobile-device-detect';

import Breakpoints from '../constants/Breakpoints';
import { EOrientation, EDeviceType, EDeviceSize } from '../enums/Breakpoints';

export function getOrientation(): EOrientation {
  return (isLandscape())
    ? EOrientation.Landscape
    : EOrientation.Portrait;
}

export function isLandscape(): boolean {
  return window.matchMedia('(orientation: landscape)').matches;
}

export function isPortrait(): boolean {
  return window.matchMedia('(orientation: portrait)').matches;
}

export function isSmall(device: EDeviceType): boolean {
  const orientation: EOrientation = (isLandscape()) ? EOrientation.Landscape : EOrientation.Portrait;

  return (window.matchMedia(`(max-width: ${Breakpoints[orientation][device][EDeviceSize.Small]})`).matches)
}

export function isMedium(device: EDeviceType): boolean {
  const orientation: EOrientation = (isLandscape()) ? EOrientation.Landscape : EOrientation.Portrait;

  return (window.matchMedia(`(max-width: ${Breakpoints[orientation][device][EDeviceSize.Medium]})`).matches)
}

export function isLarge(device: EDeviceType): boolean {
  const orientation: EOrientation = (isLandscape()) ? EOrientation.Landscape : EOrientation.Portrait;

  return (window.matchMedia(`(max-width: ${Breakpoints[orientation][device][EDeviceSize.Large]})`).matches)
}

export function isHuge(device: EDeviceType): boolean {
  const orientation: EOrientation = (isLandscape()) ? EOrientation.Landscape : EOrientation.Portrait;

  return (window.matchMedia(`(min-width: ${Breakpoints[orientation][device][EDeviceSize.Large] + 1})`).matches)
}

export function getDeviceType(): EDeviceType {
  return isMobileOnly
    ? EDeviceType.Mobile
    : isTablet
      ? EDeviceType.Tablet
      : EDeviceType.Desktop;
}
