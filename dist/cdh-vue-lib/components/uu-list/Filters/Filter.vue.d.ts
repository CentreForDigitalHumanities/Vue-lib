import type { FilterDefinition, FilterValue } from "../types";
declare const _default: import("vue").DefineComponent<{
    filter: {
        type: import("vue").PropType<FilterDefinition>;
        required: true;
    };
    value: {
        type: import("vue").PropType<FilterValue>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: FilterValue) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filter: {
        type: import("vue").PropType<FilterDefinition>;
        required: true;
    };
    value: {
        type: import("vue").PropType<FilterValue>;
    };
}>> & {
    "onUpdate:value"?: ((value: FilterValue) => any) | undefined;
}, {}, {}>;
export default _default;
//# sourceMappingURL=Filter.vue.d.ts.map