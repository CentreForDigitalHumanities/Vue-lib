import type { ContainerEmits, ContainerProps, Data } from "../types";
declare const _default: <T extends Data<string> | Data<number>>(__VLS_props: ContainerProps<T> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
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
export default _default;
//# sourceMappingURL=Default.vue.d.ts.map