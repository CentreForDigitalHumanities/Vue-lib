declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "change-page": (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    "onChange-page"?: ((value: number) => any) | undefined;
}>, {
    showButtons: boolean;
    numOptions: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=BSPagination.vue.d.ts.map