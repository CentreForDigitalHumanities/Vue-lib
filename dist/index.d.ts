declare module "components/bootstrap/Button.vue" {
    const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
            type: import("vue").PropType<"primary" | "secondary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark">;
            default: string;
        };
        size: {
            type: import("vue").PropType<"small" | "normal" | "large">;
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
            type: import("vue").PropType<"primary" | "secondary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark">;
            default: string;
        };
        size: {
            type: import("vue").PropType<"small" | "normal" | "large">;
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
        variant: "primary" | "secondary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark";
        size: "small" | "normal" | "large";
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
}
declare module "components/bootstrap/Card.vue" {
    const _default_1: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
        headerClasses: {
            type: import("vue").PropType<string>;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "header-icon-clicked": () => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        headerClasses: {
            type: import("vue").PropType<string>;
        };
    }>> & {
        "onHeader-icon-clicked"?: (() => any) | undefined;
    }, {}, {}>, {
        header?(_: {}): any;
        title?(_: {}): any;
        header_icon?(_: {}): any;
        image?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    }>;
    export default _default_1;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
declare module "components/bootstrap/DropdownMultiSelect.vue" {
    const _default_2: import("vue").DefineComponent<{
        label: {
            type: import("vue").PropType<string>;
            required: true;
        };
        options: {
            type: import("vue").PropType<[string | number, string][]>;
            required: true;
        };
        modelValue: {
            type: import("vue").PropType<string[] | number[]>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: string | number | string[] | number[]) => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: import("vue").PropType<string>;
            required: true;
        };
        options: {
            type: import("vue").PropType<[string | number, string][]>;
            required: true;
        };
        modelValue: {
            type: import("vue").PropType<string[] | number[]>;
            required: true;
        };
    }>> & {
        "onUpdate:modelValue"?: ((value: string | number | string[] | number[]) => any) | undefined;
    }, {}, {}>;
    export default _default_2;
}
declare module "components/bootstrap/Icon.vue" {
    const _default_3: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
        symbol: {
            type: import("vue").PropType<string | boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null>;
            default: null;
        };
        title: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        mask: {
            type: import("vue").PropType<string | object | string[] | null>;
            default: null;
        };
        icon: {
            type: import("vue").PropType<string | object | string[]>;
            required: true;
        };
        inline: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        border: {
            type: import("vue").PropType<boolean>;
        };
        fixedWidth: {
            type: import("vue").PropType<boolean>;
        };
        flip: {
            type: import("vue").PropType<boolean | "horizontal" | "vertical" | "both">;
            default: boolean;
        };
        listItem: {
            type: import("vue").PropType<boolean>;
        };
        pull: {
            type: import("vue").PropType<"right" | "left" | null>;
            default: null;
        };
        pulse: {
            type: import("vue").PropType<boolean>;
        };
        rotation: {
            type: import("vue").PropType<90 | 180 | 270 | "90" | "180" | "270" | null>;
            default: null;
        };
        swapOpacity: {
            type: import("vue").PropType<boolean>;
        };
        spin: {
            type: import("vue").PropType<boolean>;
        };
        transform: {
            type: import("vue").PropType<string | object | null>;
            default: null;
        };
        inverse: {
            type: import("vue").PropType<boolean>;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        symbol: {
            type: import("vue").PropType<string | boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<"lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null>;
            default: null;
        };
        title: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        mask: {
            type: import("vue").PropType<string | object | string[] | null>;
            default: null;
        };
        icon: {
            type: import("vue").PropType<string | object | string[]>;
            required: true;
        };
        inline: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        border: {
            type: import("vue").PropType<boolean>;
        };
        fixedWidth: {
            type: import("vue").PropType<boolean>;
        };
        flip: {
            type: import("vue").PropType<boolean | "horizontal" | "vertical" | "both">;
            default: boolean;
        };
        listItem: {
            type: import("vue").PropType<boolean>;
        };
        pull: {
            type: import("vue").PropType<"right" | "left" | null>;
            default: null;
        };
        pulse: {
            type: import("vue").PropType<boolean>;
        };
        rotation: {
            type: import("vue").PropType<90 | 180 | 270 | "90" | "180" | "270" | null>;
            default: null;
        };
        swapOpacity: {
            type: import("vue").PropType<boolean>;
        };
        spin: {
            type: import("vue").PropType<boolean>;
        };
        transform: {
            type: import("vue").PropType<string | object | null>;
            default: null;
        };
        inverse: {
            type: import("vue").PropType<boolean>;
        };
    }>>, {
        symbol: string | boolean;
        size: "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | null;
        title: string | null;
        mask: string | object | string[] | null;
        inline: boolean;
        flip: boolean | "horizontal" | "vertical" | "both";
        pull: "right" | "left" | null;
        rotation: 90 | 180 | 270 | "90" | "180" | "270" | null;
        transform: string | object | null;
    }, {}>, {
        default?(_: {}): any;
    }>;
    export default _default_3;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
declare module "components/bootstrap/MultiSelect.vue" {
    const _default_4: <T extends string | number>(__VLS_props: {
        options: [T, string][];
        modelValue: T[];
        containerClasses?: string | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
        props: {
            options: [T, string][];
            modelValue: T[];
            containerClasses?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: (e: "update:modelValue", value: T[]) => void;
    }, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
        props: {
            options: [T, string][];
            modelValue: T[];
            containerClasses?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: (e: "update:modelValue", value: T[]) => void;
    }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> & {
        __ctx?: {
            props: {
                options: [T, string][];
                modelValue: T[];
                containerClasses?: string | undefined;
            };
            expose(exposed: {}): void;
            attrs: any;
            slots: {};
            emit: (e: "update:modelValue", value: T[]) => void;
        } | undefined;
    };
    export default _default_4;
}
declare module "components/bootstrap/Pagination.vue" {
    const _default_5: import("vue").DefineComponent<{
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
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "change-page": (value: number) => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    }>> & {
        "onChange-page"?: ((value: number) => any) | undefined;
    }, {
        showButtons: boolean;
        numOptions: number;
    }, {}>;
    export default _default_5;
}
declare module "components/bootstrap/RadioSelect.vue" {
    const _default_6: import("vue").DefineComponent<{
        options: {
            type: import("vue").PropType<[string | number, string][]>;
            required: true;
        };
        modelValue: {
            type: import("vue").PropType<string | number>;
            required: true;
        };
        containerClasses: {
            type: import("vue").PropType<string>;
            default: string;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: string | number) => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        options: {
            type: import("vue").PropType<[string | number, string][]>;
            required: true;
        };
        modelValue: {
            type: import("vue").PropType<string | number>;
            required: true;
        };
        containerClasses: {
            type: import("vue").PropType<string>;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }, {
        containerClasses: string;
    }, {}>;
    export default _default_6;
}
declare module "components/bootstrap/Sidebar.vue" {
    const _default_7: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
        id: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        placement: {
            type: import("vue").PropType<"right" | "left">;
            default: string;
        };
        mobilePlacement: {
            type: import("vue").PropType<"top" | "bottom">;
            default: string;
        };
        stickySidebar: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        mobileStickySidebar: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        placement: {
            type: import("vue").PropType<"right" | "left">;
            default: string;
        };
        mobilePlacement: {
            type: import("vue").PropType<"top" | "bottom">;
            default: string;
        };
        stickySidebar: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        mobileStickySidebar: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>>, {
        id: string | null;
        placement: "right" | "left";
        mobilePlacement: "top" | "bottom";
        stickySidebar: boolean;
        mobileStickySidebar: boolean;
    }, {}>, {
        "sidebar-button"?(_: {}): any;
        sidebar?(_: {}): any;
        default?(_: {}): any;
    }>;
    export default _default_7;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
declare module "components/bootstrap/index" {
    import Button from "components/bootstrap/Button.vue";
    import Card from "components/bootstrap/Card.vue";
    import Dropdown from "components/bootstrap/Dropdown.vue";
    import DropdownMultiSelect from "components/bootstrap/DropdownMultiSelect.vue";
    import Icon from "components/bootstrap/Icon.vue";
    import MultiSelect from "components/bootstrap/MultiSelect.vue";
    import Pagination from "components/bootstrap/Pagination.vue";
    import RadioSelect from "components/bootstrap/RadioSelect.vue";
    import Sidebar from "components/bootstrap/Sidebar.vue";
    export { Button, Card, Dropdown, DropdownMultiSelect, Icon, MultiSelect, Pagination, RadioSelect, Sidebar };
}
declare module "components/bootstrap/Dropdown.vue" {
    const _default_8: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
        id: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        variant: {
            type: import("vue").PropType<"primary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark">;
            default: string;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        variant: {
            type: import("vue").PropType<"primary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark">;
            default: string;
        };
    }>>, {
        id: string | null;
        variant: "primary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark";
    }, {}>, {
        button?(_: {}): any;
        default?(_: {}): any;
    }>;
    export default _default_8;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
declare module "components/bootstrap/Modal.vue" {
    const _default_9: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
        id: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        size: {
            type: import("vue").PropType<"default" | "small" | "large" | "extra-large">;
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
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        shown: () => void;
        hidden: () => void;
        "close-clicked": () => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: import("vue").PropType<string | null>;
            default: null;
        };
        size: {
            type: import("vue").PropType<"default" | "small" | "large" | "extra-large">;
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
    }>> & {
        onHidden?: (() => any) | undefined;
        onShown?: (() => any) | undefined;
        "onClose-clicked"?: (() => any) | undefined;
    }, {
        id: string | null;
        size: "default" | "small" | "large" | "extra-large";
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
    export default _default_9;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
declare module "composables/useInputValue" {
    /**
     * Simple composable to get the input value from a @input or @update event
     * @param e
     */
    export default function useInputValue(e: Event): string;
}
declare module "cdh-vue-lib" {
    import { Button, Card, Dropdown, DropdownMultiSelect, Icon, MultiSelect, Pagination, RadioSelect, Sidebar } from "components/bootstrap/index";
    import useInputValue from "composables/useInputValue";
    export { Button, Card, Dropdown, DropdownMultiSelect, Icon, MultiSelect, Pagination, RadioSelect, Sidebar };
    export { useInputValue };
}
