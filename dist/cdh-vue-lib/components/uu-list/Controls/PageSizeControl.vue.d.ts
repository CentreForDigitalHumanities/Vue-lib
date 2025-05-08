declare const _default: import("vue").DefineComponent<{
    pageSize: {
        type: import("vue").PropType<number>;
        required: true;
    };
    pageSizeOptions: {
        type: import("vue").PropType<number[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:pageSize": (value: number) => void;
    "update:page-size": (value: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pageSize: {
        type: import("vue").PropType<number>;
        required: true;
    };
    pageSizeOptions: {
        type: import("vue").PropType<number[]>;
        required: true;
    };
}>> & {
    "onUpdate:page-size"?: ((value: number) => any) | undefined;
    "onUpdate:pageSize"?: ((value: number) => any) | undefined;
}, {}, {}>;
export default _default;
//# sourceMappingURL=PageSizeControl.vue.d.ts.map