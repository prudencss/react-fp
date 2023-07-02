import React, { FC, PropsWithChildren } from "react";
import classnames from "classnames";

import { IBehaviorProps } from "../../interfaces/Behaviors";
import {
  TFlexInlineAxisFlow,
  TFlexCrossAxisFlow,
  TFlexMultiline,
  TFlexSpacing,
  TFlex,
  TFlexBasis,
  TFlexGrow,
  TFlexShrink,
  TFlexWidthPx,
  TFlexWidthEm,
  TFlexWidthPercentage,
} from "../../types/Flexbox";

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

export interface IFlexboxContainerProps
  extends IFlexboxProps,
    IAdditionalFlexboxProps {}

export interface IFlexboxItemProps extends IFlexboxProps {}

export const Container: FC<PropsWithChildren<IFlexboxContainerProps>> = ({
  children,
  decoration,
  moduleSpecificClassList,
  tagName: Tag = "div",
  directionRow: direction_row,
  directionRowLandscape: direction_row_landscape,
  directionRowPortrait: direction_row_portrait,
  directionRowPortraitMobileS: direction_row_portrait_mobile_s,
  directionRowPortraitMobileM: direction_row_portrait_mobile_m,
  directionRowPortraitMobileL: direction_row_portrait_mobile_l,
  directionRowLandscapeMobileS: direction_row_landscape_mobile_s,
  directionRowLandscapeMobileM: direction_row_landscape_mobile_m,
  directionRowLandscapeMobileL: direction_row_landscape_mobile_l,
  directionRowPortraitMobileS: direction_row_portrait_tablet_s,
  directionRowPortraitMobileM: direction_row_portrait_tablet_m,
  directionRowPortraitMobileL: direction_row_portrait_tablet_l,
  directionRowLandscapeTabletS: direction_row_landscape_tablet_s,
  directionRowLandscapeTabletM: direction_row_landscape_tablet_m,
  directionRowLandscapeTabletL: direction_row_landscape_tablet_l,
  directionRowPortraitDesktopS: direction_row_portrait_desktop_s,
  directionRowPortraitDesktopM: direction_row_portrait_desktop_m,
  directionRowPortraitDesktopL: direction_row_portrait_desktop_l,
  directionRowLandscapeDesktopS: direction_row_landscape_desktop_s,
  directionRowLandscapeDesktopM: direction_row_landscape_desktop_m,
  directionRowLandscapeDesktopL: direction_row_landscape_desktop_l,
  directionColumn: direction_column,
  directionColumnLandscape: direction_column_landscape,
  directionColumnPortrait: direction_column_portrait,
  directionColumnPortraitMobileS: direction_column_portrait_mobile_s,
  directionColumnPortraitMobileM: direction_column_portrait_mobile_m,
  directionColumnPortraitMobileL: direction_column_portrait_mobile_l,
  directionColumnLandscapeMobileS: direction_column_landscape_mobile_s,
  directionColumnLandscapeMobileM: direction_column_landscape_mobile_m,
  directionColumnLandscapeMobileL: direction_column_landscape_mobile_l,
  directionColumnPortraitTabletS: direction_column_portrait_tablet_s,
  directionColumnPortraitTabletM: direction_column_portrait_tablet_m,
  directionColumnPortraitTabletL: direction_column_portrait_tablet_l,
  directionColumnLandscapeTabletS: direction_column_landscape_tablet_s,
  directionColumnLandscapeTabletM: direction_column_landscape_tablet_m,
  directionColumnLandscapeTabletL: direction_column_landscape_tablet_l,
  directionColumnPortraitDesktopS: direction_column_portrait_desktop_s,
  directionColumnPortraitDesktopM: direction_column_portrait_desktop_m,
  directionColumnPortraitDesktopL: direction_column_portrait_desktop_l,
  directionColumnLandscapeDesktopS: direction_column_landscape_desktop_s,
  directionColumnLandscapeDesktopM: direction_column_landscape_desktop_m,
  directionColumnLandscapeDesktopL: direction_column_landscape_desktop_l,
  inline,
  block,
  inlineAxisFlow,
  crossAxisFlow,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  flexWidthPx,
  flexWidthEm,
  flexWidthPercentage,
  multiline,
  hSpacing,
  vSpacing,
}) => {
  const classList = classnames(
    "o-flexbox",
    decoration,
    moduleSpecificClassList,
    direction_row && "o-flexbox__direction--row",
    direction_row_portrait && "o-flexbox__direction--row@portrait",
    direction_row_portrait_mobile_s &&
      "o-flexbox__direction--row@portrait__mobile--s",
    direction_row_portrait_mobile_m &&
      "o-flexbox__direction--row@portrait__mobile--m",
    direction_row_portrait_mobile_l &&
      "o-flexbox__direction--row@portrait__mobile--l",
    direction_row_portrait_tablet_s &&
      "o-flexbox__direction--row@portrait__tablet--s",
    direction_row_portrait_tablet_m &&
      "o-flexbox__direction--row@portrait__tablet--m",
    direction_row_portrait_tablet_l &&
      "o-flexbox__direction--row@portrait__tablet--l",
    direction_row_portrait_desktop_s &&
      "o-flexbox__direction--row@portrait__desktop--s",
    direction_row_portrait_desktop_m &&
      "o-flexbox__direction--row@portrait__desktop--m",
    direction_row_portrait_desktop_l &&
      "o-flexbox__direction--row@portrait__desktop--l",
    direction_row_landscape && "o-flexbox__direction--row@landscape",
    direction_row_landscape_mobile_s &&
      "o-flexbox__direction--row@landscape__mobile--s",
    direction_row_landscape_mobile_m &&
      "o-flexbox__direction--row@landscape__mobile--m",
    direction_row_landscape_mobile_l &&
      "o-flexbox__direction--row@landscape__mobile--l",
    direction_row_landscape_tablet_s &&
      "o-flexbox__direction--row@landscape__tablet--s",
    direction_row_landscape_tablet_m &&
      "o-flexbox__direction--row@landscape__tablet--m",
    direction_row_landscape_tablet_l &&
      "o-flexbox__direction--row@landscape__tablet--l",
    direction_row_landscape_desktop_s &&
      "o-flexbox__direction--row@landscape__desktop--s",
    direction_row_landscape_desktop_m &&
      "o-flexbox__direction--row@landscape__desktop--m",
    direction_row_landscape_desktop_l &&
      "o-flexbox__direction--row@landscape__desktop--l",
    direction_column && "o-flexbox__direction--column",
    direction_column_portrait && "o-flexbox__direction--column@portrait",
    direction_column_portrait_mobile_s &&
      "o-flexbox__direction--column@portrait__mobile--s",
    direction_column_portrait_mobile_m &&
      "o-flexbox__direction--column@portrait__mobile--m",
    direction_column_portrait_mobile_l &&
      "o-flexbox__direction--column@portrait__mobile--l",
    direction_column_portrait_tablet_s &&
      "o-flexbox__direction--column@portrait__tablet--s",
    direction_column_portrait_tablet_m &&
      "o-flexbox__direction--column@portrait__tablet--m",
    direction_column_portrait_tablet_l &&
      "o-flexbox__direction--column@portrait__tablet--l",
    direction_column_portrait_desktop_s &&
      "o-flexbox__direction--column@portrait__desktop--s",
    direction_column_portrait_desktop_m &&
      "o-flexbox__direction--column@portrait__desktop--m",
    direction_column_portrait_desktop_l &&
      "o-flexbox__direction--column@portrait__desktop--l",
    direction_column_landscape && "o-flexbox__direction--column@landscape",
    direction_column_landscape_mobile_s &&
      "o-flexbox__direction--column@landscape__mobile--s",
    direction_column_landscape_mobile_m &&
      "o-flexbox__direction--column@landscape__mobile--m",
    direction_column_landscape_mobile_l &&
      "o-flexbox__direction--column@landscape__mobile--l",
    direction_column_landscape_tablet_s &&
      "o-flexbox__direction--column@landscape__tablet--s",
    direction_column_landscape_tablet_m &&
      "o-flexbox__direction--column@landscape__tablet--m",
    direction_column_landscape_tablet_l &&
      "o-flexbox__direction--column@landscape__tablet--l",
    direction_column_landscape_desktop_s &&
      "o-flexbox__direction--column@landscape__desktop--s",
    direction_column_landscape_desktop_m &&
      "o-flexbox__direction--column@landscape__desktop--m",
    direction_column_landscape_desktop_l &&
      "o-flexbox__direction--column@landscape__desktop--l",
    inline && "o-flexbox__display--inline",
    block && "o-flexbox__display--block",
    inlineAxisFlow && `o-flexbox__inline--${inlineAxisFlow}`,
    crossAxisFlow && `o-flexbox__cross--${crossAxisFlow}`,
    flex && `o-flexbox__flex--${flex}`,
    flexBasis && `o-flexbox__flex-basis--${flexBasis}`,
    flexGrow && `o-flexbox__flex-grow--${flexGrow}`,
    flexShrink && `o-flexbox__flex-shrink--${flexShrink}`,
    flexWidthPx && `o-flexbox__flex-width--${flexWidthPx}`,
    flexWidthEm && `o-flexbox__flex-width--${flexWidthEm}`,
    flexWidthPercentage && `o-flexbox__flex-width--${flexWidthPercentage}`,
    multiline && "o-flexbox__multiline--${multiline}",
    hSpacing && `o-flexbox-row__space--${hSpacing}`,
    vSpacing && `o-flexbox-column__space--${vSpacing}`
  );

  return <Tag className={classList}>{children}</Tag>;
};

export const Item: FC<PropsWithChildren<IFlexboxItemProps>> = ({
  children,
  decoration,
  moduleSpecificClassList,
  tagName: Tag = "div",
  inlineAxisFlow,
  crossAxisFlow,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  flexWidthPx,
  flexWidthEm,
  flexWidthPercentage,
  multiline,
  hSpacing,
  vSpacing,
}) => {
  const classList = classnames(
    "o-flexbox__item",
    decoration,
    moduleSpecificClassList,
    inlineAxisFlow && `o-flexbox-item__inline--${inlineAxisFlow}`,
    crossAxisFlow && `o-flexbox-item__cross--${crossAxisFlow}`,
    flex && `o-flexbox__flex--${flex}`,
    flexBasis && `o-flexbox__flex-basis--${flexBasis}`,
    flexGrow && `o-flexbox__flex-grow--${flexGrow}`,
    flexShrink && `o-flexbox__flex-shrink--${flexShrink}`,
    flexWidthPx && `o-flexbox__flex-width--${flexWidthPx}`,
    flexWidthEm && `o-flexbox__flex-width--${flexWidthEm}`,
    flexWidthPercentage && `o-flexbox__flex-width--${flexWidthPercentage}`,
    multiline && "o-flexbox__multiline--${multiline}",
    hSpacing && `o-flexbox-row__space--${hSpacing}`,
    vSpacing && `o-flexbox-column__space--${vSpacing}`
  );

  return <Tag className={classList}>{children}</Tag>;
};

export default { Container, Item };
