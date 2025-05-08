declare const _default: import("vue").DefineComponent<{
    maxPages: {
        type: import("vue").PropType<number>;
        required: true;
    };
    currentpage: {
        type: import("vue").PropType<number>;
        required: true;
    };
    showButtons: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    numOptions: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "change-page": (value: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    maxPages: {
        type: import("vue").PropType<number>;
        required: true;
    };
    currentpage: {
        type: import("vue").PropType<number>;
        required: true;
    };
    showButtons: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    numOptions: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    "onChange-page"?: ((value: number) => any) | undefined;
}, {
    showButtons: boolean;
    numOptions: number;
}, {}>;
export default _default;
//# sourceMappingURL=BSPagination.vue.d.ts.map