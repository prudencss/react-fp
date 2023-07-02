import React, { FC, PropsWithChildren } from "react";
import classnames from "classnames";
import { ESize } from "../../enums/Behaviors";

export { ESize };

export interface IMaterializedRootProps {
  size?: ESize;
  moduleSpecificClassList?: string[];
}

export const MaterializedRoot: FC<
  PropsWithChildren<IMaterializedRootProps>
> = ({ children, size, moduleSpecificClassList }) => {
  const classList = classnames(
    "m-body",
    moduleSpecificClassList,
    size && `m-body__size--${size ?? "m"}`
  );

  return <div className={classList}>{children}</div>;
};

export default MaterializedRoot;
