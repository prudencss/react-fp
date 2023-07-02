import { ComponentType, FC, PropsWithChildren } from "react";
import { IMaterializedRootProps } from "./Materialized";
export interface IRouteProps {
    exact?: boolean;
    path: string;
}
interface IRouteMap {
    ["string"]: ComponentType;
}
export interface IRouterRootProps extends IMaterializedRootProps {
    router: FC<PropsWithChildren<any>>;
    switchRoute: FC<PropsWithChildren<any>>;
    route: FC<PropsWithChildren<IRouteProps>>;
    routeMap: IRouteMap;
}
export declare const RouterRoot: FC<PropsWithChildren<IRouterRootProps>>;
export default RouterRoot;
//# sourceMappingURL=Router.d.ts.map