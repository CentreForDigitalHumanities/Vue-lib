<script lang="ts" setup>
import { computed } from "vue";
import { BSPagination, BSSidebar } from "../../bootstrap";
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
    <BSSidebar class="uu-list-sidebar">
        <template #sidebar>
            <SearchControl
                v-if="searchEnabled"
                :model-value="search"
                @update:model-value="(value) => $emit('update:search', value)"
            />
            <FilterBar
                v-if="filters"
                :filters="filters"
                :filter-values="filterValues"
                @update:filter-values="
                    (val) => $emit('update:filter-values', val)
                "
            />
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
                            (value) => emits('update:current-sort', value)
                        "
                    />
                </div>
                <div>
                    <PageSizeControl
                        :page-size-options="pageSizeOptions"
                        :page-size="pageSize"
                        @update:page-size="
                            (value) => emits('update:page-size', value)
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
                    @change-page="(val) => $emit('update:current-page', val)"
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
