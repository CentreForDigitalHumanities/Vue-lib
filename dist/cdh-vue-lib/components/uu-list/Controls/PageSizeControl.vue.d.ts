declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    pageSize: {
        type: import("vue").PropType<number>;
        required: true;
    };
    pageSizeOptions: {
        type: import("vue").PropType<number[]>;
        required: true;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:pageSize": (value: number) => void;
    "update:page-size": (value: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    pageSize: {
        type: import("vue").PropType<number>;
        required: true;
    };
    pageSizeOptions: {
        type: import("vue").PropType<number[]>;
        required: true;
    };
}>> & Readonly<{
    "onUpdate:page-size"?: ((value: number) => any) | undefined;
    "onUpdate:pageSize"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=PageSizeControl.vue.d.ts.map