declare type TPrependNextNum<A extends Array<unknown>> = A["length"] extends infer T ? ((t: T, ...a: A) => void) extends (...x: infer X) => void ? X : never : never;
declare type TEnumerateInternal<A extends Array<unknown>, N extends number> = {
    0: A;
    1: TEnumerateInternal<TPrependNextNum<A>, N>;
}[N extends A["length"] ? 0 : 1];
export declare type TEnumerate<N extends number> = TEnumerateInternal<[
], N> extends (infer E)[] ? E : never;
export declare type TRange<FROM extends number, TO extends number> = Exclude<TEnumerate<TO>, TEnumerate<FROM>>;
export declare type TEnum<E> = Record<keyof E, number | string> & {
    [k: number]: string;
};
export {};
//# sourceMappingURL=_.d.ts.map