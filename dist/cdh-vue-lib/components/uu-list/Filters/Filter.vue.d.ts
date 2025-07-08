import type { FilterDefinition, FilterValue } from "../types";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    filter: {
        type: import("vue").PropType<FilterDefinition>;
        required: true;
    };
    value: {
        type: import("vue").PropType<FilterValue>;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: FilterValue) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    filter: {
        type: import("vue").PropType<FilterDefinition>;
        required: true;
    };
    value: {
        type: import("vue").PropType<FilterValue>;
    };
}>> & Readonly<{
    "onUpdate:value"?: ((value: FilterValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=Filter.vue.d.ts.map