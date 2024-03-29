import { FC } from "react";
import { TFaIcons as TIcon } from "../../types/Icons";
import { TSortOrder, TSortable, TSortableData } from "../../types/Sort";
export interface IListProps {
    icon?: TIcon;
    iconSelected?: TIcon;
    sortBy?: {
        path?: string;
        type: TSortable;
    };
    sortOrder?: TSortOrder;
    listData: TSortableData[];
    moduleSpecificClassList?: string[];
}
export declare const Component: FC<IListProps>;
//# sourceMappingURL=List.d.ts.map