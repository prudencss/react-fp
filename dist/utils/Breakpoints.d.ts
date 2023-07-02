import { EOrientation, EDeviceType } from "../enums/Breakpoints";
export declare function getOrientation(): EOrientation;
export declare function isLandscape(): boolean;
export declare function isPortrait(): boolean;
export declare function isSmall(device: EDeviceType): boolean;
export declare function isMedium(device: EDeviceType): boolean;
export declare function isLarge(device: EDeviceType): boolean;
export declare function isHuge(device: EDeviceType): boolean;
export declare function getDeviceType(): EDeviceType;
export declare const useDeviceOrientation: () => EOrientation;
//# sourceMappingURL=Breakpoints.d.ts.map