import type { SortOption } from "../types";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    currentSort: {
        type: import("vue").PropType<string>;
        required: true;
    };
    sortOptions: {
        type: import("vue").PropType<SortOption[]>;
        required: true;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:current-sort": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    currentSort: {
        type: import("vue").PropType<string>;
        required: true;
    };
    sortOptions: {
        type: import("vue").PropType<SortOption[]>;
        required: true;
    };
}>> & Readonly<{
    "onUpdate:current-sort"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=SortControl.vue.d.ts.map