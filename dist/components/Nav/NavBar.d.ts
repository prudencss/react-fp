import { FC, PropsWithChildren, ReactNode } from "react";
export interface INavBarProps {
    moduleSpecificClassList?: string[];
    brand?: string | ReactNode;
    extra?: ReactNode[] | ReactNode;
}
export declare const NavBar: FC<PropsWithChildren<INavBarProps>>;
export default NavBar;
//# sourceMappingURL=NavBar.d.ts.map