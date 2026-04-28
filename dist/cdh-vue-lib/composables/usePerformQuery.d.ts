import type { OperationVariables, TypedDocumentNode } from "@apollo/client";
import type { Ref } from "vue";
import type { OptionsParameter, VariablesParameter } from "@vue/apollo-composable/dist/useQuery";
interface PerformQueryInputWithVariables<Query, Variables extends OperationVariables> {
    queryDocument: TypedDocumentNode<Query, Variables>;
    errorMessage?: string;
    variables: VariablesParameter<Variables>;
    options?: OptionsParameter<Query, Variables>;
}
interface PerformQueryInputWithoutVariables<Query> {
    queryDocument: TypedDocumentNode<Query, Record<string, never>>;
    errorMessage?: string;
    options?: OptionsParameter<Query, Record<string, never>>;
}
type PerformQueryInput<Query, Variables extends OperationVariables> = PerformQueryInputWithVariables<Query, Variables> | PerformQueryInputWithoutVariables<Query>;
interface PerformQueryReturn<Query, Variables extends OperationVariables> {
    result: Ref<Query | undefined>;
    loading: Ref<boolean>;
    variables: Ref<Variables | undefined>;
}
/**
 * A wrapper around Apollo's `useQuery` hook that takes care of error handling.
 * @template Query - The expected shape of the query result.
 * @template Variables - The expected shape of the query variables.
 * @param {PerformQueryInput<Query, Variables>} input - An object containing the query document, error message, and variables.
 * @returns {PerformQueryReturn<Query>} An object containing the query result and loading state.
 */
declare function usePerformQuery<Query, Variables extends OperationVariables>(input: PerformQueryInput<Query, Variables>): PerformQueryReturn<Query, Variables>;
export { usePerformQuery };
//# sourceMappingURL=usePerformQuery.d.ts.map