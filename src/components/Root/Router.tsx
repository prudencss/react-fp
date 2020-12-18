import React, {
  ComponentType,
  FC,
  PropsWithChildren,
} from "react";

import Root, { IMaterializedRootProps } from './Materialized';

export interface IRouteProps {
  exact?: boolean,
  path: string,
}

interface IRouteMap {
  ['string']: ComponentType,
}

export interface IRouterRootProps extends IMaterializedRootProps {
  router: ComponentType,
  switchRoute: ComponentType,
  route: ComponentType<PropsWithChildren<IRouteProps>>,
  routeMap: IRouteMap,
}

const RouterRoot: FC<PropsWithChildren<IRouterRootProps>> = ({
  children,
  size,
  moduleSpecificClassList,
  router: Router,
  switchRoute: Switch,
  route: Route,
  routeMap,
}) => (
  <Router>
    <Root
      size={size}
      moduleSpecificClassList={moduleSpecificClassList}
    >
      {children}
      <Switch>
        {Object.entries(routeMap).map(([path, Page]) => (
          <Route
            {...(path === '/' ? { exact: true } : {})}
            path={path}
          >
            <Page/>
          </Route>
        ))}
      </Switch>
    </Root>
  </Router>
);

export default RouterRoot;
