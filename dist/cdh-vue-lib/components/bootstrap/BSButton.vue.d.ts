export type BSButtonVariant = "primary" | "secondary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark" | "blue" | "cream" | "dark-blue" | "indigo" | "purple" | "pink" | "red" | "brown" | "orange" | "yellow" | "green" | "teal" | "cyan" | "white" | "gray" | "gray-dark";
export type BSButtonSize = "small" | "normal" | "large";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    input: {
        type: import("vue").PropType<"reset" | "submit" | "button">;
        default: string;
    };
    href: {
        type: import("vue").PropType<string>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    variant: {
        type: import("vue").PropType<BSButtonVariant>;
        default: string;
    };
    size: {
        type: import("vue").PropType<BSButtonSize>;
        default: string;
    };
    outlined: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    active: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    newTab: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    cssClasses: {
        type: import("vue").PropType<string>;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    input: {
        type: import("vue").PropType<"reset" | "submit" | "button">;
        default: string;
    };
    href: {
        type: import("vue").PropType<string>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    variant: {
        type: import("vue").PropType<BSButtonVariant>;
        default: string;
    };
    size: {
        type: import("vue").PropType<BSButtonSize>;
        default: string;
    };
    outlined: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    active: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    newTab: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    cssClasses: {
        type: import("vue").PropType<string>;
    };
}>> & Readonly<{}>, {
    input: "reset" | "submit" | "button";
    variant: BSButtonVariant;
    size: BSButtonSize;
    outlined: boolean;
    active: boolean;
    disabled: boolean;
    loading: boolean;
    newTab: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=BSButton.vue.d.ts.map