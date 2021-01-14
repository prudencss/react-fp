import React, {
  FC,
  useState,
  useMemo,
} from "react";
import classnames from "classnames";

import ListItem from "./ListItem";
import { sortBy as by } from "../../utils/Sort";
import { TFaIcons as TIcon } from "../../types/Icons";
import { TSortOrder, TSortable, TSortableData } from "../../types/Sort";
import { ESortOrder } from "../../enums/Sort";

export interface IProps {
  icon?: TIcon,
  iconSelected?: TIcon,
  sortBy?: {
    path?: string,
    type: TSortable,
  },
  sortOrder?: TSortOrder,
  listData: TSortableData[],
  moduleSpecificClassList?: string[],
}

const List: FC<IProps> = ({
  icon,
  iconSelected,
  listData,
  sortBy,
  sortOrder,
  moduleSpecificClassList,
}) => {
  let [sortedData, setSortedData] = useState([...listData]);

  useMemo(() => {
    if (typeof sortBy?.type !== 'undefined' && sortBy.type !== null) {
      setSortedData([...listData].sort(by(sortBy!.type, sortBy!.path ?? undefined)[sortOrder ?? ESortOrder.Ascending]));
    }
  }, [sortOrder, sortBy, listData]);

  const iconify = (typeof icon !== 'undefined' && icon !== null);
  const classList = classnames(moduleSpecificClassList, {
    'o-list-bare': iconify,
    'x-icon__bullet': iconify,
    [icon as string]: iconify,
  });

  if (typeof sortBy?.type !== 'undefined' && sortBy.type !== null) {
    return (<ol className={classList}>
      {sortedData.map((item, i) => (<ListItem
        key={i}
        icon={iconSelected}
      >
        {item as any instanceof Date ? item.toLocaleString() : item}
      </ListItem>))}
    </ol>);
  }

  return (<ul className={classList}>
    {listData.map((item, i) => (<ListItem
      key={i}
      icon={iconSelected}
    >
      {item as any instanceof Date ? item.toLocaleString() : item}
    </ListItem>))}
  </ul>);
}

export default List;
