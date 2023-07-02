"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentSize = exports.componentColor = void 0;
const componentColor = (componentType) => (componentColor) => `c-${componentType}--${componentColor}`;
exports.componentColor = componentColor;
const componentSize = (componentType) => (componentSize) => `c-${componentType}--${componentSize}`;
exports.componentSize = componentSize;
//# sourceMappingURL=Behaviors.js.map