import type { ContainerEmits } from "@/cdh-vue-lib/components/uu-list/types";
import type { ContainerProps, Data } from "@/cdh-vue-lib/components/uu-list/types";
declare const _default: <T extends Data<string> | Data<number>>(__VLS_props: Partial<ContainerProps<T>> & Pick<ContainerProps<T>, "totalData" | "currentPage"> & {
    container?: "default" | "sidebar" | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: Partial<ContainerProps<T>> & Pick<ContainerProps<T>, "totalData" | "currentPage"> & {
        container?: "default" | "sidebar" | undefined;
    };
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
    props: Partial<ContainerProps<T>> & Pick<ContainerProps<T>, "totalData" | "currentPage"> & {
        container?: "default" | "sidebar" | undefined;
    };
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
        props: Partial<ContainerProps<T>> & Pick<ContainerProps<T>, "totalData" | "currentPage"> & {
            container?: "default" | "sidebar" | undefined;
        };
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
export default _default;
//# sourceMappingURL=UUList.vue.d.ts.map