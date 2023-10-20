<script lang="ts" setup>
import { FilterDefinition, FilterValues, FilterValue } from "../types";
import Filter from "./Filter.vue";

// This type is constructed this way to indicate that either you have a
// value for both, or none. Otherwise, TS will complain
type Props =
    | {
          filters: FilterDefinition[];
          filterValues: FilterValues;
      }
    | {
          filters: null | undefined;
          filterValues: null | undefined;
      };

const props = defineProps<Props>();

const emits = defineEmits<{
    (e: "update:filter-values", value: FilterValues): void;
}>();

function updateValue(field: string, value: FilterValue) {
    let copy = { ...props.filterValues };
    copy[field] = value;
    emits("update:filter-values", copy);
}
</script>

<template>
    <div v-if="filters">
        <Filter
            v-for="filter in filters"
            :key="filter.field"
            :filter="filter"
            :value="filterValues[filter.field!] ?? undefined"
            @update:value="(val) => updateValue(filter.field!, val)"
        />
    </div>
</template>
