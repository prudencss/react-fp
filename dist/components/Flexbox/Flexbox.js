"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Container = ({ children, decoration, moduleSpecificClassList, tagName: Tag = "div", directionRow: direction_row, directionRowLandscape: direction_row_landscape, directionRowPortrait: direction_row_portrait, directionRowPortraitMobileS: direction_row_portrait_mobile_s, directionRowPortraitMobileM: direction_row_portrait_mobile_m, directionRowPortraitMobileL: direction_row_portrait_mobile_l, directionRowLandscapeMobileS: direction_row_landscape_mobile_s, directionRowLandscapeMobileM: direction_row_landscape_mobile_m, directionRowLandscapeMobileL: direction_row_landscape_mobile_l, directionRowPortraitMobileS: direction_row_portrait_tablet_s, directionRowPortraitMobileM: direction_row_portrait_tablet_m, directionRowPortraitMobileL: direction_row_portrait_tablet_l, directionRowLandscapeTabletS: direction_row_landscape_tablet_s, directionRowLandscapeTabletM: direction_row_landscape_tablet_m, directionRowLandscapeTabletL: direction_row_landscape_tablet_l, directionRowPortraitDesktopS: direction_row_portrait_desktop_s, directionRowPortraitDesktopM: direction_row_portrait_desktop_m, directionRowPortraitDesktopL: direction_row_portrait_desktop_l, directionRowLandscapeDesktopS: direction_row_landscape_desktop_s, directionRowLandscapeDesktopM: direction_row_landscape_desktop_m, directionRowLandscapeDesktopL: direction_row_landscape_desktop_l, directionColumn: direction_column, directionColumnLandscape: direction_column_landscape, directionColumnPortrait: direction_column_portrait, directionColumnPortraitMobileS: direction_column_portrait_mobile_s, directionColumnPortraitMobileM: direction_column_portrait_mobile_m, directionColumnPortraitMobileL: direction_column_portrait_mobile_l, directionColumnLandscapeMobileS: direction_column_landscape_mobile_s, directionColumnLandscapeMobileM: direction_column_landscape_mobile_m, directionColumnLandscapeMobileL: direction_column_landscape_mobile_l, directionColumnPortraitTabletS: direction_column_portrait_tablet_s, directionColumnPortraitTabletM: direction_column_portrait_tablet_m, directionColumnPortraitTabletL: direction_column_portrait_tablet_l, directionColumnLandscapeTabletS: direction_column_landscape_tablet_s, directionColumnLandscapeTabletM: direction_column_landscape_tablet_m, directionColumnLandscapeTabletL: direction_column_landscape_tablet_l, directionColumnPortraitDesktopS: direction_column_portrait_desktop_s, directionColumnPortraitDesktopM: direction_column_portrait_desktop_m, directionColumnPortraitDesktopL: direction_column_portrait_desktop_l, directionColumnLandscapeDesktopS: direction_column_landscape_desktop_s, directionColumnLandscapeDesktopM: direction_column_landscape_desktop_m, directionColumnLandscapeDesktopL: direction_column_landscape_desktop_l, inline, block, inlineAxisFlow, crossAxisFlow, flex, flexBasis, flexGrow, flexShrink, flexWidthPx, flexWidthEm, flexWidthPercentage, multiline, hSpacing, vSpacing, }) => {
    const classList = (0, classnames_1.default)("o-flexbox", decoration, moduleSpecificClassList, direction_row && "o-flexbox__direction--row", direction_row_portrait && "o-flexbox__direction--row@portrait", direction_row_portrait_mobile_s &&
        "o-flexbox__direction--row@portrait__mobile--s", direction_row_portrait_mobile_m &&
        "o-flexbox__direction--row@portrait__mobile--m", direction_row_portrait_mobile_l &&
        "o-flexbox__direction--row@portrait__mobile--l", direction_row_portrait_tablet_s &&
        "o-flexbox__direction--row@portrait__tablet--s", direction_row_portrait_tablet_m &&
        "o-flexbox__direction--row@portrait__tablet--m", direction_row_portrait_tablet_l &&
        "o-flexbox__direction--row@portrait__tablet--l", direction_row_portrait_desktop_s &&
        "o-flexbox__direction--row@portrait__desktop--s", direction_row_portrait_desktop_m &&
        "o-flexbox__direction--row@portrait__desktop--m", direction_row_portrait_desktop_l &&
        "o-flexbox__direction--row@portrait__desktop--l", direction_row_landscape && "o-flexbox__direction--row@landscape", direction_row_landscape_mobile_s &&
        "o-flexbox__direction--row@landscape__mobile--s", direction_row_landscape_mobile_m &&
        "o-flexbox__direction--row@landscape__mobile--m", direction_row_landscape_mobile_l &&
        "o-flexbox__direction--row@landscape__mobile--l", direction_row_landscape_tablet_s &&
        "o-flexbox__direction--row@landscape__tablet--s", direction_row_landscape_tablet_m &&
        "o-flexbox__direction--row@landscape__tablet--m", direction_row_landscape_tablet_l &&
        "o-flexbox__direction--row@landscape__tablet--l", direction_row_landscape_desktop_s &&
        "o-flexbox__direction--row@landscape__desktop--s", direction_row_landscape_desktop_m &&
        "o-flexbox__direction--row@landscape__desktop--m", direction_row_landscape_desktop_l &&
        "o-flexbox__direction--row@landscape__desktop--l", direction_column && "o-flexbox__direction--column", direction_column_portrait && "o-flexbox__direction--column@portrait", direction_column_portrait_mobile_s &&
        "o-flexbox__direction--column@portrait__mobile--s", direction_column_portrait_mobile_m &&
        "o-flexbox__direction--column@portrait__mobile--m", direction_column_portrait_mobile_l &&
        "o-flexbox__direction--column@portrait__mobile--l", direction_column_portrait_tablet_s &&
        "o-flexbox__direction--column@portrait__tablet--s", direction_column_portrait_tablet_m &&
        "o-flexbox__direction--column@portrait__tablet--m", direction_column_portrait_tablet_l &&
        "o-flexbox__direction--column@portrait__tablet--l", direction_column_portrait_desktop_s &&
        "o-flexbox__direction--column@portrait__desktop--s", direction_column_portrait_desktop_m &&
        "o-flexbox__direction--column@portrait__desktop--m", direction_column_portrait_desktop_l &&
        "o-flexbox__direction--column@portrait__desktop--l", direction_column_landscape && "o-flexbox__direction--column@landscape", direction_column_landscape_mobile_s &&
        "o-flexbox__direction--column@landscape__mobile--s", direction_column_landscape_mobile_m &&
        "o-flexbox__direction--column@landscape__mobile--m", direction_column_landscape_mobile_l &&
        "o-flexbox__direction--column@landscape__mobile--l", direction_column_landscape_tablet_s &&
        "o-flexbox__direction--column@landscape__tablet--s", direction_column_landscape_tablet_m &&
        "o-flexbox__direction--column@landscape__tablet--m", direction_column_landscape_tablet_l &&
        "o-flexbox__direction--column@landscape__tablet--l", direction_column_landscape_desktop_s &&
        "o-flexbox__direction--column@landscape__desktop--s", direction_column_landscape_desktop_m &&
        "o-flexbox__direction--column@landscape__desktop--m", direction_column_landscape_desktop_l &&
        "o-flexbox__direction--column@landscape__desktop--l", inline && "o-flexbox__display--inline", block && "o-flexbox__display--block", inlineAxisFlow && `o-flexbox__inline--${inlineAxisFlow}`, crossAxisFlow && `o-flexbox__cross--${crossAxisFlow}`, flex && `o-flexbox__flex--${flex}`, flexBasis && `o-flexbox__flex-basis--${flexBasis}`, flexGrow && `o-flexbox__flex-grow--${flexGrow}`, flexShrink && `o-flexbox__flex-shrink--${flexShrink}`, flexWidthPx && `o-flexbox__flex-width--${flexWidthPx}`, flexWidthEm && `o-flexbox__flex-width--${flexWidthEm}`, flexWidthPercentage && `o-flexbox__flex-width--${flexWidthPercentage}`, multiline && "o-flexbox__multiline--${multiline}", hSpacing && `o-flexbox-row__space--${hSpacing}`, vSpacing && `o-flexbox-column__space--${vSpacing}`);
    return react_1.default.createElement(Tag, { className: classList }, children);
};
exports.Container = Container;
const Item = ({ children, decoration, moduleSpecificClassList, tagName: Tag = "div", inlineAxisFlow, crossAxisFlow, flex, flexBasis, flexGrow, flexShrink, flexWidthPx, flexWidthEm, flexWidthPercentage, multiline, hSpacing, vSpacing, }) => {
    const classList = (0, classnames_1.default)("o-flexbox__item", decoration, moduleSpecificClassList, inlineAxisFlow && `o-flexbox-item__inline--${inlineAxisFlow}`, crossAxisFlow && `o-flexbox-item__cross--${crossAxisFlow}`, flex && `o-flexbox__flex--${flex}`, flexBasis && `o-flexbox__flex-basis--${flexBasis}`, flexGrow && `o-flexbox__flex-grow--${flexGrow}`, flexShrink && `o-flexbox__flex-shrink--${flexShrink}`, flexWidthPx && `o-flexbox__flex-width--${flexWidthPx}`, flexWidthEm && `o-flexbox__flex-width--${flexWidthEm}`, flexWidthPercentage && `o-flexbox__flex-width--${flexWidthPercentage}`, multiline && "o-flexbox__multiline--${multiline}", hSpacing && `o-flexbox-row__space--${hSpacing}`, vSpacing && `o-flexbox-column__space--${vSpacing}`);
    return react_1.default.createElement(Tag, { className: classList }, children);
};
exports.Item = Item;
exports.default = { Container: exports.Container, Item: exports.Item };
//# sourceMappingURL=Flexbox.js.map