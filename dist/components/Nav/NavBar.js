"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Component = ({ children, moduleSpecificClassList, brand, extra, }) => {
    const classList = (0, classnames_1.default)("c-nav", moduleSpecificClassList);
    return (react_1.default.createElement("nav", { className: classList },
        typeof brand !== "undefined" && brand !== null ? (react_1.default.createElement("section", { className: "c-nav__brand" }, typeof brand === "string" ? (react_1.default.createElement("img", { alt: "branding", src: brand })) : (brand))) : null,
        react_1.default.createElement("section", { className: "c-nav__menu" }, children),
        typeof extra !== "undefined" && extra !== null ? (react_1.default.createElement("section", { className: "c-nav__extra" }, extra)) : null));
};
exports.Component = Component;
//# sourceMappingURL=NavBar.js.map