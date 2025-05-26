declare const _default: <T extends string | number>(__VLS_props: {
    label: string;
    options: [T, string][];
    modelValue: T[];
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: {
        label: string;
        options: [T, string][];
        modelValue: T[];
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: {};
    emit: (e: "update:modelValue", value: T | T[]) => void;
}, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
    props: {
        label: string;
        options: [T, string][];
        modelValue: T[];
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: {};
    emit: (e: "update:modelValue", value: T | T[]) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            label: string;
            options: [T, string][];
            modelValue: T[];
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: (e: "update:modelValue", value: T | T[]) => void;
    } | undefined;
};
export default _default;
//# sourceMappingURL=BSDropdownMultiSelect.vue.d.ts.map