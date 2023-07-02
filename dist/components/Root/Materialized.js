"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterializedRoot = exports.ESize = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Behaviors_1 = require("../../enums/Behaviors");
Object.defineProperty(exports, "ESize", { enumerable: true, get: function () { return Behaviors_1.ESize; } });
const MaterializedRoot = ({ children, size, moduleSpecificClassList }) => {
    const classList = (0, classnames_1.default)("m-body", moduleSpecificClassList, size && `m-body__size--${size !== null && size !== void 0 ? size : "m"}`);
    return react_1.default.createElement("div", { className: classList }, children);
};
exports.MaterializedRoot = MaterializedRoot;
exports.default = exports.MaterializedRoot;
//# sourceMappingURL=Materialized.js.map