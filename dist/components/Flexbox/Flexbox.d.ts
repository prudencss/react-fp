import React, { FC, PropsWithChildren } from "react";
import { IBehaviorProps } from "../../interfaces/Behaviors";
import { TFlexInlineAxisFlow, TFlexCrossAxisFlow, TFlexMultiline, TFlexSpacing, TFlex, TFlexBasis, TFlexGrow, TFlexShrink, TFlexWidthPx, TFlexWidthEm, TFlexWidthPercentage } from "../../types/Flexbox";
interface IFlexboxProps extends Pick<IBehaviorProps, "decoration"> {
    /**
     * Add _custom styles_ as string-array class-list
     * *default:* []
     * *example:*
     * ```tsx
     * import Button, { EButtonType } from '@prudencss/react-fp';
  import { EWidth1 } from '../../enums/Widths';
  import { EOrientation } from '../../enums/Breakpoints';
  import { TFlexBasis, TFlexWidthPercentage } from '../../types/Flexbox';
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
    directionRow?: boolean;
    directionRowPortrait?: boolean;
    directionRowLandscape?: boolean;
    directionRowPortraitMobileS?: boolean;
    directionRowPortraitMobileM?: boolean;
    directionRowPortraitMobileL?: boolean;
    directionRowLandscapeMobileS?: boolean;
    directionRowLandscapeMobileM?: boolean;
    directionRowLandscapeMobileL?: boolean;
    directionRowPortraitTabletS?: boolean;
    directionRowPortraitTabletM?: boolean;
    directionRowPortraitTabletL?: boolean;
    directionRowLandscapeTabletS?: boolean;
    directionRowLandscapeTabletM?: boolean;
    directionRowLandscapeTabletL?: boolean;
    directionRowPortraitDesktopS?: boolean;
    directionRowPortraitDesktopM?: boolean;
    directionRowPortraitDesktopL?: boolean;
    directionRowLandscapeDesktopS?: boolean;
    directionRowLandscapeDesktopM?: boolean;
    directionRowLandscapeDesktopL?: boolean;
    directionColumn?: boolean;
    directionColumnPortrait?: boolean;
    directionColumnLandscape?: boolean;
    directionColumnPortraitMobileS?: boolean;
    directionColumnPortraitMobileM?: boolean;
    directionColumnPortraitMobileL?: boolean;
    directionColumnLandscapeMobileS?: boolean;
    directionColumnLandscapeMobileM?: boolean;
    directionColumnLandscapeMobileL?: boolean;
    directionColumnPortraitTabletS?: boolean;
    directionColumnPortraitTabletM?: boolean;
    directionColumnPortraitTabletL?: boolean;
    directionColumnLandscapeTabletS?: boolean;
    directionColumnLandscapeTabletM?: boolean;
    directionColumnLandscapeTabletL?: boolean;
    directionColumnPortraitDesktopS?: boolean;
    directionColumnPortraitDesktopM?: boolean;
    directionColumnPortraitDesktopL?: boolean;
    directionColumnLandscapeDesktopS?: boolean;
    directionColumnLandscapeDesktopM?: boolean;
    directionColumnLandscapeDesktopL?: boolean;
    inlineAxisFlow?: TFlexInlineAxisFlow;
    crossAxisFlow?: TFlexCrossAxisFlow;
    flex?: TFlex;
    flexBasis?: TFlexBasis;
    flexGrow?: TFlexGrow;
    flexShrink?: TFlexShrink;
    flexWidthPx?: TFlexWidthPx;
    flexWidthEm?: TFlexWidthEm;
    flexWidthPercentage?: TFlexWidthPercentage;
    multiline?: TFlexMultiline;
    hSpacing?: TFlexSpacing;
    vSpacing?: TFlexSpacing;
}
interface IAdditionalFlexboxProps {
    inline?: boolean;
    block?: boolean;
}
export interface IFlexboxContainerProps extends IFlexboxProps, IAdditionalFlexboxProps {
}
export interface IFlexboxItemProps extends IFlexboxProps {
}
export declare const Container: FC<PropsWithChildren<IFlexboxContainerProps>>;
export declare const Item: FC<PropsWithChildren<IFlexboxItemProps>>;
declare const _default: {
    Container: React.FC<React.PropsWithChildren<IFlexboxContainerProps>>;
    Item: React.FC<React.PropsWithChildren<IFlexboxItemProps>>;
};
export default _default;
//# sourceMappingURL=Flexbox.d.ts.map