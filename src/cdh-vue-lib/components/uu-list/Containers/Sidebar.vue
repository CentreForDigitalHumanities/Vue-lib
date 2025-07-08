<script lang="ts" setup generic="T extends Data<string> | Data<number>">
import { computed } from "vue";
import { BSPagination, BSSidebar } from "../../bootstrap";
import FilterBar from "../Filters/FilterBar.vue";
import type { ContainerEmits, ContainerProps, Data, FilterProps, FilterValues } from "../types";
import SearchControl from "../Controls/SearchControl.vue";
import PageSizeControl from "../Controls/PageSizeControl.vue";
import SortControl from "../Controls/SortControl.vue";
import SearchResultNum from "@/cdh-vue-lib/components/uu-list/Controls/SearchResultNum.vue";
import { container2FilterProps } from "../utils";

const props = defineProps<ContainerProps<T>>();

const emits = defineEmits<ContainerEmits>();

const totalPages = computed(() => {
    return Math.ceil(props.totalData / props.pageSize);
});

const filterProps = computed<FilterProps | null>(() => {
    return container2FilterProps(props);
});
</script>

<template>
    <BSSidebar class="uu-list-sidebar">
        <template #sidebar>
            <SearchControl
                v-if="searchEnabled"
                :model-value="search"
                @update:model-value="(value: string) => $emit('update:search', value)"
            />
            <slot name="filters-top" :data="data" :is-loading="isLoading" />
            <FilterBar
                v-if="filterProps"
                :filter-props="filterProps"
                @update:filter-values="
                    (val: FilterValues) => $emit('update:filter-values', val)
                "
            />
            <slot name="filters-bottom" :data="data" :is-loading="isLoading" />
        </template>

        <div>
            <div class="w-100 d-flex align-items-center gap-3 uu-list-controls">
                <SearchResultNum
                    :search-query="search"
                    :page-num="data?.length ?? 0"
                    :total-num="totalData"
                />
                <div v-if="sortEnabled" class="ms-auto">
                    <SortControl
                        :current-sort="currentSort"
                        :sort-options="sortOptions"
                        @update:current-sort="
                            (value: string) => emits('update:current-sort', value)
                        "
                    />
                </div>
                <div>
                    <PageSizeControl
                        :page-size-options="pageSizeOptions"
                        :page-size="pageSize"
                        @update:page-size="
                            (value: number) => emits('update:page-size', value)
                        "
                    />
                </div>
            </div>
            <slot name="data" :data="data" :is-loading="isLoading" />

            <div>
                <BSPagination
                    v-if="data"
                    :max-pages="totalPages"
                    :currentpage="currentPage"
                    @change-page="(val: number) => $emit('update:current-page', val)"
                />
            </div>
        </div>
    </BSSidebar>
</template>

<i18n>
{
  "en": {
    "loading": "Loading....",
    "no_data": "No items to display"
  },
  "nl": {
    "loading": "Gegevens worden laden...",
    "no_data": "Geen gegevens om te tonen"
  }
}
</i18n>
