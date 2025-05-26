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

function updatePageSize(val: string | number) {
    if (typeof val === "string") {
        try {
            val = parseInt(val);
        } catch (e) {
            val = props.pageSizeOptions[0] ?? 10;
        }
    }
    emits("update:page-size", val);
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
