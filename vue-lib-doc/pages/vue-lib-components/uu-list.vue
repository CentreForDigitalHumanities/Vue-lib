<script lang="ts" setup>
import { UUList } from "cdh-vue-lib";
import type { UUListTypes } from "cdh-vue-lib";
import { ref, watch } from "vue";

interface MyDataType extends UUListTypes.Data<number> {
    // id is inherited from Data<number>
    name: string;
    category: string;
    value: number;
    date: string;
}

const sampleData = ref<MyDataType[]>([
    { id: 1, name: "Apple", category: "Fruit", value: 10, date: "2023-01-15" },
    {
        id: 2,
        name: "Broccoli",
        category: "Vegetable",
        value: 20,
        date: "2023-01-20",
    },
    {
        id: 3,
        name: "Chicken",
        category: "Meat",
        value: 150,
        date: "2023-02-01",
    },
    { id: 4, name: "Date", category: "Fruit", value: 5, date: "2023-02-10" },
    {
        id: 5,
        name: "Eggplant",
        category: "Vegetable",
        value: 25,
        date: "2023-02-15",
    },
    { id: 6, name: "Salmon", category: "Fish", value: 200, date: "2023-03-01" },
    {
        id: 7,
        name: "Beef",
        category: "Meat",
        value: 300,
        date: "2023-03-05",
    },
    { id: 8, name: "Orange", category: "Fruit", value: 15, date: "2023-03-10" },
    {
        id: 9,
        name: "Carrot",
        category: "Vegetable",
        value: 10,
        date: "2023-03-15",
    },
    { id: 10, name: "Tuna", category: "Fish", value: 250, date: "2023-04-01" },
]);

const shownData = ref<MyDataType[]>(sampleData.value.slice(0, 5));
const totalItems = ref<number>(sampleData.value.length);

const currentPage = ref(1);
const pageSize = ref(5);
const search = ref("");
const currentSort = ref("name");
const filterValues = ref<UUListTypes.FilterValues>({});

const isLoading = ref(false);

const sortOptions = ref<UUListTypes.SortOption[]>([
    { field: "name", label: "Name (Asc)" },
    { field: "category", label: "Category (Asc)" },
    { field: "value", label: "Value (Asc)" },
]);

const filters = ref<UUListTypes.FilterDefinition[]>([
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

const loadingTimer = ref<number | undefined>(undefined);

watch(
    [currentPage, pageSize, search, currentSort, filterValues],
    () => {
        clearTimeout(loadingTimer.value);
        shownData.value = [];
        isLoading.value = true;
        loadingTimer.value = window.setTimeout(() => {
            fetchData();
            isLoading.value = false;
        }, 1000);
    },
    { deep: true },
);

function fetchData(): void {
    const searched = searchData(sampleData.value);
    const filtered = filterData(searched);

    totalItems.value = filtered.length;

    const sorted = sortData(filtered);
    const paginated = paginateData(sorted);

    shownData.value = paginated;
}

function searchData(data: MyDataType[]): MyDataType[] {
    if (!search.value) {
        return data;
    }
    const lowerSearch = search.value.toLowerCase();
    return data.filter((item) => item.name.toLowerCase().includes(lowerSearch));
}

function filterData(data: MyDataType[]): MyDataType[] {
    return data.filter((item) => {
        return Object.entries(filterValues.value).every(([field, value]) => {
            if (!value) {
                return true;
            }
            if (Array.isArray(value)) {
                const itemValue = item[field as keyof MyDataType];
                if (value.length === 0) {
                    return true;
                }
                if (typeof itemValue === "string") {
                    return (value as string[]).includes(itemValue);
                } else if (typeof itemValue === "number") {
                    return (value as number[]).includes(itemValue);
                }
            } else {
                return item[field as keyof MyDataType] === value;
            }
        });
    });
}

function sortData(data: MyDataType[]): MyDataType[] {
    const [field, order] = currentSort.value.split("_") as [
        keyof MyDataType,
        "asc" | "desc",
    ];
    return data.sort((a, b) => {
        if (order === "asc") {
            return a[field] < b[field] ? 1 : -1;
        } else {
            return a[field] > b[field] ? 1 : -1;
        }
    });
}

function paginateData(data: MyDataType[]): MyDataType[] {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return data.slice(start, end);
}
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
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Prop</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Required</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>container</code></td>
                            <td><code>"default" | "sidebar"</code></td>
                            <td><code>"default"</code></td>
                            <td>No</td>
                            <td>Specifies the layout container to use.</td>
                        </tr>
                        <tr>
                            <td><code>data</code></td>
                            <td>
                                <code>T[]</code> (where
                                <code
                                    >T extends Data&lt;string | number&gt;</code
                                >)
                            </td>
                            <td><code>undefined</code></td>
                            <td>No</td>
                            <td>
                                Array of data items to display. Each item must
                                have an <code>id</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>totalData</code></td>
                            <td><code>number</code></td>
                            <td>-</td>
                            <td>Yes</td>
                            <td>
                                Total number of items available (for
                                pagination).
                            </td>
                        </tr>
                        <tr>
                            <td><code>currentPage</code></td>
                            <td><code>number</code></td>
                            <td>-</td>
                            <td>Yes</td>
                            <td>
                                Current active page number. Supports
                                <code>v-model:currentPage</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>isLoading</code></td>
                            <td><code>boolean</code></td>
                            <td><code>false</code></td>
                            <td>No</td>
                            <td>
                                Indicates if data is currently being loaded.
                            </td>
                        </tr>
                        <tr>
                            <td><code>searchEnabled</code></td>
                            <td><code>boolean</code></td>
                            <td><code>false</code></td>
                            <td>No</td>
                            <td>Enables the search input functionality.</td>
                        </tr>
                        <tr>
                            <td><code>search</code></td>
                            <td><code>string</code></td>
                            <td><code>""</code></td>
                            <td>No</td>
                            <td>
                                Current search query. Supports
                                <code>v-model:search</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>sortEnabled</code></td>
                            <td><code>boolean</code></td>
                            <td><code>false</code></td>
                            <td>No</td>
                            <td>Enables the sorting functionality.</td>
                        </tr>
                        <tr>
                            <td><code>currentSort</code></td>
                            <td><code>string</code></td>
                            <td><code>""</code></td>
                            <td>No</td>
                            <td>
                                Current sort criteria (e.g., "fieldName_asc" or
                                "fieldName_desc"). Supports
                                <code>v-model:currentSort</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>sortOptions</code></td>
                            <td><code>SortOption[]</code></td>
                            <td><code>[]</code></td>
                            <td>No</td>
                            <td>
                                Array of available sort options.
                                <code
                                    >SortOption: { field: string; label: string;
                                    }</code
                                >.
                            </td>
                        </tr>
                        <tr>
                            <td><code>pageSize</code></td>
                            <td><code>number</code></td>
                            <td><code>10</code></td>
                            <td>No</td>
                            <td>
                                Number of items per page. Supports
                                <code>v-model:pageSize</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>pageSizeOptions</code></td>
                            <td><code>number[]</code></td>
                            <td><code>[10, 25, 50]</code></td>
                            <td>No</td>
                            <td>Array of available page size options.</td>
                        </tr>
                        <tr>
                            <td><code>filtersEnabled</code></td>
                            <td><code>boolean</code></td>
                            <td><code>false</code></td>
                            <td>No</td>
                            <td>Enables the filtering functionality.</td>
                        </tr>
                        <tr>
                            <td><code>filters</code></td>
                            <td><code>FilterDefinition[]</code></td>
                            <td><code>undefined</code></td>
                            <td>No</td>
                            <td>
                                Array of filter definitions. See
                                <code>FilterDefinition</code> type for
                                structure.
                            </td>
                        </tr>
                        <tr>
                            <td><code>filterValues</code></td>
                            <td><code>FilterValues</code></td>
                            <td><code>undefined</code></td>
                            <td>No</td>
                            <td>
                                Current filter values. Supports
                                <code>v-model:filterValues</code>.
                                <code
                                    >FilterValues: Record&lt;string, string |
                                    number | null | string[] |
                                    number[]&gt;</code
                                >.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                Type definitions like <code>Data</code>,
                <code>SortOption</code>, <code>FilterDefinition</code>, and
                <code>FilterValues</code> are typically imported from
                <code>@/cdh-vue-lib/components/uu-list/types</code>.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Events</h3>
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Payload Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>update:currentPage</code></td>
                            <td><code>number</code></td>
                            <td>
                                Emitted when the current page changes. Used with
                                <code>v-model:currentPage</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>update:search</code></td>
                            <td><code>string</code></td>
                            <td>
                                Emitted when the search query changes. Used with
                                <code>v-model:search</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>update:currentSort</code></td>
                            <td><code>string</code></td>
                            <td>
                                Emitted when the sort criteria changes. Used
                                with <code>v-model:currentSort</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>update:pageSize</code></td>
                            <td><code>number</code></td>
                            <td>
                                Emitted when the page size changes. Used with
                                <code>v-model:pageSize</code>.
                            </td>
                        </tr>
                        <tr>
                            <td><code>update:filter-values</code></td>
                            <td><code>FilterValues</code></td>
                            <td>
                                Emitted when filter values change. Used with
                                <code>v-model:filterValues</code>.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                        <template #data="{ data }">
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Value</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in data" :key="item.id">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.category }}</td>
                                        <td>{{ item.value }}</td>
                                        <td>{{ item.date }}</td>
                                    </tr>
                                    <tr v-if="isLoading">
                                        <td colspan="4" class="text-center">
                                            Loading...
                                        </td>
                                    </tr>
                                    <tr v-if="!isLoading && data?.length === 0">
                                        <td colspan="4" class="text-center">
                                            No results found.
                                        </td>
                                    </tr>
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
    &lt;template #data="{ data }"&gt;
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
&lt;/UUList&gt;
</code>
            </pre>
        </section>
    </div>
</template>
