import type { FilterValues, FilterProps } from "../types";
declare const _default: import("vue").DefineComponent<{
    filterProps: {
        type: import("vue").PropType<FilterProps>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:filter-values": (value: FilterValues) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filterProps: {
        type: import("vue").PropType<FilterProps>;
        required: true;
    };
}>> & {
    "onUpdate:filter-values"?: ((value: FilterValues) => any) | undefined;
}, {}, {}>;
export default _default;
//# sourceMappingURL=FilterBar.vue.d.ts.map