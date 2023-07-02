"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortBy = void 0;
const Sort_1 = require("../enums/Sort");
const sortBy = (builtinType, propAccessor) => {
    let accessor;
    const traveller = (prop) => {
        var _a;
        let deepProp = prop;
        if (typeof propAccessor === "undefined") {
            return prop;
        }
        else {
            const breadCrumbs = (_a = propAccessor.split(".")) !== null && _a !== void 0 ? _a : [];
            for (const p of breadCrumbs) {
                deepProp = deepProp[p];
            }
        }
        return deepProp;
    };
    switch (builtinType) {
        case Sort_1.ESortable.Date:
            accessor = (p) => {
                p = traveller(p);
                return p instanceof Date ? p.getTime() : new Date(p).getTime();
            };
            break;
        default:
            accessor = (p) => traveller(p);
    }
    return {
        ascending(a, b) {
            return builtinType === Sort_1.ESortable.String
                ? accessor(a).localeCompare(accessor(b))
                : accessor(a) - accessor(b);
        },
        descending(a, b) {
            return builtinType === Sort_1.ESortable.String
                ? accessor(b).localeCompare(accessor(a))
                : accessor(b) - accessor(a);
        },
    };
};
exports.sortBy = sortBy;
//# sourceMappingURL=Sort.js.map