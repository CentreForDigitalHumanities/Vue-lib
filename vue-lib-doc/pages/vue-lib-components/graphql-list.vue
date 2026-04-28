<script lang="ts" setup>
import { GraphQLList } from "cdh-vue-lib";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ref } from "vue";
import EmitTable, { type EmitDefinition } from "~/components/EmitTable.vue";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";
import { gql, type TypedDocumentNode } from "@apollo/client";

// Define our types
interface Pokemon {
  id: string;
  name: string;
  type: string[];
  height: number;
}

interface PageInfo {
  count: number;
}

interface PokemonConnection {
  results: Pokemon[];
  pageInfo: PageInfo;
}

interface PokemonQueryResult {
  pokemons: PokemonConnection;
}

interface PokemonQueryVariables {
  offset?: number;
  limit?: number;
  search?: string;
  ordering?: string;
  type?: string[];
}

// Define the GraphQL schema
const typeDefs = /* GraphQL */ `
  type Pokemon {
    id: ID!
    name: String!
    type: [String!]!
    height: Int!
  }

  type PageInfo {
    count: Int!
  }

  type PokemonConnection {
    results: [Pokemon!]!
    pageInfo: PageInfo!
  }

  type Query {
    pokemons(
      offset: Int
      limit: Int
      search: String
      ordering: String
      type: [String]
    ): PokemonConnection!
  }
`

// Create the executable schema with mocks
const schema = makeExecutableSchema({ typeDefs });
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks: {
    Pokemon: () => ({
      id: () => Math.random().toString(36).substr(2, 9),
      name: () => ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle'][Math.floor(Math.random() * 4)],
      type: () => [['Electric'], ['Fire', 'Flying'], ['Grass', 'Poison'], ['Water']][Math.floor(Math.random() * 4)],
      height: () => Math.floor(Math.random() * 20) + 1
    }),
    PageInfo: () => ({
      count: () => 150
    })
  }
});

// Define our query
const GET_POKEMONS: TypedDocumentNode<PokemonQueryResult, PokemonQueryVariables> = gql`
  query GetPokemons(
    $offset: Int
    $limit: Int
    $search: String
    $ordering: String
    $type: [String]
  ) {
    pokemons(offset: $offset, limit: $limit, search: $search, ordering: $ordering, type: $type) {
      results {
        id
        name
        type
        height
      }
      pageInfo {
        count
      }
    }
  }
`;

// Component state
const variables = ref<PokemonQueryVariables>({
  offset: 0,
  limit: 10
});

// Data mapper function
const dataMapper = (result: PokemonQueryResult) => {
  return result.pokemons;
};

// Component configuration
const sortOptions = ref([
    { field: "name", label: "Name (A-Z)" },
    { field: "-name", label: "Name (Z-A)" },
    { field: "type", label: "Type (A-Z)" },
    { field: "-type", label: "Type (Z-A)" },
    { field: "height", label: "Height (Low to High)" },
    { field: "-height", label: "Height (High to Low)" }
]);

const filters = ref([
    {
        field: "type",
        label: "Type",
        type: "checkbox",
        options: [
            ["Grass", "Grass"],
            ["Poison", "Poison"],
            ["Fire", "Fire"],
            ["Water", "Water"],
            ["Electric", "Electric"],
            ["Normal", "Normal"],
            ["Flying", "Flying"],
        ],
        initial: null,
    },
    {
        field: "height",
        label: "Height",
        type: "radio",
        options: [
            [3, "3"],
            [4, "4"],
            [5, "5"],
            [6, "6"],
            [7, "7"],
        ],
        initial: 3,
    },
]);

const loadingTimer = ref<number | undefined>(undefined);

const propDefinitions: PropDefinition[] = [
    {
        name: "querydocument",
        type: "T[] (where T extends Data<string | number>)",
        required: true,
        defaultValue: "[]",
        description:
            "The array of data items to display. Each item must have an 'id' property.",
    },
    {
        name: "container",
        type: '"default" | "sidebar"',
        required: false,
        defaultValue: '"default"',
        description:
            "Specifies the layout container to use. Can be 'default' or 'sidebar'.",
    },
    {
        name: "totalData",
        type: "number",
        required: true,
        description: "Total number of items available for pagination.",
    },
    {
        name: "currentPage",
        type: "number",
        required: true,
        description: "Current active page number.",
    },
    {
        name: "pageSize",
        type: "number",
        required: true,
        description: "Number of items to display per page.",
    },
    {
        name: "isLoading",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Indicates if data is currently being loaded.",
    },
    {
        name: "searchEnabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Enables the search input functionality.",
    },
    {
        name: "search",
        type: "string",
        required: false,
        defaultValue: '""',
        description: "Current search query.",
    },
    {
        name: "sortEnabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Enables the sorting functionality.",
    },
    {
        name: "currentSort",
        type: "string",
        required: false,
        defaultValue: '""',
        description:
            "Current sort criteria (e.g., 'fieldName_asc' or 'fieldName_desc').",
    },
    {
        name: "sortOptions",
        type: "SortOption[]",
        required: false,
        defaultValue: "[]",
        description:
            "Array of available sort options. Each option should be an object with two properties: 'field' and 'label'.",
    },
    {
        name: "pageSizeOptions",
        type: "number[]",
        required: false,
        defaultValue: "[10, 25, 50]",
        description: "Array of available page size options for pagination.",
    },
    {
        name: "filtersEnabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Enables the filtering functionality.",
    },
    {
        name: "filters",
        type: "FilterDefinition[]",
        required: false,
        defaultValue: "undefined",
        description:
            "Array of filter definitions. Each filter should have a 'field', 'label', and 'type'.",
    },
    {
        name: "filterValues",
        type: "FilterValues (Record<string, string | number | null | string[] | number[]>)",
        required: false,
        defaultValue: "undefined",
        description:
            "Current filter values. Used with v-model for two-way binding.",
    },
];

const emitDefinitions: EmitDefinition[] = [
    {
        eventName: "update:currentPage",
        payload: "number",
        description: "Emitted when the current page changes.",
    },
    {
        eventName: "update:search",
        payload: "string",
        description: "Emitted when the search query changes.",
    },
    {
        eventName: "update:currentSort",
        payload: "string",
        description: "Emitted when the sort criteria changes.",
    },
    {
        eventName: "update:pageSize",
        payload: "number",
        description: "Emitted when the page size changes.",
    },
    {
        eventName: "update:filter-values",
        payload: "FilterValues",
        description: "Emitted when filter values change.",
    },
];
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">UUList Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                <code>UUList</code> component is a versatile list rendering
                tool designed to handle pagination, sorting, searching, and
                filtering of data. It is generic and requires data items to have
                an <code>id</code> property (<code>T extends Data&lt;string&gt; | Data&lt;number&gt;</code>).
                It can use different underlying container components like
                "default" or "sidebar" for varied layouts.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Usage Notes</h3>
            <ul>
                <li>
                    Each item in the <code>data</code> array must have a unique
                    <code>id</code> property.
                </li>
                <li>
                    The component relies on parent-managed data operations. It
                    emits events for changes (e.g., page, sort, search, filter),
                    and expects the parent to provide updated data.
                </li>
                <li>
                    Due to a currently unresolved bug, the `data` prop on this
                    component's slots is not typed properly. For now, use
                    <a
                        href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        type assertions</a
                    >
                    to help the TypeScript compiler.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <PropTable :prop-defs="propDefinitions" />
            <p>
                Type definitions like <code>Data</code>,
                <code>SortOption</code>, <code>FilterDefinition</code>, and
                <code>FilterValues</code> are typically imported from
                <code>@/cdh-vue-lib/components/uu-list/types</code>.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Events</h3>
            <EmitTable :emit-defs="emitDefinitions" />
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>
            <p>
                Below is a basic example of how to use the
                <code>UUList</code> component.
            </p>

            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">Interactive UUList Example</h5>
                    <GraphQLList
                        v-model:variables="variables"
                        :query-document="GET_POKEMONS"
                        :data-mapper="dataMapper"
                        :ordering-options="sortOptions"
                        :filters="filters"
                        :fetch-policy="'cache-first'"
                    >
                        <template #data="{ data, isLoading }">
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Types</th>
                                        <th>Height</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="isLoading">
                                        <td colspan="3" class="text-center">
                                            Loading...
                                        </td>
                                    </tr>
                                    <tr v-else-if="!data?.length">
                                        <td colspan="3" class="text-center">
                                            No results found.
                                        </td>
                                    </tr>
                                    <template v-else>
                                        <tr v-for="pokemon in data" :key="pokemon.id">
                                            <td>{{ pokemon.name }}</td>
                                            <td>{{ pokemon.type.join(", ") }}</td>
                                            <td>{{ pokemon.height }}</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </template>
                    </GraphQLList>
                </div>
                <div class="card-footer">
                    <p><strong>Current GraphQL Variables:</strong></p>
                    <pre>{{ JSON.stringify(variables, null, 2) }}</pre>
                </div>
            </div>

            <h4 class="mt-4">Code Example</h4>
            &lt;pre v-pre class="code-example bg-light p-3 rounded"&gt;&lt;code&gt;
&lt;script lang="ts" setup&gt;
import { GraphQLList } from "cdh-vue-lib";
import type { TypedDocumentNode } from "@apollo/client";

// Define your types
interface Pokemon {
  id: string;
  name: string;
  type: string[];
  height: number;
}

interface PokemonQueryResult {
  pokemons: {
    results: Pokemon[];
    pageInfo: {
      count: number;
    };
  };
}

interface PokemonQueryVariables {
  offset?: number;
  limit?: number;
  search?: string;
  ordering?: string;
  type?: string[];
}

// Define your GraphQL query
const GET_POKEMONS: TypedDocumentNode&lt;PokemonQueryResult, PokemonQueryVariables&gt; = {
  kind: "Document",
  definitions: [/* ...query AST definition... */]
};

// Component state
const variables = ref&lt;PokemonQueryVariables&gt;({
  offset: 0,
  limit: 10
});

// Data mapper function
const dataMapper = (result: PokemonQueryResult) => {
  return result.pokemons;
};

// Define sorting options
const sortOptions = ref([
  { field: "name", label: "Name (A-Z)" },
  { field: "-name", label: "Name (Z-A)" },
  { field: "type", label: "Type (A-Z)" },
  { field: "-type", label: "Type (Z-A)" },
  { field: "height", label: "Height (Low to High)" },
  { field: "-height", label: "Height (High to Low)" }
]);

// Define filters
const filters = ref([
  {
    field: "type",
    label: "Type",
    type: "checkbox",
    options: [
      ["Fire", "Fire"],
      ["Water", "Water"],
      ["Grass", "Grass"],
      ["Electric", "Electric"]
    ],
    initial: null
  }
]);
&lt;/script&gt;&lt;/code&gt;
&lt;/pre&gt;

            &lt;h5 class="mt-4"&gt;Template Usage&lt;/h5&gt;
            &lt;pre v-pre class="code-example bg-light p-3 rounded"&gt;
&lt;code&gt;&lt;template&gt;
  &lt;GraphQLList
    v-model:variables="variables"
    :query-document="GET_POKEMONS"
    :data-mapper="dataMapper"
    :ordering-options="sortOptions"
    :filters="filters"
    :fetch-policy="'cache-first'"
  &gt;
    &lt;template #data="{ data, isLoading }"&gt;
      &lt;table class="table table-hover table-striped"&gt;
        &lt;thead&gt;
          &lt;tr&gt;
            &lt;th&gt;Name&lt;/th&gt;
            &lt;th&gt;Types&lt;/th&gt;
            &lt;th&gt;Height&lt;/th&gt;
          &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
          &lt;tr v-if="isLoading"&gt;
            &lt;td colspan="3" class="text-center"&gt;Loading...&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr v-else-if="!data?.length"&gt;
            &lt;td colspan="3" class="text-center"&gt;No results found.&lt;/td&gt;
          &lt;/tr&gt;
          &lt;template v-else&gt;
            &lt;tr v-for=&quot;pokemon in data&quot; :key=&quot;pokemon.id&quot;&gt;
              &lt;td&gt;&#123;&#123; pokemon.name &#125;&#125;&lt;/td&gt;
              &lt;td&gt;&#123;&#123; pokemon.type.join(&quot;, &quot;) &#125;&#125;&lt;/td&gt;
              &lt;td&gt;&#123;&#123; pokemon.height &#125;&#125;&lt;/td&gt;
            &lt;/tr&gt;
          &lt;/template&gt;
        &lt;/tbody&gt;
      &lt;/table&gt;
    &lt;/template&gt;
  &lt;/GraphQLList&gt;
&lt;/template&gt;&lt;/code&gt;
&lt;/pre&gt;
        </section>
    </div>
</template>