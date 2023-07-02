import React, { FC, PropsWithChildren, useState, useCallback } from "react";
import classnames from "classnames";

import { TFaIcons as TIcon } from "../../types/Icons";

export interface IListItemProps {
  icon?: TIcon & string;
}

export const Component: FC<PropsWithChildren<IListItemProps>> = ({
  children,
  icon,
}) => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = useCallback(() => setSelected(!selected), [selected]);

  const iconify = typeof icon !== "undefined" && icon !== null;
  const classList = classnames({
    "x-icon--stateful": iconify && selected,
    [`${icon}`]: iconify,
  });

  return (
    <li className={classList} onClick={toggleSelected}>
      {children}
    </li>
  );
};
