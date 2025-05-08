import type { DataDefinedColumn, FilterDefinition } from "./types";
interface Config {
    dataUri: string;
    sortEnabled: boolean;
    sortOptions?: SortOption[];
    filtersEnabled: boolean;
    filters?: FilterDefinition[];
    pageSize: number;
    pageSizeOptions: number[];
    searchEnabled: boolean;
    columns: DataDefinedColumn[];
    container?: "default" | "sidebar";
}
interface SortOption {
    field: string;
    label: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    config: {
        type: import("vue").PropType<Config>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: import("vue").PropType<Config>;
        required: true;
    };
}>>, {}, {}>, {
    data?(_: {
        data: never[] | undefined;
        isLoading: boolean;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=DSCList.vue.d.ts.map