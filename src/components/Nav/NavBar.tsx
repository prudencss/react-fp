import React, { FC, PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";

export interface INavBarProps {
  moduleSpecificClassList?: string[];
  brand?: string | ReactNode;
  extra?: ReactNode[] | ReactNode;
}

export const NavBar: FC<PropsWithChildren<INavBarProps>> = ({
  children,
  moduleSpecificClassList,
  brand,
  extra,
}) => {
  const classList = classNames("c-nav", moduleSpecificClassList);

  return (
    <nav className={classList}>
      {typeof brand !== "undefined" && brand !== null ? (
        <section className="c-nav__brand">
          {typeof brand === "string" ? (
            <img alt="branding" src={brand} />
          ) : (
            brand
          )}
        </section>
      ) : null}
      <section className="c-nav__menu">{children}</section>
      {typeof extra !== "undefined" && extra !== null ? (
        <section className="c-nav__extra">{extra}</section>
      ) : null}
    </nav>
  );
};

export default NavBar;
