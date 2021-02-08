import React, {
  FC,
  PropsWithChildren,
  ReactNode,
} from 'react';
import classNames from 'classnames';

export interface IProps {
  moduleSpecificClassList?: string[];
  brand: string,
  extra: ReactNode[] | ReactNode,
}

export const Component: FC<PropsWithChildren<IProps>> = ({
  children,
  moduleSpecificClassList,
  brand,
  extra,
}) => {
  const classList = classNames(
    'c-nav',
    moduleSpecificClassList,
  );

  return (
    <nav
      className={classList}
    >
      <section>
        <img alt="branding" src={brand} />
      </section>
      <section>
        {children}
      </section>
      <section>
        {extra}
      </section>
    </nav>
  );
}
