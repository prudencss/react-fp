"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Breakpoints_1 = require("../enums/Breakpoints");
exports.default = {
    [Breakpoints_1.EOrientation.Portrait]: {
        [Breakpoints_1.EDeviceType.Mobile]: {
            [Breakpoints_1.EDeviceSize.Small]: 360,
            [Breakpoints_1.EDeviceSize.Medium]: 480,
            [Breakpoints_1.EDeviceSize.Large]: 600,
        },
        [Breakpoints_1.EDeviceType.Tablet]: {
            [Breakpoints_1.EDeviceSize.Small]: 720,
            [Breakpoints_1.EDeviceSize.Medium]: 840,
            [Breakpoints_1.EDeviceSize.Large]: 960,
        },
        [Breakpoints_1.EDeviceType.Desktop]: {
            [Breakpoints_1.EDeviceSize.Small]: 768,
            [Breakpoints_1.EDeviceSize.Medium]: 1024,
            [Breakpoints_1.EDeviceSize.Large]: 1280,
        },
    },
    [Breakpoints_1.EOrientation.Landscape]: {
        [Breakpoints_1.EDeviceType.Mobile]: {
            [Breakpoints_1.EDeviceSize.Small]: 480,
            [Breakpoints_1.EDeviceSize.Medium]: 600,
            [Breakpoints_1.EDeviceSize.Large]: 960,
        },
        [Breakpoints_1.EDeviceType.Tablet]: {
            [Breakpoints_1.EDeviceSize.Small]: 960,
            [Breakpoints_1.EDeviceSize.Medium]: 1280,
            [Breakpoints_1.EDeviceSize.Large]: 1440,
        },
        [Breakpoints_1.EDeviceType.Desktop]: {
            [Breakpoints_1.EDeviceSize.Small]: 1440,
            [Breakpoints_1.EDeviceSize.Medium]: 1600,
            [Breakpoints_1.EDeviceSize.Large]: 1920,
        },
    },
};
//# sourceMappingURL=Breakpoints.js.map