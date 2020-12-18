import {
  EOrientation,
  EDeviceType,
  EDeviceSize,
} from '../enums/Breakpoints';

export default {
  [EOrientation.Portrait]: {
    [EDeviceType.Mobile]: {
      [EDeviceSize.Small]: 360,
      [EDeviceSize.Medium]: 480,
      [EDeviceSize.Large]: 600,
    },
    [EDeviceType.Tablet]: {
      [EDeviceSize.Small]: 720,
      [EDeviceSize.Medium]: 840,
      [EDeviceSize.Large]: 960,
    },
    [EDeviceType.Desktop]: {
      [EDeviceSize.Small]: 768,
      [EDeviceSize.Medium]: 1024,
      [EDeviceSize.Large]: 1280,
    },
  },
  [EOrientation.Landscape]: {
    [EDeviceType.Mobile]: {
      [EDeviceSize.Small]: 480,
      [EDeviceSize.Medium]: 600,
      [EDeviceSize.Large]: 960,
    },
    [EDeviceType.Tablet]: {
      [EDeviceSize.Small]: 960,
      [EDeviceSize.Medium]: 1280,
      [EDeviceSize.Large]: 1440,
    },
    [EDeviceType.Desktop]: {
      [EDeviceSize.Small]: 1440,
      [EDeviceSize.Medium]: 1600,
      [EDeviceSize.Large]: 1920,
    }
  }
};

