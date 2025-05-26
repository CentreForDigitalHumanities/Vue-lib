import type { ContainerProps, Data, FilterProps } from "./types";
/**
 * Transforms container properties into filter properties, but only if both `filters` and `filterValues` are present.
 *
 */
export declare function container2FilterProps<DataType extends Data<string> | Data<number>>(containerProps: ContainerProps<DataType>): FilterProps | null;
//# sourceMappingURL=utils.d.ts.map