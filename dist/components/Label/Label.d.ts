import React, { FC, PropsWithChildren } from "react";
import { IBehaviorProps } from "../../interfaces/Behaviors";
export declare enum ELabelType {
    Basic = "c-label-basic",
    NoBorder = "c-label--no-border",
    Stroked = "c-label--stroked",
    Flat = "c-label--flat",
    Ghost = "c-label--ghost"
}
export interface ILabelProps extends IBehaviorProps {
    /**
     * Add _custom styles_ as string-array class-list
     * *default:* []
     * *example:*
     * ```tsx
     * import Label, { ELabelType } from '@prudencss/react-fp';
     *
     * <Label
     *   moduleSpecificClassList={['first-module__labels--primary', 'u-hidden@xl']}
     * >
     *   {labelContent}
     * </Label>
     * ```
     */
    moduleSpecificClassList?: string[];
    /**
     * Add prepackaged styles per type easily
     * *options:* ```ELabelType```
     */
    labelType?: ELabelType;
    /**
     * Make the label a Floating Action Label (circular)
     */
    fab?: boolean;
    onBlur?: (ev: React.SyntheticEvent<HTMLElement>) => void;
}
export declare const Label: FC<PropsWithChildren<ILabelProps>>;
export default Label;
//# sourceMappingURL=Label.d.ts.map