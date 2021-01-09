import React, {
  FC,
  useState,
  useCallback,
} from "react";
import classnames from "classnames";

import ListItem from "./ListItem";
import { sortBy as by } from "../../utils/Sort";
import { TFaIcons as TIcon } from "../../types/Icons";
import { TSortOrder } from "../../types/Sort";

export interface IProps {
  icon?: TIcon,
  iconSelected?: TIcon,
  sortBy?: {
    path: string,
    type: Date | Number | String,
  },
  sortOrder?: TSortOrder,
  listData: (typeof Date | typeof Number | typeof String)[],
}

const List: FC<IProps> = ({
  icon,
  iconSelected,
  listData,
  sortBy,
  sortOrder
}) => {
  let [sortedData, setSortedData] = useState(listData);
  useCallback(
    () => {
      if (typeof sortBy !== undefined && sortBy !== null) {
        setSortedData(listData.sort(by(sortBy!.path, sortBy!.type)[sortOrder ?? 'ascending']));
      }
    },
    [listData, sortBy, sortOrder],
  );

  const iconify = (typeof icon !== undefined && icon !== null);
  const classList = classnames({
    'o-list-bare': iconify,
    'x-icon__bullet': iconify,
    [icon as string]: iconify,
  });

  if (typeof sortBy !== undefined && sortBy !== null) {
    return (<ol className={classList}>
      {sortedData.map(item => (<ListItem
        icon={iconSelected}
      >
        {item}
      </ListItem>))}
    </ol>);
  }

  return (<ul className={classList}>
    {listData.map(item => (<ListItem
      icon={iconSelected}
    >
      {item}
    </ListItem>))}
  </ul>);
}

export default List;
