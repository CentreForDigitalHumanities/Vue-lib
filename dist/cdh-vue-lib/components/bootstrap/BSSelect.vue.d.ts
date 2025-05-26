export type BSSelectOption<T> = [T, string];
declare const _default: <T extends string | number | null>(__VLS_props: {
    options: BSSelectOption<T>[];
    modelValue: T;
    containerClasses?: string | undefined;
    placeholder?: string | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: {
        options: BSSelectOption<T>[];
        modelValue: T;
        containerClasses?: string | undefined;
        placeholder?: string | undefined;
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: {};
    emit: (e: "update:model-value", value: T) => void;
}, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
    props: {
        options: BSSelectOption<T>[];
        modelValue: T;
        containerClasses?: string | undefined;
        placeholder?: string | undefined;
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: {};
    emit: (e: "update:model-value", value: T) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            options: BSSelectOption<T>[];
            modelValue: T;
            containerClasses?: string | undefined;
            placeholder?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: (e: "update:model-value", value: T) => void;
    } | undefined;
};
export default _default;
//# sourceMappingURL=BSSelect.vue.d.ts.map