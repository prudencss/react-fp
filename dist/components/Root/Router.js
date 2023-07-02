"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterRoot = void 0;
const react_1 = __importDefault(require("react"));
const Materialized_1 = __importDefault(require("./Materialized"));
const RouterRoot = ({ children, size, moduleSpecificClassList, router: Router, switchRoute: Switch, route: Route, routeMap, }) => (react_1.default.createElement(Router, null,
    react_1.default.createElement(Materialized_1.default, { size: size, moduleSpecificClassList: moduleSpecificClassList },
        children,
        react_1.default.createElement(Switch, null, Object.entries(routeMap).map(([path, Page], i) => (react_1.default.createElement(Route, { key: `path_${path}`, ...(path === "/" ? { exact: true } : {}), path: path },
            react_1.default.createElement(Page, null))))))));
exports.RouterRoot = RouterRoot;
exports.default = exports.RouterRoot;
//# sourceMappingURL=Router.js.map