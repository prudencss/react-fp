"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Behaviors_1 = require("../utils/Behaviors");
const useBehavior = (componentInfix, { animation, color, decoration, size, disabled }) => {
    return (0, react_1.useMemo)(() => [
        animation !== null && animation !== void 0 ? animation : null,
        color ? (0, Behaviors_1.componentColor)(componentInfix)(color) : null,
        decoration !== null && decoration !== void 0 ? decoration : null,
        size ? (0, Behaviors_1.componentSize)(componentInfix)(size) : null,
        disabled !== null && disabled !== void 0 ? disabled : null,
    ].filter(Boolean), [componentInfix, animation, color, decoration, size, disabled]);
};
exports.default = useBehavior;
//# sourceMappingURL=useBehavior.js.map