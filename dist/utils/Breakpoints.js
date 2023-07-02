"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceOrientation = exports.getDeviceType = exports.isHuge = exports.isLarge = exports.isMedium = exports.isSmall = exports.isPortrait = exports.isLandscape = exports.getOrientation = void 0;
const react_1 = require("react");
const mobile_device_detect_1 = require("mobile-device-detect");
const Breakpoints_1 = require("../enums/Breakpoints");
const Breakpoints_2 = __importDefault(require("../constants/Breakpoints"));
function getOrientation() {
    return isLandscape() ? Breakpoints_1.EOrientation.Landscape : Breakpoints_1.EOrientation.Portrait;
}
exports.getOrientation = getOrientation;
function isLandscape() {
    return window.matchMedia("(orientation: landscape)").matches;
}
exports.isLandscape = isLandscape;
function isPortrait() {
    return window.matchMedia("(orientation: portrait)").matches;
}
exports.isPortrait = isPortrait;
function isSmall(device) {
    const orientation = isLandscape()
        ? Breakpoints_1.EOrientation.Landscape
        : Breakpoints_1.EOrientation.Portrait;
    return window.matchMedia(`(max-width: ${Breakpoints_2.default[orientation][device][Breakpoints_1.EDeviceSize.Small]})`).matches;
}
exports.isSmall = isSmall;
function isMedium(device) {
    const orientation = isLandscape()
        ? Breakpoints_1.EOrientation.Landscape
        : Breakpoints_1.EOrientation.Portrait;
    return window.matchMedia(`(max-width: ${Breakpoints_2.default[orientation][device][Breakpoints_1.EDeviceSize.Medium]})`).matches;
}
exports.isMedium = isMedium;
function isLarge(device) {
    const orientation = isLandscape()
        ? Breakpoints_1.EOrientation.Landscape
        : Breakpoints_1.EOrientation.Portrait;
    return window.matchMedia(`(max-width: ${Breakpoints_2.default[orientation][device][Breakpoints_1.EDeviceSize.Large]})`).matches;
}
exports.isLarge = isLarge;
function isHuge(device) {
    const orientation = isLandscape()
        ? Breakpoints_1.EOrientation.Landscape
        : Breakpoints_1.EOrientation.Portrait;
    return window.matchMedia(`(min-width: ${Breakpoints_2.default[orientation][device][Breakpoints_1.EDeviceSize.Large] + 1})`).matches;
}
exports.isHuge = isHuge;
function getDeviceType() {
    return mobile_device_detect_1.isMobileOnly
        ? Breakpoints_1.EDeviceType.Mobile
        : mobile_device_detect_1.isTablet
            ? Breakpoints_1.EDeviceType.Tablet
            : Breakpoints_1.EDeviceType.Desktop;
}
exports.getDeviceType = getDeviceType;
const useDeviceOrientation = () => {
    const [orientation, setOrientation] = (0, react_1.useState)(isLandscape() ? Breakpoints_1.EOrientation.Landscape : Breakpoints_1.EOrientation.Portrait);
    (0, react_1.useEffect)(() => {
        const handleOrientationChange = () => {
            setOrientation(isLandscape() ? Breakpoints_1.EOrientation.Landscape : Breakpoints_1.EOrientation.Portrait);
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
exports.useDeviceOrientation = useDeviceOrientation;
//# sourceMappingURL=Breakpoints.js.map