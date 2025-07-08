<script lang="ts" setup>
import { useInputValue } from "@/cdh-vue-lib";

interface Props {
    pageSize: number;
    pageSizeOptions: number[];
}

const props = defineProps<Props>();

const emits = defineEmits<{
    (e: "update:page-size", value: number): void;
}>();

function updatePageSize(value: string | number) {
    if (typeof value === "string") {
        const parsedValue = parseInt(value);
        if (isNaN(parsedValue)) {
            value = props.pageSizeOptions[0] ?? 10;
        } else {
            value = parsedValue;
        }
    }
    emits("update:page-size", value);
}
</script>

<template>
    <select
        :value="pageSize"
        class="form-select"
        @change="(val) => updatePageSize(useInputValue(val))"
    >
        <option v-for="option in pageSizeOptions" :key="option" :value="option">
            {{ option }}
        </option>
    </select>
</template>
