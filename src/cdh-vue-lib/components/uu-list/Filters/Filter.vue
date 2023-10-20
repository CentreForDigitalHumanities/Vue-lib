<script lang="ts" setup>
import { BSMultiSelect, BSRadioSelect } from "../../bootstrap";
import { useInputValue } from "@/cdh-vue-lib/composables";
import { FilterDefinition, FilterValue } from "../types";

interface Props {
    filter: FilterDefinition;
    value?: FilterValue;
}

const props = defineProps<Props>();

const emits = defineEmits<{
    (e: "update:value", value: FilterValue): void;
}>();
</script>

<template>
    <div class="uu-list-filter">
        <div class="uu-list-filter-label">{{ filter.label }}</div>
        <BSMultiSelect
            v-if="filter.type === 'checkbox'"
            :options="filter.options ?? []"
            :model-value="(value as number[] | string[]) ?? []"
            @update:model-value="(val) => emits('update:value', val)"
        />
        <BSRadioSelect
            v-if="filter.type === 'radio'"
            :options="filter.options ?? []"
            :model-value="(value as number | string) ?? ''"
            @update:model-value="(val) => emits('update:value', val)"
        />
        <div v-if="filter.type === 'date'" class="uu-list-filter-field">
            <input
                type="date"
                :value="value"
                class="form-control"
                @input="(val) => emits('update:value', useInputValue(val))"
            />
        </div>
    </div>
</template>
