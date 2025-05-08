<script lang="ts" setup>
import { computed } from "vue";
import type { FilterValues, FilterValue, FilterProps } from "../types";
import Filter from "./Filter.vue";

interface Props {
    filterProps: FilterProps;
}

const props = defineProps<Props>();

const filters = computed(() => props.filterProps.filters);
const filterValues = computed(() => props.filterProps.filterValues);

const emits = defineEmits<{
    (e: "update:filter-values", value: FilterValues): void;
}>();

function updateValue(field: string, value: FilterValue) {
    let copy = { ...filterValues.value };
    copy[field] = value;
    emits("update:filter-values", copy);
}
</script>

<template>
    <Filter
        v-for="filter in filters"
        :key="filter.field"
        :filter="filter"
        :value="filterValues[filter.field]"
        @update:value="(val) => updateValue(filter.field, val)"
    />
</template>
