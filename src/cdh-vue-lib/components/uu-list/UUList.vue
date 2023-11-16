<script lang="ts">
// Make a copy of the container props, mark all of them optional except for
// those we cannot provide a default for
// The root type barely has any optionals, to avoid dealing with missing values
// too much. Instead, we provide sensible defaults in this component, so the
// actual user of the component does not _have_ to define all
import { ContainerProps, Data } from "@/cdh-vue-lib/components/uu-list/types";

type NonOptionalField = "totalData" | "currentPage";
type SelectiveContainerProps<T extends Data<string> | Data<number>> = Partial<
    ContainerProps<T>
> &
    Pick<ContainerProps<T>, NonOptionalField>;

interface Props<T extends Data<string> | Data<number>>
    extends SelectiveContainerProps<T> {
    container?: "default" | "sidebar";
}
</script>

<script lang="ts" setup generic="T extends Data<string> | Data<number>">
import { computed } from "vue";
import Default from "./Containers/Default.vue";
import Sidebar from "./Containers/Sidebar.vue";
import DebugVisualizer from "@/cdh-vue-lib/components/uu-list/Vizualizers/DebugVisualizer.vue";
import { ContainerEmits } from "@/cdh-vue-lib/components/uu-list/types";

const props = withDefaults(defineProps<Props<T>>(), {
    // Provide defaults for all props the containers expect, but should not be
    // necessary.
    container: "default",
    isLoading: false,
    searchEnabled: false,
    search: "",
    sortEnabled: false,
    currentSort: "",
    sortOptions: () => [],
    pageSizeOptions: () => [10, 25, 50],
    pageSize: 10,
    filtersEnabled: false,
});
const emits = defineEmits<ContainerEmits>();

const containerComponent = computed(() => {
    switch (props.container) {
        case "sidebar":
            return Sidebar;
        default:
            return Default;
    }
});
</script>

<template>
    <component
        :is="containerComponent"
        :is-loading="isLoading"
        :data="data"
        :total-data="totalData"
        :search-enabled="searchEnabled"
        :search="search"
        :sort-enabled="sortEnabled"
        :current-sort="currentSort"
        :current-page="currentPage"
        :page-size-options="pageSizeOptions"
        :sort-options="sortOptions"
        :page-size="pageSize"
        :filters-enabled="filtersEnabled"
        :filters="filters"
        :filter-values="filterValues"
        @update:search="(value) => emits('update:search', value)"
        @update:current-sort="(value) => emits('update:current-sort', value)"
        @update:page-size="(value) => emits('update:page-size', value)"
        @update:current-page="(value) => emits('update:current-page', value)"
        @update:filter-values="(value) => emits('update:filter-values', value)"
    >
        <!-- Pass the data slot as a new slot -->
        <template #data="{ data, isLoading }">
            <slot name="data" :data="data" :is-loading="isLoading">
                <DebugVisualizer :data="data" :is-loading="isLoading" />
            </slot>
        </template>
        <!-- Pass the filter slots as a new slot -->
        <template #filters-top="{ data, isLoading }">
            <slot name="filters-top" :data="data" :is-loading="isLoading" />
        </template>
        <template #filters-bottom="{ data, isLoading }">
            <slot name="filters-bottom" :data="data" :is-loading="isLoading" />
        </template>
    </component>
</template>
