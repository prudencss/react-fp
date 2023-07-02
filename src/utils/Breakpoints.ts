import { useState, useEffect } from "react";
import { isMobileOnly, isTablet } from "mobile-device-detect";

import { EOrientation, EDeviceType, EDeviceSize } from "../enums/Breakpoints";
import Breakpoints from "../constants/Breakpoints";

export function getOrientation(): EOrientation {
  return isLandscape() ? EOrientation.Landscape : EOrientation.Portrait;
}

export function isLandscape(): boolean {
  return window.matchMedia("(orientation: landscape)").matches;
}

export function isPortrait(): boolean {
  return window.matchMedia("(orientation: portrait)").matches;
}

export function isSmall(device: EDeviceType): boolean {
  const orientation: EOrientation = isLandscape()
    ? EOrientation.Landscape
    : EOrientation.Portrait;

  return window.matchMedia(
    `(max-width: ${Breakpoints[orientation][device][EDeviceSize.Small]})`
  ).matches;
}

export function isMedium(device: EDeviceType): boolean {
  const orientation: EOrientation = isLandscape()
    ? EOrientation.Landscape
    : EOrientation.Portrait;

  return window.matchMedia(
    `(max-width: ${Breakpoints[orientation][device][EDeviceSize.Medium]})`
  ).matches;
}

export function isLarge(device: EDeviceType): boolean {
  const orientation: EOrientation = isLandscape()
    ? EOrientation.Landscape
    : EOrientation.Portrait;

  return window.matchMedia(
    `(max-width: ${Breakpoints[orientation][device][EDeviceSize.Large]})`
  ).matches;
}

export function isHuge(device: EDeviceType): boolean {
  const orientation: EOrientation = isLandscape()
    ? EOrientation.Landscape
    : EOrientation.Portrait;

  return window.matchMedia(
    `(min-width: ${Breakpoints[orientation][device][EDeviceSize.Large] + 1})`
  ).matches;
}

export function getDeviceType(): EDeviceType {
  return isMobileOnly
    ? EDeviceType.Mobile
    : isTablet
    ? EDeviceType.Tablet
    : EDeviceType.Desktop;
}

export const useDeviceOrientation = (): EOrientation => {
  const [orientation, setOrientation] = useState(
    isLandscape() ? EOrientation.Landscape : EOrientation.Portrait
  );

  useEffect(() => {
    const handleOrientationChange = (): void => {
      setOrientation(
        isLandscape() ? EOrientation.Landscape : EOrientation.Portrait
      );
    };

    // Add event listener for orientation change
    window.addEventListener("orientationchange", handleOrientationChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return orientation;
};
