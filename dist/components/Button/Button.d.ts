import React, { FC, PropsWithChildren } from "react";
import { IBehaviorProps } from "../../interfaces/Behaviors";
import { EButtonType, EIntrinsicButtonType } from "../../enums/Button";
export interface IButtonProps extends IBehaviorProps {
    /**
     * Define _button behaviour_
     * *default:* 'button'
     * *options:* 'button', 'submit', 'reset'
     * *example:*
     * ```tsx
     * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
     *
     *   <Button
     *     htmlType="submit"
     *   >
     *     {buttonContent}
     *   </Button>
     * ```
     */
    type?: EIntrinsicButtonType;
    /**
     * Add _custom styles_ as string-array class-list
     * *default:* []
     * *example:*
     * ```tsx
     * import Button, { EButtonType } from '@prudencss/react-fp';
     *
     * <Button
     *   moduleSpecificClassList={['first-module__buttons--primary', 'u-hidden@xl']}
     * >
     *   {buttonContent}
     * </Button>
     * ```
     */
    moduleSpecificClassList?: string[];
    /**
     * Add prepackaged styles per type easily
     * *options:* ```EButtonType```
     */
    buttonType?: EButtonType;
    /**
     * Make the button a Floating Action Button (circular)
     */
    fab?: boolean;
    onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
    onBlur?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}
export declare const Button: FC<PropsWithChildren<IButtonProps>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map