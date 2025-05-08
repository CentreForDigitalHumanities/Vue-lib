export type BSButtonVariant = "primary" | "secondary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark" | "blue" | "cream" | "dark-blue" | "indigo" | "purple" | "pink" | "red" | "brown" | "orange" | "yellow" | "green" | "teal" | "cyan" | "white" | "gray" | "gray-dark";
export type BSButtonSize = "small" | "normal" | "large";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    id: {
        type: import("vue").PropType<string | null>;
        default: null;
    };
    href: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    name: {
        type: import("vue").PropType<string>;
        default: undefined;
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
    input: {
        type: import("vue").PropType<"submit" | "reset" | "button">;
        default: string;
    };
    newTab: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    cssClasses: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: import("vue").PropType<string | null>;
        default: null;
    };
    href: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    name: {
        type: import("vue").PropType<string>;
        default: undefined;
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
    input: {
        type: import("vue").PropType<"submit" | "reset" | "button">;
        default: string;
    };
    newTab: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    cssClasses: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    id: string | null;
    href: string;
    name: string;
    variant: BSButtonVariant;
    size: BSButtonSize;
    outlined: boolean;
    active: boolean;
    disabled: boolean;
    loading: boolean;
    input: "submit" | "reset" | "button";
    newTab: boolean;
    cssClasses: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=BSButton.vue.d.ts.map