import React, { FC, PropsWithChildren } from "react";
import classnames from "classnames";

import { IBehaviorProps } from "../../interfaces/Behaviors";
import { TUtilityWidth } from "../../types/Widths";
import { EOrientation } from "../../enums//Breakpoints";
import { useDeviceOrientation } from "../../utils/Breakpoints";
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

export interface ILayoutContainerProps
  extends ILayoutProps,
    IAdditionalLayoutProps {}

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

export const Container: FC<PropsWithChildren<ILayoutContainerProps>> = ({
  children,
  decoration,
  moduleSpecificClassList,
  tagName: Tag = "div",
  hAlign,
  vAlign,
  reverse,
}) => {
  const classList = classnames(
    "o-layout",
    decoration,
    moduleSpecificClassList,
    hAlign && `o-layout--${h_align}`,
    vAlign && `o-layout--${v_align}`,
    reverse && "o-layout--reverse"
  );

  return <Tag className={classList}>{children}</Tag>;
};

export const Item: FC<PropsWithChildren<ILayoutItemProps>> = ({
  children,
  decoration,
  moduleSpecificClassList,
  tagName: Tag = "div",
  width,
  widthPortraitMobileS: width_portrait_mobile_s,
  widthPortraitMobileM: width_portrait_mobile_m,
  widthPortraitMobileL: width_portrait_mobile_l,
  widthLandscapeMobileS: width_landscape_mobile_s,
  widthLandscapeMobileM: width_landscape_mobile_m,
  widthLandscapeMobileL: width_landscape_mobile_l,
  widthPortraitTabletS: width_portrait_tablet_s,
  widthPortraitTabletM: width_portrait_tablet_m,
  widthPortraitTabletL: width_portrait_tablet_l,
  widthLandscapeTabletS: width_landscape_tablet_s,
  widthLandscapeTabletM: width_landscape_tablet_m,
  widthLandscapeTabletL: width_landscape_tablet_l,
  widthPortraitDesktopS: width_portrait_desktop_s,
  widthPortraitDesktopM: width_portrait_desktop_m,
  widthPortraitDesktopL: width_portrait_desktop_l,
  widthLandscapeDesktopS: width_landscape_desktop_s,
  widthLandscapeDesktopM: width_landscape_desktop_m,
  widthLandscapeDesktopL: width_landscape_desktop_l,
  reverse,
}) => {
  const deviceOrientation = useDeviceOrientation();
  const mobile_s =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_mobile_s
      : width_portrait_mobile_s;
  const mobile_m =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_mobile_m
      : width_portrait_mobile_m;
  const mobile_l =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_mobile_l
      : width_portrait_mobile_l;

  const tablet_s =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_tablet_s
      : width_portrait_tablet_s;
  const tablet_m =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_tablet_m
      : width_portrait_tablet_m;
  const tablet_l =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_tablet_l
      : width_portrait_tablet_l;

  const desktop_s =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_desktop_s
      : width_portrait_desktop_s;
  const desktop_m =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_desktop_m
      : width_portrait_desktop_m;
  const desktop_l =
    deviceOrientation === EOrientation.Landscape
      ? width_landscape_desktop_l
      : width_portrait_desktop_l;

  const classList = classnames(
    "o-layout__item",
    decoration,
    moduleSpecificClassList,
    width,
    mobile_s && `${mobile_s}@s`,
    mobile_m && `${mobile_s}@m`,
    mobile_l && `${mobile_s}@l`,
    tablet_s && `${tablet_s}@s`,
    tablet_m && `${tablet_s}@m`,
    tablet_l && `${tablet_s}@l`,
    desktop_s && `${desktop_s}@s`,
    desktop_m && `${desktop_s}@m`,
    desktop_l && `${desktop_s}@l`,
    reverse && "o-layout__item--reverse"
  );

  return <Tag className={classList}>{children}</Tag>;
};

export default { Container, Item };
