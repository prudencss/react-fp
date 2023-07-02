"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.ELabelType = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const useBehavior_1 = __importDefault(require("../../hooks/useBehavior"));
var ELabelType;
(function (ELabelType) {
    ELabelType["Basic"] = "c-label-basic";
    ELabelType["NoBorder"] = "c-label--no-border";
    ELabelType["Stroked"] = "c-label--stroked";
    ELabelType["Flat"] = "c-label--flat";
    ELabelType["Ghost"] = "c-label--ghost";
})(ELabelType = exports.ELabelType || (exports.ELabelType = {}));
const Label = ({ children, moduleSpecificClassList, labelType, fab, animation, color, decoration, size, disabled, onBlur, }) => {
    const [animationState, setAnimationState] = (0, react_1.useState)(false);
    const classList = (0, classnames_1.default)("c-label", labelType, { "c-label--fab": fab !== null && fab !== void 0 ? fab : false }, (0, useBehavior_1.default)("label", { animation, color, decoration, size, disabled }), moduleSpecificClassList, { in: animationState });
    const handleTransitionEndEvents = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    };
    return (react_1.default.createElement("label", { className: classList, onMouseDown: () => setAnimationState(true), onMouseUp: () => setAnimationState(false), onTransitionEnd: handleTransitionEndEvents, onBlur: onBlur }, children));
};
exports.Label = Label;
exports.default = exports.Label;
//# sourceMappingURL=Label.js.map