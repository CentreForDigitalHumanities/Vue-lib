import type { Data, FilterDefinition, SortOption, GraphQLListData, GraphQLListVariables } from "./types";
import type { TypedDocumentNode, WatchQueryFetchPolicy } from "@apollo/client";
import { type UnwrapNestedRefs } from "vue";
export interface Props<TResult = unknown, Variables extends GraphQLListVariables = GraphQLListVariables, PageData extends GraphQLListData<Data<string>> = GraphQLListData<Data<string>>> {
    queryDocument: TypedDocumentNode<TResult, Variables>;
    variables?: GraphQLListVariables;
    orderingOptions?: SortOption[];
    dataMapper: (result: TResult) => PageData | null | undefined;
    container?: "default" | "sidebar";
    showFilters?: boolean;
    filters?: FilterDefinition[];
    fetchPolicy?: WatchQueryFetchPolicy;
}
declare const _default: <PageData extends GraphQLListData<Data<string>>, TResult, Variables extends GraphQLListVariables>(__VLS_props: Props<TResult, Variables, PageData> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: Props<TResult, Variables, PageData>;
    expose(exposed: {}): void;
    attrs: any;
    slots: {
        data?(_: {
            data: NonNullable<PageData["results"][0]>[] | undefined;
            isLoading: boolean;
        }): any;
        "filters-top"?(_: {
            data: NonNullable<PageData["results"][0]>[] | undefined;
            isLoading: boolean;
        }): any;
        "filters-bottom"?(_: {
            data: NonNullable<PageData["results"][0]>[] | undefined;
            isLoading: boolean;
        }): any;
    };
    emit: (e: "update:variables", value: UnwrapNestedRefs<GraphQLListVariables>) => void;
}, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
    props: Props<TResult, Variables, PageData>;
    expose(exposed: {}): void;
    attrs: any;
    slots: {
        data?(_: {
            data: NonNullable<PageData["results"][0]>[] | undefined;
            isLoading: boolean;
        }): any;
        "filters-top"?(_: {
            data: NonNullable<PageData["results"][0]>[] | undefined;
            isLoading: boolean;
        }): any;
        "filters-bottom"?(_: {
            data: NonNullable<PageData["results"][0]>[] | undefined;
            isLoading: boolean;
        }): any;
    };
    emit: (e: "update:variables", value: UnwrapNestedRefs<GraphQLListVariables>) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: Props<TResult, Variables, PageData>;
        expose(exposed: {}): void;
        attrs: any;
        slots: {
            data?(_: {
                data: NonNullable<PageData["results"][0]>[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-top"?(_: {
                data: NonNullable<PageData["results"][0]>[] | undefined;
                isLoading: boolean;
            }): any;
            "filters-bottom"?(_: {
                data: NonNullable<PageData["results"][0]>[] | undefined;
                isLoading: boolean;
            }): any;
        };
        emit: (e: "update:variables", value: UnwrapNestedRefs<GraphQLListVariables>) => void;
    } | undefined;
};
export default _default;
//# sourceMappingURL=GraphQLList.vue.d.ts.map