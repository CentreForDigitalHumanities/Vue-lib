<script lang="ts" setup>
import { useInputValue } from "../../../composables";
import { SortOption } from "../types";

interface Props {
    currentSort: string;
    sortOptions: SortOption[];
}

const props = defineProps<Props>();

const emits = defineEmits<{
    (e: "update:current-sort", value: string): void;
    (e: "update:currentSort", value: string): void;
}>();
</script>

<template>
    <select
        :value="currentSort"
        class="form-select"
        @change="
            (val) => $emit('update:current-sort', useInputValue(val).trim())
        "
    >
        <option
            v-for="{ field, label } in sortOptions"
            :key="field"
            :value="field"
        >
            {{ label }}
        </option>
    </select>
</template>
