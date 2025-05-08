import type { SortOption } from "../types";
declare const _default: import("vue").DefineComponent<{
    currentSort: {
        type: import("vue").PropType<string>;
        required: true;
    };
    sortOptions: {
        type: import("vue").PropType<SortOption[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:current-sort": (value: string) => void;
    "update:currentSort": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    currentSort: {
        type: import("vue").PropType<string>;
        required: true;
    };
    sortOptions: {
        type: import("vue").PropType<SortOption[]>;
        required: true;
    };
}>> & {
    "onUpdate:current-sort"?: ((value: string) => any) | undefined;
    "onUpdate:currentSort"?: ((value: string) => any) | undefined;
}, {}, {}>;
export default _default;
//# sourceMappingURL=SortControl.vue.d.ts.map