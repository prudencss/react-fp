import React, {
  FC,
  PropsWithChildren,
} from "react";
import classnames from "classnames";

import { ESize } from '../../enums/Behaviors';

export interface IMaterializedRootProps {
  size: ESize,
  moduleSpecificClassList: string[],
}

const MaterializedRoot: FC<PropsWithChildren<IMaterializedRootProps>> = ({
  children,
  size,
  moduleSpecificClassList,
}) => {
  const classList = classnames(
    "m-body",
    size && `m-body__size--${size}`,
    moduleSpecificClassList,
  );

  return (
    <div
      className={classList}
    >
      {children}
    </div>
  );
}

export default MaterializedRoot;
