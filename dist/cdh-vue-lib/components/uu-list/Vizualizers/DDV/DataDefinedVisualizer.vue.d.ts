import type { DDCListData, DataDefinedColumn as DDC } from "../../types";
declare const _default: import("vue").DefineComponent<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    data: DDCListData[] | null;
    isLoading: boolean;
}, {}>;
export default _default;
//# sourceMappingURL=DataDefinedVisualizer.vue.d.ts.map