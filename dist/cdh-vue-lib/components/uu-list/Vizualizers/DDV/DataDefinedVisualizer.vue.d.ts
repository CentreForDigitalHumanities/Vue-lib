import type { DDCListData, DataDefinedColumn as DDC } from "../../types";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<DDCListData[] | null>;
        default: null;
    };
    isLoading: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    columns: {
        type: import("vue").PropType<DDC[]>;
        required: true;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<DDCListData[] | null>;
        default: null;
    };
    isLoading: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    columns: {
        type: import("vue").PropType<DDC[]>;
        required: true;
    };
}>> & Readonly<{}>, {
    data: DDCListData[] | null;
    isLoading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=DataDefinedVisualizer.vue.d.ts.map