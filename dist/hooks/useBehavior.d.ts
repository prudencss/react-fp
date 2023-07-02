import { TBehavior } from "../types/Behaviors";
import { IBehaviorProps } from "../interfaces/Behaviors";
declare const useBehavior: <ComponentProps extends IBehaviorProps>(componentInfix: string, { animation, color, decoration, size, disabled }: ComponentProps) => (TBehavior | string)[];
export default useBehavior;
//# sourceMappingURL=useBehavior.d.ts.map