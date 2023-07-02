"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EFlexSpacing = exports.EFlexMultiline = exports.EFlexBasisWidthPercentage = exports.EFlexBasisWidthEm = exports.EFlexBasisWidthPx = exports.EFlexShrink = exports.EFlexGrow = exports.EFlexBasis = exports.EFlex = exports.EFlexCrossAxisFlow = exports.EFlexInlineAxisFlow = void 0;
var EFlexInlineAxisFlow;
(function (EFlexInlineAxisFlow) {
    EFlexInlineAxisFlow["FlexStart"] = "flex-start";
    EFlexInlineAxisFlow["FlexEnd"] = "flex-end";
    EFlexInlineAxisFlow["Center"] = "center";
    EFlexInlineAxisFlow["SpaceAround"] = "space-around";
    EFlexInlineAxisFlow["SpaceBetween"] = "space-between";
    EFlexInlineAxisFlow["SpaceEvenly"] = "space-evenly";
})(EFlexInlineAxisFlow = exports.EFlexInlineAxisFlow || (exports.EFlexInlineAxisFlow = {}));
var EFlexCrossAxisFlow;
(function (EFlexCrossAxisFlow) {
    EFlexCrossAxisFlow["Stretch"] = "stretch";
    EFlexCrossAxisFlow["FlexStart"] = "flex-start";
    EFlexCrossAxisFlow["FlexEnd"] = "flex-end";
    EFlexCrossAxisFlow["Center"] = "center";
})(EFlexCrossAxisFlow = exports.EFlexCrossAxisFlow || (exports.EFlexCrossAxisFlow = {}));
var EFlex;
(function (EFlex) {
    EFlex["Initial"] = "initial";
    EFlex["Inherit"] = "inherit";
    EFlex["Revert"] = "revert";
    EFlex["RevertLayer"] = "revert-layer";
    EFlex["None"] = "none";
    EFlex["Unset"] = "unset";
})(EFlex = exports.EFlex || (exports.EFlex = {}));
var EFlexBasis;
(function (EFlexBasis) {
    EFlexBasis["Inherit"] = "inherit";
    EFlexBasis["Auto"] = "auto";
    EFlexBasis["Initial"] = "initial";
    EFlexBasis["Revert"] = "revert";
    EFlexBasis["RevertLayer"] = "revert-layer";
    EFlexBasis["Unset"] = "unset";
    EFlexBasis["Content"] = "content";
    EFlexBasis["MaxContent"] = "max-content";
    EFlexBasis["MinContent"] = "min-content";
    EFlexBasis["FitContent"] = "fit-content";
})(EFlexBasis = exports.EFlexBasis || (exports.EFlexBasis = {}));
var EFlexGrow;
(function (EFlexGrow) {
    EFlexGrow["Initial"] = "initial";
    EFlexGrow["Inherit"] = "inherit";
    EFlexGrow["Revert"] = "revert";
    EFlexGrow["RevertLayer"] = "revert-layer";
    EFlexGrow["Unset"] = "unset";
})(EFlexGrow = exports.EFlexGrow || (exports.EFlexGrow = {}));
var EFlexShrink;
(function (EFlexShrink) {
    EFlexShrink["Initial"] = "initial";
    EFlexShrink["Inherit"] = "inherit";
    EFlexShrink["Revert"] = "revert";
    EFlexShrink["RevertLayer"] = "revert-layer";
    EFlexShrink["Unset"] = "unset";
})(EFlexShrink = exports.EFlexShrink || (exports.EFlexShrink = {}));
var EFlexBasisWidthPx;
(function (EFlexBasisWidthPx) {
    EFlexBasisWidthPx["0px"] = "0-px";
    EFlexBasisWidthPx["1px"] = "1-px";
    EFlexBasisWidthPx["2px"] = "2-px";
    EFlexBasisWidthPx["3px"] = "3-px";
    EFlexBasisWidthPx["4px"] = "4-px";
    EFlexBasisWidthPx["5px"] = "5-px";
    EFlexBasisWidthPx["6px"] = "6-px";
    EFlexBasisWidthPx["7px"] = "7-px";
    EFlexBasisWidthPx["8px"] = "8-px";
    EFlexBasisWidthPx["9px"] = "9-px";
    EFlexBasisWidthPx["10px"] = "10-px";
    EFlexBasisWidthPx["11px"] = "11-px";
    EFlexBasisWidthPx["12px"] = "12-px";
    EFlexBasisWidthPx["13px"] = "13-px";
    EFlexBasisWidthPx["14px"] = "14-px";
    EFlexBasisWidthPx["15px"] = "15-px";
    EFlexBasisWidthPx["16px"] = "16-px";
    EFlexBasisWidthPx["17px"] = "17-px";
    EFlexBasisWidthPx["18px"] = "18-px";
    EFlexBasisWidthPx["19px"] = "19-px";
    EFlexBasisWidthPx["20px"] = "20-px";
})(EFlexBasisWidthPx = exports.EFlexBasisWidthPx || (exports.EFlexBasisWidthPx = {}));
var EFlexBasisWidthEm;
(function (EFlexBasisWidthEm) {
    EFlexBasisWidthEm["0rem"] = "0-rem";
    EFlexBasisWidthEm["1rem"] = "1-rem";
    EFlexBasisWidthEm["2rem"] = "2-rem";
    EFlexBasisWidthEm["3rem"] = "3-rem";
    EFlexBasisWidthEm["4rem"] = "4-rem";
    EFlexBasisWidthEm["5rem"] = "5-rem";
    EFlexBasisWidthEm["6rem"] = "6-rem";
    EFlexBasisWidthEm["7rem"] = "7-rem";
    EFlexBasisWidthEm["8rem"] = "8-rem";
    EFlexBasisWidthEm["9rem"] = "9-rem";
    EFlexBasisWidthEm["10rem"] = "10-rem";
})(EFlexBasisWidthEm = exports.EFlexBasisWidthEm || (exports.EFlexBasisWidthEm = {}));
var EFlexBasisWidthPercentage;
(function (EFlexBasisWidthPercentage) {
    EFlexBasisWidthPercentage["0percent"] = "0-percent";
    EFlexBasisWidthPercentage["10percent"] = "10-percent";
    EFlexBasisWidthPercentage["20percent"] = "20-percent";
    EFlexBasisWidthPercentage["30percent"] = "30-percent";
    EFlexBasisWidthPercentage["40percent"] = "40-percent";
    EFlexBasisWidthPercentage["50percent"] = "50-percent";
    EFlexBasisWidthPercentage["60percent"] = "60-percent";
    EFlexBasisWidthPercentage["70percent"] = "70-percent";
    EFlexBasisWidthPercentage["80percent"] = "80-percent";
    EFlexBasisWidthPercentage["90percent"] = "90-percent";
    EFlexBasisWidthPercentage["100percent"] = "100-percent";
})(EFlexBasisWidthPercentage = exports.EFlexBasisWidthPercentage || (exports.EFlexBasisWidthPercentage = {}));
var EFlexMultiline;
(function (EFlexMultiline) {
    EFlexMultiline["Wrap"] = "wrap";
    EFlexMultiline["NoWrap"] = "nowrap";
    EFlexMultiline["WrapReverse"] = "wrap-reverse";
    EFlexMultiline["Inherit"] = "inherit";
    EFlexMultiline["Initial"] = "initial";
    EFlexMultiline["Revert"] = "revert";
    EFlexMultiline["RevertLayer"] = "revert-layer";
    EFlexMultiline["Unset"] = "unset";
})(EFlexMultiline = exports.EFlexMultiline || (exports.EFlexMultiline = {}));
var EFlexSpacing;
(function (EFlexSpacing) {
    EFlexSpacing["None"] = "none";
    EFlexSpacing["XXS"] = "xxs";
    EFlexSpacing["XS"] = "xs";
    EFlexSpacing["S"] = "s";
    EFlexSpacing["M"] = "m";
    EFlexSpacing["L"] = "l";
    EFlexSpacing["XL"] = "xl";
    EFlexSpacing["XXL"] = "xxl";
})(EFlexSpacing = exports.EFlexSpacing || (exports.EFlexSpacing = {}));
//# sourceMappingURL=Flexbox.js.map