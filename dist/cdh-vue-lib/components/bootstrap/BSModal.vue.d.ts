declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: import("vue").PropType<string | null>;
        default: null;
    };
    size: {
        type: import("vue").PropType<"small" | "large" | "default" | "extra-large">;
        default: string;
    };
    active: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    hasBackground: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    backgroundClickCloses: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showCloseButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    headerColor: {
        type: import("vue").PropType<string | null>;
        default: string;
    };
    headerBold: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    centered: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    shown: () => void;
    hidden: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: import("vue").PropType<string | null>;
        default: null;
    };
    size: {
        type: import("vue").PropType<"small" | "large" | "default" | "extra-large">;
        default: string;
    };
    active: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    hasBackground: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    backgroundClickCloses: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showCloseButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    headerColor: {
        type: import("vue").PropType<string | null>;
        default: string;
    };
    headerBold: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    centered: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onHidden?: (() => any) | undefined;
    onShown?: (() => any) | undefined;
}>, {
    id: string | null;
    size: "small" | "large" | "default" | "extra-large";
    hasBackground: boolean;
    backgroundClickCloses: boolean;
    showCloseButton: boolean;
    headerColor: string | null;
    headerBold: boolean;
    centered: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    title?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=BSModal.vue.d.ts.map