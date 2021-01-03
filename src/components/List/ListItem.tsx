import React, {
  FC,
  PropsWithChildren,
  useState,
} from "react";

export interface IProps {
  icon: string,
  iconStyle: 'fal' | 'far' | 'fas' | 'fab',
}

const ListItem: FC<PropsWithChildren<IProps>> = ({
  children,
  icon,
  iconStyle,
}) => {

  return (<li>

    {children}
  </li>);
}
