"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Breakpoints_1 = require("../../enums//Breakpoints");
const Breakpoints_2 = require("../../utils/Breakpoints");
const Container = ({ children, decoration, moduleSpecificClassList, tagName: Tag = "div", hAlign, vAlign, reverse, }) => {
    const classList = (0, classnames_1.default)("o-layout", decoration, moduleSpecificClassList, hAlign && `o-layout--${hAlign}`, vAlign && `o-layout--${vAlign}`, reverse && "o-layout--reverse");
    return react_1.default.createElement(Tag, { className: classList }, children);
};
exports.Container = Container;
const Item = ({ children, decoration, moduleSpecificClassList, tagName: Tag = "div", width, widthPortraitMobileS: width_portrait_mobile_s, widthPortraitMobileM: width_portrait_mobile_m, widthPortraitMobileL: width_portrait_mobile_l, widthLandscapeMobileS: width_landscape_mobile_s, widthLandscapeMobileM: width_landscape_mobile_m, widthLandscapeMobileL: width_landscape_mobile_l, widthPortraitTabletS: width_portrait_tablet_s, widthPortraitTabletM: width_portrait_tablet_m, widthPortraitTabletL: width_portrait_tablet_l, widthLandscapeTabletS: width_landscape_tablet_s, widthLandscapeTabletM: width_landscape_tablet_m, widthLandscapeTabletL: width_landscape_tablet_l, widthPortraitDesktopS: width_portrait_desktop_s, widthPortraitDesktopM: width_portrait_desktop_m, widthPortraitDesktopL: width_portrait_desktop_l, widthLandscapeDesktopS: width_landscape_desktop_s, widthLandscapeDesktopM: width_landscape_desktop_m, widthLandscapeDesktopL: width_landscape_desktop_l, reverse, }) => {
    const deviceOrientation = (0, Breakpoints_2.useDeviceOrientation)();
    const mobile_s = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_mobile_s
        : width_portrait_mobile_s;
    const mobile_m = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_mobile_m
        : width_portrait_mobile_m;
    const mobile_l = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_mobile_l
        : width_portrait_mobile_l;
    const tablet_s = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_tablet_s
        : width_portrait_tablet_s;
    const tablet_m = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_tablet_m
        : width_portrait_tablet_m;
    const tablet_l = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_tablet_l
        : width_portrait_tablet_l;
    const desktop_s = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_desktop_s
        : width_portrait_desktop_s;
    const desktop_m = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_desktop_m
        : width_portrait_desktop_m;
    const desktop_l = deviceOrientation === Breakpoints_1.EOrientation.Landscape
        ? width_landscape_desktop_l
        : width_portrait_desktop_l;
    const classList = (0, classnames_1.default)("o-layout__item", decoration, moduleSpecificClassList, width, mobile_s && `${mobile_s}@s`, mobile_m && `${mobile_s}@m`, mobile_l && `${mobile_s}@l`, tablet_s && `${tablet_s}@s`, tablet_m && `${tablet_s}@m`, tablet_l && `${tablet_s}@l`, desktop_s && `${desktop_s}@s`, desktop_m && `${desktop_s}@m`, desktop_l && `${desktop_s}@l`, reverse && "o-layout__item--reverse");
    return react_1.default.createElement(Tag, { className: classList }, children);
};
exports.Item = Item;
exports.default = { Container: exports.Container, Item: exports.Item };
//# sourceMappingURL=Layout.js.map