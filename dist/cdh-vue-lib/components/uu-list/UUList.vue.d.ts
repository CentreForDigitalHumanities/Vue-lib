import type { ContainerEmits } from "@/cdh-vue-lib/components/uu-list/types";
import type { ContainerProps, Data } from "@/cdh-vue-lib/components/uu-list/types";
type NonOptionalField = "totalData" | "currentPage";
type SelectiveContainerProps<T extends Data<string> | Data<number>> = Partial<ContainerProps<T>> & Pick<ContainerProps<T>, NonOptionalField>;
interface Props<T extends Data<string> | Data<number>> extends SelectiveContainerProps<T> {
    container?: "default" | "sidebar";
}
declare const _default: <T extends Data<string> | Data<number>>(__VLS_props: Props<T> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
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
export default _default;
//# sourceMappingURL=UUList.vue.d.ts.map