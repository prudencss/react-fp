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
exports.Component = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const ListItem_1 = require("./ListItem");
const Sort_1 = require("../../utils/Sort");
const Sort_2 = require("../../enums/Sort");
const Component = ({ icon, iconSelected, listData, sortBy, sortOrder, moduleSpecificClassList, }) => {
    const [sortedData, setSortedData] = (0, react_1.useState)([...listData]);
    (0, react_1.useMemo)(() => {
        if (typeof (sortBy === null || sortBy === void 0 ? void 0 : sortBy.type) !== "undefined" && sortBy.type !== null) {
            setSortedData([...listData].sort((0, Sort_1.sortBy)(sortBy.type, sortBy.path)[sortOrder !== null && sortOrder !== void 0 ? sortOrder : Sort_2.ESortOrder.Ascending]));
        }
    }, [sortOrder, sortBy, listData]);
    const iconify = typeof icon !== "undefined" && icon !== null;
    const classList = (0, classnames_1.default)(moduleSpecificClassList, {
        "o-list-bare": iconify,
        "x-icon__bullet": iconify,
        [icon]: iconify,
    });
    if (typeof (sortBy === null || sortBy === void 0 ? void 0 : sortBy.type) !== "undefined" && sortBy.type !== null) {
        return (react_1.default.createElement("ol", { className: classList }, sortedData.map((item, i) => (react_1.default.createElement(ListItem_1.Component, { key: i, icon: iconSelected }, item instanceof Date
            ? item.toLocaleString()
            : item.toString())))));
    }
    return (react_1.default.createElement("ul", { className: classList }, listData.map((item, i) => (react_1.default.createElement(ListItem_1.Component, { key: i, icon: iconSelected }, item instanceof Date
        ? item.toLocaleString()
        : item.toString())))));
};
exports.Component = Component;
//# sourceMappingURL=List.js.map