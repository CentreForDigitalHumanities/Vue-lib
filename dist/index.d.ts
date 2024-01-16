declare module "cdh-vue-lib/components/bootstrap/BSButton.vue" {
    export type BSButtonVariant = "primary" | "secondary" | "link" | "info" | "success" | "warning" | "danger" | "light" | "dark" | "blue" | "dark-blue" | "indigo" | "purple" | "pink" | "red" | "brown" | "orange" | "yellow" | "green" | "teal" | "cyan" | "white" | "gray" | "gray-dark";
    export type BSButtonSize = "small" | "normal" | "large";
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
}
declare module "cdh-vue-lib/components/bootstrap/BSCard.vue" {
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
declare module "cdh-vue-lib/components/bootstrap/BSDropdownMultiSelect.vue" {
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
declare module "cdh-vue-lib/components/bootstrap/BSIcon.vue" {
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
        icon: {
            type: import("vue").PropType<string | object | string[]>;
            required: true;
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
        icon: {
            type: import("vue").PropType<string | object | string[]>;
            required: true;
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
declare module "cdh-vue-lib/components/uu-list/types" {
    import { BSButtonSize, BSButtonVariant } from "cdh-vue-lib/components/bootstrap/BSButton.vue";
    interface FilterDefinition {
        field: string;
        label: string;
        options?: [string | number, string][];
        type: "radio" | "checkbox" | "date" | "select";
        initial?: FilterValue;
    }
    type FilterValue = string | number | null | string[] | number[];
    type FilterValues = Record<string, FilterValue>;
    interface Data<IDType> {
        id: IDType;
    }
    interface SortOption {
        field: string;
        label: string;
    }
    interface ContainerProps<T extends Data<string> | Data<number>> {
        data?: T[];
        isLoading: boolean;
        totalData: number;
        currentPage: number;
        searchEnabled: boolean;
        search: string;
        sortEnabled: boolean;
        currentSort: string;
        sortOptions: SortOption[];
        pageSize: number;
        pageSizeOptions: number[];
        filtersEnabled: boolean;
        filters?: FilterDefinition[];
        filterValues?: FilterValues;
    }
    type ContainerEmits = {
        (e: "update:current-page", value: number): void;
        (e: "update:search", value: string): void;
        (e: "update:current-sort", value: string): void;
        (e: "update:page-size", value: number): void;
        (e: "update:filter-values", value: FilterValues): void;
    };
    interface DDCListData extends Data<string | number> {
        [Key: string]: any;
    }
    interface _DDC {
        field: string;
        label: string;
    }
    interface DDCHTML extends _DDC {
        type: "html";
    }
    interface DDCActions extends _DDC {
        type: "actions";
    }
    interface DDCString extends _DDC {
        type: "string";
        classes?: string;
    }
    interface DateTimeFormatOptions {
        localeMatcher?: "best fit" | "lookup";
        weekday?: "long" | "short" | "narrow";
        era?: "long" | "short" | "narrow";
        year?: "numeric" | "2-digit";
        month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
        day?: "numeric" | "2-digit";
        hour?: "numeric" | "2-digit";
        minute?: "numeric" | "2-digit";
        second?: "numeric" | "2-digit";
        timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric";
        formatMatcher?: "best fit" | "basic";
        hour12?: boolean;
        timeZone?: string;
        dateStyle: "full" | "long" | "medium" | "short";
        timeStyle: "full" | "long" | "medium" | "short";
    }
    interface DDCDate extends _DDC {
        type: "date";
        format?: DateTimeFormatOptions | "date" | "time" | "datetime" | null;
        classes?: string;
        language?: string | null;
    }
    interface DDCLink extends _DDC {
        type: "link";
        classes?: string;
    }
    interface DDCButton extends _DDC {
        type: "button";
        variant: BSButtonVariant | undefined;
        size: BSButtonSize | undefined;
    }
    type DataDefinedColumn = DDCHTML | DDCActions | DDCString | DDCLink | DDCButton | DDCDate;
    export { FilterDefinition, FilterValue, FilterValues, Data, DDCListData, SortOption, ContainerProps, ContainerEmits, DataDefinedColumn, DDCHTML, DDCActions, DDCString, DDCDate, DDCLink, DDCButton, };
}
declare module "cdh-vue-lib/composables/useInputValue" {
    /**
     * Simple composable to get the input value from a @input or @update event
     * @param e
     */
    export default function useInputValue(e: Event): string;
}
declare module "cdh-vue-lib/composables/useInputValueAsNumber" {
    /**
     *
     * Returns the value of an input as a number.
     *
     * Only to be used with type="number" inputs. With input types other than 'number' (or 'range' or date-related types), this function will always return 0.
     *
     * @param event
     * @returns a number, or 0 if the input cannot be parsed.
     */
    function useInputValueAsNumber(event: Event): number;
    /**
     *
     * Returns the value of an input as a number, or null if the input is empty or contains a non-number.
     *
     * Only to be used with type="number" inputs. With input types other than 'number' (or 'range' or date-related types), this function will always return null.
     *
     * @param event
     * @returns a number, or null if the input cannot be parsed.
     */
    function useInputValueAsNumberOrNull(event: Event): number | null;
    export { useInputValueAsNumber, useInputValueAsNumberOrNull };
}
declare module "cdh-vue-lib/composables" {
    import useInputValue from "cdh-vue-lib/composables/useInputValue";
    import { useInputValueAsNumber, useInputValueAsNumberOrNull } from "cdh-vue-lib/composables/useInputValueAsNumber";
    export { useInputValue, useInputValueAsNumber, useInputValueAsNumberOrNull };
}
declare module "cdh-vue-lib/components/uu-list/Filters/Filter.vue" {
    import { FilterDefinition, FilterValue } from "cdh-vue-lib/components/uu-list/types";
    const _default_4: import("vue").DefineComponent<{
        filter: {
            type: import("vue").PropType<FilterDefinition>;
            required: true;
        };
        value: {
            type: import("vue").PropType<FilterValue>;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:value": (value: FilterValue) => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        filter: {
            type: import("vue").PropType<FilterDefinition>;
            required: true;
        };
        value: {
            type: import("vue").PropType<FilterValue>;
        };
    }>> & {
        "onUpdate:value"?: ((value: FilterValue) => any) | undefined;
    }, {}, {}>;
    export default _default_4;
}
declare module "cdh-vue-lib/components/uu-list/Filters/FilterBar.vue" {
    import { FilterDefinition, FilterValues } from "cdh-vue-lib/components/uu-list/types";
    const _default_5: import("vue").DefineComponent<{
        filters: {
            type: import("vue").PropType<FilterDefinition[]>;
            required: true;
        };
        filterValues: {
            type: import("vue").PropType<FilterValues>;
            required: true;
        };
    } | {
        filters: {
            type: import("vue").PropType<null | undefined>;
            required: true;
        };
        filterValues: {
            type: import("vue").PropType<null | undefined>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:filter-values": (value: FilterValues) => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        filters: {
            type: import("vue").PropType<FilterDefinition[]>;
            required: true;
        };
        filterValues: {
            type: import("vue").PropType<FilterValues>;
            required: true;
        };
    }> | import("vue").ExtractPropTypes<{
        filters: {
            type: import("vue").PropType<null | undefined>;
            required: true;
        };
        filterValues: {
            type: import("vue").PropType<null | undefined>;
            required: true;
        };
    }>> & {
        "onUpdate:filter-values"?: ((value: FilterValues) => any) | undefined;
    }, {} | {}, {}>;
    export default _default_5;
}
declare module "cdh-vue-lib/components/uu-list/Controls/SearchControl.vue" {
    const _default_6: import("vue").DefineComponent<{
        modelValue: {
            type: import("vue").PropType<string>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: string) => void;
        "update:model-value": (value: string) => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<string>;
            required: true;
        };
    }>> & {
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onUpdate:model-value"?: ((value: string) => any) | undefined;
    }, {}, {}>;
    export default _default_6;
}
declare module "cdh-vue-lib/components/uu-list/Controls/PageSizeControl.vue" {
    const _default_7: import("vue").DefineComponent<{
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
    export default _default_7;
}
declare module "cdh-vue-lib/components/uu-list/Controls/SortControl.vue" {
    import { SortOption } from "cdh-vue-lib/components/uu-list/types";
    const _default_8: import("vue").DefineComponent<{
        currentSort: {
            type: import("vue").PropType<string>;
            required: true;
        };
        sortOptions: {
            type: import("vue").PropType<SortOption[]>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:current-sort": (value: string) => void;
        "update:currentSort": (value: string) => void;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        currentSort: {
            type: import("vue").PropType<string>;
            required: true;
        };
        sortOptions: {
            type: import("vue").PropType<SortOption[]>;
            required: true;
        };
    }>> & {
        "onUpdate:current-sort"?: ((value: string) => any) | undefined;
        "onUpdate:currentSort"?: ((value: string) => any) | undefined;
    }, {}, {}>;
    export default _default_8;
}
declare module "cdh-vue-lib/components/uu-list/Controls/SearchResultNum.vue" {
    const _default_9: import("vue").DefineComponent<{
        searchQuery: {
            type: import("vue").PropType<string>;
        };
        pageNum: {
            type: import("vue").PropType<number>;
        };
        totalNum: {
            type: import("vue").PropType<number>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        searchQuery: {
            type: import("vue").PropType<string>;
        };
        pageNum: {
            type: import("vue").PropType<number>;
        };
        totalNum: {
            type: import("vue").PropType<number>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_9;
}
declare module "cdh-vue-lib/components/uu-list/Containers/Default.vue" {
    import { ContainerEmits, ContainerProps, Data } from "cdh-vue-lib/components/uu-list/types";
    const _default_10: <T extends Data<string> | Data<number>>(__VLS_props: ContainerProps<T> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
        props: ContainerProps<T>;
        expose(exposed: {}): void;
        attrs: any;
        slots: {
            "filters-top"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-bottom"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            data?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
        };
        emit: ContainerEmits;
    }, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
        props: ContainerProps<T>;
        expose(exposed: {}): void;
        attrs: any;
        slots: {
            "filters-top"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-bottom"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            data?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
        };
        emit: ContainerEmits;
    }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> & {
        __ctx?: {
            props: ContainerProps<T>;
            expose(exposed: {}): void;
            attrs: any;
            slots: {
                "filters-top"?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
                "filters-bottom"?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
                data?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
            };
            emit: ContainerEmits;
        } | undefined;
    };
    export default _default_10;
}
declare module "cdh-vue-lib/components/uu-list/Containers/Sidebar.vue" {
    import { ContainerEmits, ContainerProps, Data } from "cdh-vue-lib/components/uu-list/types";
    const _default_11: <T extends Data<string> | Data<number>>(__VLS_props: ContainerProps<T> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
        props: ContainerProps<T>;
        expose(exposed: {}): void;
        attrs: any;
        slots: {
            "filters-top"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-bottom"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            data?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
        };
        emit: ContainerEmits;
    }, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
        props: ContainerProps<T>;
        expose(exposed: {}): void;
        attrs: any;
        slots: {
            "filters-top"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-bottom"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            data?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
        };
        emit: ContainerEmits;
    }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> & {
        __ctx?: {
            props: ContainerProps<T>;
            expose(exposed: {}): void;
            attrs: any;
            slots: {
                "filters-top"?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
                "filters-bottom"?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
                data?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
            };
            emit: ContainerEmits;
        } | undefined;
    };
    export default _default_11;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DebugVisualizer.vue" {
    import { Data } from "cdh-vue-lib/components/uu-list/types";
    const _default_12: import("vue").DefineComponent<{
        data: {
            type: import("vue").PropType<Data<string | number>[]>;
            default: undefined;
        };
        isLoading: {
            type: import("vue").PropType<boolean>;
            required: true;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<Data<string | number>[]>;
            default: undefined;
        };
        isLoading: {
            type: import("vue").PropType<boolean>;
            required: true;
            default: boolean;
        };
    }>>, {
        data: Data<string | number>[];
        isLoading: boolean;
    }, {}>;
    export default _default_12;
}
declare module "cdh-vue-lib/components/uu-list/UUList.vue" {
    import { ContainerEmits } from "cdh-vue-lib/components/uu-list/types";
    import { ContainerProps, Data } from "cdh-vue-lib/components/uu-list/types";
    type NonOptionalField = "totalData" | "currentPage";
    type SelectiveContainerProps<T extends Data<string> | Data<number>> = Partial<ContainerProps<T>> & Pick<ContainerProps<T>, NonOptionalField>;
    interface Props<T extends Data<string> | Data<number>> extends SelectiveContainerProps<T> {
        container?: "default" | "sidebar";
    }
    const _default_13: <T extends Data<string> | Data<number>>(__VLS_props: Props<T> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
        props: Props<T>;
        expose(exposed: {}): void;
        attrs: any;
        slots: {
            data?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-top"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-bottom"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
        };
        emit: ContainerEmits;
    }, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
        props: Props<T>;
        expose(exposed: {}): void;
        attrs: any;
        slots: {
            data?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-top"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-bottom"?(_: {
                data: T[] | undefined;
                isLoading: boolean;
            }): any;
        };
        emit: ContainerEmits;
    }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> & {
        __ctx?: {
            props: Props<T>;
            expose(exposed: {}): void;
            attrs: any;
            slots: {
                data?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
                "filters-top"?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
                "filters-bottom"?(_: {
                    data: T[] | undefined;
                    isLoading: boolean;
                }): any;
            };
            emit: ContainerEmits;
        } | undefined;
    };
    export default _default_13;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/Colums/DDVString.vue" {
    import { DDCListData, DDCString } from "cdh-vue-lib/components/uu-list/types";
    const _default_14: import("vue").DefineComponent<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCString>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCString>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_14;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/Colums/DDVDate.vue" {
    import { DDCListData, DDCDate } from "cdh-vue-lib/components/uu-list/types";
    const _default_15: import("vue").DefineComponent<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCDate>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCDate>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_15;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/Colums/DDVButton.vue" {
    import { DDCListData, DDCButton } from "cdh-vue-lib/components/uu-list/types";
    const _default_16: import("vue").DefineComponent<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCButton>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCButton>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_16;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/Colums/DDVLink.vue" {
    import { DDCListData, DDCLink } from "cdh-vue-lib/components/uu-list/types";
    const _default_17: import("vue").DefineComponent<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCLink>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCLink>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_17;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/Colums/DDVHTML.vue" {
    import { DDCListData, DDCHTML } from "cdh-vue-lib/components/uu-list/types";
    const _default_18: import("vue").DefineComponent<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCHTML>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCHTML>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_18;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/Colums/DDVActions.vue" {
    import { DDCListData, DDCActions } from "cdh-vue-lib/components/uu-list/types";
    const _default_19: import("vue").DefineComponent<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCActions>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DDCActions>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_19;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/DDVColumn.vue" {
    import { DDCListData, DataDefinedColumn } from "cdh-vue-lib/components/uu-list/types";
    const _default_20: import("vue").DefineComponent<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DataDefinedColumn>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        column: {
            type: import("vue").PropType<DataDefinedColumn>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_20;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/DDVRow.vue" {
    import { DDCListData, DataDefinedColumn as DDC } from "cdh-vue-lib/components/uu-list/types";
    const _default_21: import("vue").DefineComponent<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        columns: {
            type: import("vue").PropType<DDC[]>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: import("vue").PropType<DDCListData>;
            required: true;
        };
        columns: {
            type: import("vue").PropType<DDC[]>;
            required: true;
        };
    }>>, {}, {}>;
    export default _default_21;
}
declare module "cdh-vue-lib/components/uu-list/Vizualizers/DDV/DataDefinedVisualizer.vue" {
    import { DDCListData, DataDefinedColumn as DDC } from "cdh-vue-lib/components/uu-list/types";
    const _default_22: import("vue").DefineComponent<{
        data: {
            type: import("vue").PropType<DDCListData[] | null>;
            default: null;
        };
        isLoading: {
            type: import("vue").PropType<boolean>;
            required: true;
            default: boolean;
        };
        columns: {
            type: import("vue").PropType<DDC[]>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<DDCListData[] | null>;
            default: null;
        };
        isLoading: {
            type: import("vue").PropType<boolean>;
            required: true;
            default: boolean;
        };
        columns: {
            type: import("vue").PropType<DDC[]>;
            required: true;
        };
    }>>, {
        data: DDCListData[] | null;
        isLoading: boolean;
    }, {}>;
    export default _default_22;
}
declare module "cdh-vue-lib/components/uu-list/DSCList.vue" {
    import { DataDefinedColumn, FilterDefinition } from "cdh-vue-lib/components/uu-list/types";
    interface Config {
        dataUri: string;
        sortEnabled: boolean;
        sortOptions?: SortOption[];
        filtersEnabled: boolean;
        filters?: FilterDefinition[];
        pageSize: number;
        pageSizeOptions: number[];
        searchEnabled: boolean;
        columns: DataDefinedColumn[];
        container?: "default" | "sidebar";
    }
    interface SortOption {
        field: string;
        label: string;
    }
    const _default_23: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
        config: {
            type: import("vue").PropType<Config>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        config: {
            type: import("vue").PropType<Config>;
            required: true;
        };
    }>>, {}, {}>, {
        data?(_: {
            data: never[] | undefined;
            isLoading: boolean;
        }): any;
    }>;
    export default _default_23;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
declare module "cdh-vue-lib/components/uu-list/index" {
    import UUList from "cdh-vue-lib/components/uu-list/UUList.vue";
    import DSCList from "cdh-vue-lib/components/uu-list/DSCList.vue";
    import * as UUListTypes from "cdh-vue-lib/components/uu-list/types";
    export { UUList, UUListTypes, DSCList };
}
declare module "cdh-vue-lib/components" {
    export * from "cdh-vue-lib/components/bootstrap/index";
    export * from "cdh-vue-lib/components/uu-list/index";
}
declare module "cdh-vue-lib/index" {
    export * from "cdh-vue-lib/components";
    export * from "cdh-vue-lib/composables";
}
declare module "cdh-vue-lib" {
    export * from "cdh-vue-lib/index";
}
declare module "cdh-vue-lib/components/bootstrap/BSSelect.vue" {
    const _default_24: <T extends string | number>(__VLS_props: {
        options: [T, string][];
        modelValue: T;
        containerClasses?: string | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
        props: {
            options: [T, string][];
            modelValue: T;
            containerClasses?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: {
            (e: "update:modelValue", value: T): void;
            (e: "update:model-value", value: T): void;
        };
    }, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
        props: {
            options: [T, string][];
            modelValue: T;
            containerClasses?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: {
            (e: "update:modelValue", value: T): void;
            (e: "update:model-value", value: T): void;
        };
    }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> & {
        __ctx?: {
            props: {
                options: [T, string][];
                modelValue: T;
                containerClasses?: string | undefined;
            };
            expose(exposed: {}): void;
            attrs: any;
            slots: {};
            emit: {
                (e: "update:modelValue", value: T): void;
                (e: "update:model-value", value: T): void;
            };
        } | undefined;
    };
    export default _default_24;
}
declare module "cdh-vue-lib/components/bootstrap/BSMultiSelect.vue" {
    const _default_25: <T extends string | number>(__VLS_props: {
        options: [T, string][];
        modelValue: T[];
        containerClasses?: string | undefined;
        uniqueId?: string | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
        props: {
            options: [T, string][];
            modelValue: T[];
            containerClasses?: string | undefined;
            uniqueId?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: {
            (e: "update:modelValue", value: T[]): void;
            (e: "update:model-value", value: T[]): void;
        };
    }, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
        props: {
            options: [T, string][];
            modelValue: T[];
            containerClasses?: string | undefined;
            uniqueId?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: {
            (e: "update:modelValue", value: T[]): void;
            (e: "update:model-value", value: T[]): void;
        };
    }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> & {
        __ctx?: {
            props: {
                options: [T, string][];
                modelValue: T[];
                containerClasses?: string | undefined;
                uniqueId?: string | undefined;
            };
            expose(exposed: {}): void;
            attrs: any;
            slots: {};
            emit: {
                (e: "update:modelValue", value: T[]): void;
                (e: "update:model-value", value: T[]): void;
            };
        } | undefined;
    };
    export default _default_25;
}
declare module "cdh-vue-lib/components/bootstrap/BSPagination.vue" {
    const _default_26: import("vue").DefineComponent<{
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
    export default _default_26;
}
declare module "cdh-vue-lib/components/bootstrap/BSRadioSelect.vue" {
    const _default_27: <T extends string | number>(__VLS_props: {
        options: [T, string][];
        modelValue: T;
        containerClasses?: string | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
        props: {
            options: [T, string][];
            modelValue: T;
            containerClasses?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: {
            (e: "update:modelValue", value: T): void;
            (e: "update:model-value", value: T): void;
        };
    }, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
        props: {
            options: [T, string][];
            modelValue: T;
            containerClasses?: string | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {};
        emit: {
            (e: "update:modelValue", value: T): void;
            (e: "update:model-value", value: T): void;
        };
    }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> & {
        __ctx?: {
            props: {
                options: [T, string][];
                modelValue: T;
                containerClasses?: string | undefined;
            };
            expose(exposed: {}): void;
            attrs: any;
            slots: {};
            emit: {
                (e: "update:modelValue", value: T): void;
                (e: "update:model-value", value: T): void;
            };
        } | undefined;
    };
    export default _default_27;
}
declare module "cdh-vue-lib/components/bootstrap/BSSidebar.vue" {
    const _default_28: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
    export default _default_28;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
declare module "cdh-vue-lib/components/bootstrap/index" {
    import BSButton from "cdh-vue-lib/components/bootstrap/BSButton.vue";
    import BSCard from "cdh-vue-lib/components/bootstrap/BSCard.vue";
    import BSDropdown from "cdh-vue-lib/components/bootstrap/BSDropdown.vue";
    import BSDropdownMultiSelect from "cdh-vue-lib/components/bootstrap/BSDropdownMultiSelect.vue";
    import BSIcon from "cdh-vue-lib/components/bootstrap/BSIcon.vue";
    import BSSelect from "cdh-vue-lib/components/bootstrap/BSSelect.vue";
    import BSMultiSelect from "cdh-vue-lib/components/bootstrap/BSMultiSelect.vue";
    import BSPagination from "cdh-vue-lib/components/bootstrap/BSPagination.vue";
    import BSRadioSelect from "cdh-vue-lib/components/bootstrap/BSRadioSelect.vue";
    import BSSidebar from "cdh-vue-lib/components/bootstrap/BSSidebar.vue";
    export { BSButton, BSCard, BSDropdown, BSDropdownMultiSelect, BSIcon, BSSelect, BSMultiSelect, BSPagination, BSRadioSelect, BSSidebar, };
}
declare module "cdh-vue-lib/components/bootstrap/BSDropdown.vue" {
    const _default_29: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
    export default _default_29;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
declare module "cdh-vue-lib/components/bootstrap/BSModal.vue" {
    const _default_30: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
    }>> & {
        onHidden?: (() => any) | undefined;
        onShown?: (() => any) | undefined;
        "onClose-clicked"?: (() => any) | undefined;
    }, {
        id: string | null;
        size: "small" | "large" | "default" | "extra-large";
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
    export default _default_30;
    type __VLS_WithTemplateSlots<T, S> = T & {
        new (): {
            $slots: S;
        };
    };
}
//# sourceMappingURL=index.d.ts.map
