declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<"small" | "large" | "default" | "extra-large">;
        default: string;
    };
    active: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    id: {
        type: import("vue").PropType<string | null>;
        default: null;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    shown: () => void;
    hidden: () => void;
    "close-clicked": () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<"small" | "large" | "default" | "extra-large">;
        default: string;
    };
    active: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    id: {
        type: import("vue").PropType<string | null>;
        default: null;
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
}>> & {
    onHidden?: (() => any) | undefined;
    onShown?: (() => any) | undefined;
    "onClose-clicked"?: (() => any) | undefined;
}, {
    size: "small" | "large" | "default" | "extra-large";
    id: string | null;
    hasBackground: boolean;
    backgroundClickCloses: boolean;
    showCloseButton: boolean;
    headerColor: string | null;
    headerBold: boolean;
    centered: boolean;
}, {}>, {
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