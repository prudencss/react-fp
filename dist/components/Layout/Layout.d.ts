import React, { FC, PropsWithChildren } from "react";
import { IBehaviorProps } from "../../interfaces/Behaviors";
import { TUtilityWidth } from "../../types/Widths";
import { THAlignment, TVAlignment } from "types/Alignments";
interface ILayoutProps extends Pick<IBehaviorProps, "decoration"> {
    /**
     * Add _custom styles_ as string-array class-list
     * *default:* []
     * *example:*
     * ```tsx
     * import Button, { EButtonType } from '@prudencss/react-fp';
  import { EWidth1 } from '../../enums/Widths';
  import { EOrientation } from '../../enums/Breakpoints';
     *
     * <Button
     *   moduleSpecificClassList={['first-module__buttons--primary', 'u-hidden@xl']}
     * >
     *   {buttonContent}
     * </Button>
     * ```
     */
    moduleSpecificClassList?: string[];
    tagName?: keyof JSX.IntrinsicElements;
    reverse?: boolean;
}
interface IAdditionalLayoutProps {
    hAlign?: THAlignment;
    vAlign?: TVAlignment;
}
export interface ILayoutContainerProps extends ILayoutProps, IAdditionalLayoutProps {
}
export interface ILayoutItemProps extends ILayoutProps {
    width?: TUtilityWidth;
    widthPortraitMobileS?: TUtilityWidth;
    widthPortraitMobileM?: TUtilityWidth;
    widthPortraitMobileL?: TUtilityWidth;
    widthLandscapeMobileS?: TUtilityWidth;
    widthLandscapeMobileM?: TUtilityWidth;
    widthLandscapeMobileL?: TUtilityWidth;
    widthPortraitTabletS?: TUtilityWidth;
    widthPortraitTabletM?: TUtilityWidth;
    widthPortraitTabletL?: TUtilityWidth;
    widthLandscapeTabletS?: TUtilityWidth;
    widthLandscapeTabletM?: TUtilityWidth;
    widthLandscapeTabletL?: TUtilityWidth;
    widthPortraitDesktopS?: TUtilityWidth;
    widthPortraitDesktopM?: TUtilityWidth;
    widthPortraitDesktopL?: TUtilityWidth;
    widthLandscapeDesktopS?: TUtilityWidth;
    widthLandscapeDesktopM?: TUtilityWidth;
    widthLandscapeDesktopL?: TUtilityWidth;
}
export declare const Container: FC<PropsWithChildren<ILayoutContainerProps>>;
export declare const Item: FC<PropsWithChildren<ILayoutItemProps>>;
declare const _default: {
    Container: React.FC<React.PropsWithChildren<ILayoutContainerProps>>;
    Item: React.FC<React.PropsWithChildren<ILayoutItemProps>>;
};
export default _default;
//# sourceMappingURL=Layout.d.ts.map