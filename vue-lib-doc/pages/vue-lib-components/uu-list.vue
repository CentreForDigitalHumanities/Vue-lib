<script lang="ts" setup>
import { UUList } from "cdh-vue-lib";
import type { UUListTypes } from "cdh-vue-lib";
import { ref, watch } from "vue";
import EmitTable, { type EmitDefinition } from "~/components/EmitTable.vue";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";
import { fetchData, pokemons, type Pokemon } from "~/shared/mockData";

const sampleData = ref<Pokemon[]>(pokemons);

const shownData = ref<Pokemon[]>(sampleData.value.slice(0, 5));
const totalItems = ref<number>(sampleData.value.length);

const currentPage = ref(1);
const pageSize = ref(5);
const search = ref("");
const currentSort = ref("name");
const filterValues = ref<UUListTypes.FilterValues>({});

const isLoading = ref(false);

const sortOptions = ref<UUListTypes.SortOption[]>([
    { field: "name", label: "Name (Asc)" },
    { field: "type", label: "Type (Asc)" },
    { field: "height", label: "Height (Asc)" },
]);

const filters = ref<UUListTypes.FilterDefinition[]>([
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

watch(
    [currentPage, pageSize, search, currentSort, filterValues],
    () => {
        clearTimeout(loadingTimer.value);
        shownData.value = [];
        isLoading.value = true;
        loadingTimer.value = window.setTimeout(() => {
            const results = fetchData({
                currentPage: currentPage.value,
                pageSize: pageSize.value,
                search: search.value,
                sortString: currentSort.value,
                filters: filterValues.value,
                data: sampleData.value,
            });
            totalItems.value = results.totalItems;
            shownData.value = results.shownData;
            isLoading.value = false;
        }, 1000);
    },
    { deep: true },
);

const propDefinitions: PropDefinition[] = [
    {
        name: "container",
        type: '"default" | "sidebar"',
        required: false,
        defaultValue: '"default"',
        description:
            "Specifies the layout container to use. Can be 'default' or 'sidebar'.",
    },
    {
        name: "data",
        type: "T[] (where T extends Data<string | number>)",
        required: true,
        defaultValue: "[]",
        description:
            "The array of data items to display. Each item must have an 'id' property.",
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
                The <code>UUList</code> component is a versatile list rendering
                tool designed to handle pagination, sorting, searching, and
                filtering of data. It is generic and requires data items to have
                an <code>id</code> property (<code
                    >T extends Data&lt;string&gt; | Data&lt;number&gt;</code
                >). It can use different underlying container components like
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
                    <UUList
                        v-model:current-page="currentPage"
                        v-model:page-size="pageSize"
                        v-model:search="search"
                        v-model:current-sort="currentSort"
                        v-model:filter-values="filterValues"
                        :data="shownData"
                        :total-data="totalItems"
                        :search-enabled="true"
                        :sort-enabled="true"
                        :sort-options="sortOptions"
                        :filters-enabled="true"
                        :filters="filters"
                        :is-loading="isLoading"
                        :page-size-options="[3, 5, 10]"
                    >
                        <template
                            #data="{ data }: { data: Pokemon[] | undefined }"
                        >
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Types</th>
                                        <th>Height</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="isLoading">
                                        <td colspan="4" class="text-center">
                                            Loading...
                                        </td>
                                    </tr>
                                    <tr
                                        v-else-if="
                                            !isLoading && data?.length === 0
                                        "
                                    >
                                        <td colspan="4" class="text-center">
                                            No results found.
                                        </td>
                                    </tr>
                                    <template v-else>
                                        <tr v-for="item in data" :key="item.id">
                                            <td>{{ item.id }}</td>
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.type.join(", ") }}</td>
                                            <td>{{ item.height }}</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </template>
                    </UUList>
                </div>
                <div class="card-footer">
                    <p><strong>Current State:</strong></p>
                    <ul class="list-unstyled">
                        <li>Page: {{ currentPage }}</li>
                        <li>Page Size: {{ pageSize }}</li>
                        <li>Search: '{{ search }}'</li>
                        <li>Sort: {{ currentSort }}</li>
                        <li>
                            Filters:
                            <pre>{{
                                JSON.stringify(filterValues, null, 2)
                            }}</pre>
                        </li>
                    </ul>
                </div>
            </div>

            <h4 class="mt-4">Code for the Example Above</h4>
            <pre v-pre class="code-example bg-light p-3 rounded">
<code>&lt;script lang="ts" setup&gt;

interface MyDataType extends UUListTypes.Data&lt;number&gt; {
    // id is inherited from Data&lt;number&gt;
    name: string;
    category: string;
    value: number;
    date: string;
}

const sampleData = ref&lt;MyDataType[]&gt;([
    { id: 1, name: "Apple", category: "Fruit", value: 10, date: "2023-01-15" },
    ...
]);

const shownData = ref&lt;MyDataType[]&gt;(sampleData.value.slice(0, 5));
const totalItems = ref&lt;number&gt;(sampleData.value.length);

const currentPage = ref(1);
const pageSize = ref(5);
const search = ref("");
const currentSort = ref("name");
const filterValues = ref&lt;UUListTypes.FilterValues&gt;({});

const isLoading = ref(false);

const sortOptions = ref&lt;UUListTypes.SortOption[]&gt;([
    { field: "name", label: "Name (Asc)" },
    { field: "category", label: "Category (Asc)" },
    { field: "value", label: "Value (Asc)" },
]);

const filters = ref&lt;UUListTypes.FilterDefinition[]&gt;([
    {
        field: "category",
        label: "Category",
        type: "checkbox",
        options: [
            ["Fruit", "Fruit"],
            ["Vegetable", "Vegetable"],
            ["Meat", "Meat"],
            ["Fish", "Fish"],
        ],
        initial: null,
    },
    {
        field: "value",
        label: "Value",
        type: "radio",
        options: [
            [10, "10"],
            [20, "20"],
            [50, "50"],
            [100, "100"],
        ],
        initial: 10,
    },
    {
        field: "date",
        label: "Date",
        type: "date",
        initial: null,
    },
]);

function fetchData(): void {
    // Use the variables above to fetch your data from an API.
}

&lt;UUList
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    v-model:search="search"
    v-model:current-sort="currentSort"
    v-model:filter-values="filterValues"
    :data="shownData"
    :total-data="totalItems"
    :search-enabled="true"
    :sort-enabled="true"
    :sort-options="sortOptions"
    :filters-enabled="true"
    :filters="filters"
    :is-loading="isLoading"
    :page-size-options="[3, 5, 10]"
&gt;
    &lt;template #data="{ data }: { data: Pokemon[] | undefined }"&gt;
        &lt;table class="table table-hover table-striped"&gt;
            &lt;thead&gt;
                &lt;tr&gt;
                    &lt;th&gt;Name&lt;/th&gt;
                    &lt;th&gt;Category&lt;/th&gt;
                    &lt;th&gt;Value&lt;/th&gt;
                    &lt;th&gt;Date&lt;/th&gt;
                &lt;/tr&gt;
            &lt;/thead&gt;
            &lt;tbody&gt;
                &lt;tr v-for="item in data" :key="item.id"&gt;
                    &lt;td&gt;{{ item.name }}&lt;/td&gt;
                    &lt;td&gt;{{ item.category }}&lt;/td&gt;
                    &lt;td&gt;{{ item.value }}&lt;/td&gt;
                    &lt;td&gt;{{ item.date }}&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr v-if="isLoading"&gt;
                    &lt;td colspan="4" class="text-center"&gt;
                        Loading...
                    &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr v-if="!isLoading && data?.length === 0"&gt;
                    &lt;td colspan="4" class="text-center"&gt;
                        No results found.
                    &lt;/td&gt;
                &lt;/tr&gt;
            &lt;/tbody&gt;
        &lt;/table&gt;
    &lt;/template&gt;
&lt;/UUList&gt;</code></pre>
        </section>
    </div>
</template>
