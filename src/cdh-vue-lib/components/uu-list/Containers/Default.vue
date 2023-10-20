<script lang="ts" setup>
import { computed } from "vue";
import { BSPagination } from "../../bootstrap";
import FilterBar from "../Filters/FilterBar.vue";
import { ContainerEmits, ContainerProps } from "../types";
import SearchControl from "../Controls/SearchControl.vue";
import PageSizeControl from "../Controls/PageSizeControl.vue";
import SortControl from "../Controls/SortControl.vue";
import SearchResultNum from "@/cdh-vue-lib/components/uu-list/Controls/SearchResultNum.vue";

const props = defineProps<ContainerProps>();

const emits = defineEmits<ContainerEmits>();

const totalPages = computed(() => {
    return Math.ceil(props.totalData / props.pageSize);
});
</script>

<template>
    <div class="uu-container">
        <div class="uu-list">
            <div class="uu-list-controls">
                <SearchControl
                    v-if="searchEnabled"
                    :model-value="search"
                    class="uu-list-search-control"
                    @update:model-value="
                        (value) => $emit('update:search', value)
                    "
                />
                <SearchResultNum
                    :search-query="search"
                    :page-num="data?.length ?? 0"
                    :total-num="totalData"
                    class="uu-list-search-text-control"
                />
                <div v-if="sortEnabled" class="uu-list-order-control">
                    <SortControl
                        :current-sort="currentSort"
                        :sort-options="sortOptions"
                        @update:current-sort="
                            (value) => emits('update:current-sort', value)
                        "
                    />
                </div>
                <div class="uu-list-page-size-control">
                    <PageSizeControl
                        :page-size-options="pageSizeOptions"
                        :page-size="pageSize"
                        @update:page-size="
                            (value) => emits('update:page-size', value)
                        "
                    />
                </div>
            </div>
            <div v-if="filtersEnabled" class="uu-list-filters">
                <FilterBar
                    :filters="filters"
                    :filter-values="filterValues"
                    @update:filter-values="
                        (val) => $emit('update:filter-values', val)
                    "
                />
            </div>
            <div class="uu-list-content">
                <slot name="data" :data="data" :is-loading="isLoading" />

                <div>
                    <BSPagination
                        v-if="data"
                        :max-pages="totalPages"
                        :currentpage="currentPage"
                        @change-page="
                            (val) => $emit('update:current-page', val)
                        "
                    />
                </div>
            </div>
        </div>
    </div>
</template>
