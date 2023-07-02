"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferGaussianMember = exports.gaussianSum = void 0;
const gaussianSum = (E) => {
    const length = Object.keys(E).filter(Number.isNaN).length;
    return (length * (length + 1)) / 2 + 1;
};
exports.gaussianSum = gaussianSum;
const inferGaussianMember = (EState, sum, state) => {
    const values = Object.values(EState).filter(Number.isNaN);
    while (sum > 0) {
        const greatest = Number(values.pop());
        if (sum - greatest > 0) {
            if (greatest === state) {
                return true;
            }
            sum -= greatest;
        }
        else if (greatest === state) {
            return false;
        }
    }
    throw new Error("Unreachable Code reached");
};
exports.inferGaussianMember = inferGaussianMember;
//# sourceMappingURL=_.js.map