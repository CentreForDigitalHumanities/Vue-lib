declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headerText: {
        type: import("vue").PropType<string>;
    };
    confirmText: {
        type: import("vue").PropType<string>;
    };
    abortText: {
        type: import("vue").PropType<string>;
    };
    callback: {
        type: import("vue").PropType<() => Promise<never> | undefined>;
        required: true;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headerText: {
        type: import("vue").PropType<string>;
    };
    confirmText: {
        type: import("vue").PropType<string>;
    };
    abortText: {
        type: import("vue").PropType<string>;
    };
    callback: {
        type: import("vue").PropType<() => Promise<never> | undefined>;
        required: true;
    };
}>> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=BSConfirmDialog.vue.d.ts.map