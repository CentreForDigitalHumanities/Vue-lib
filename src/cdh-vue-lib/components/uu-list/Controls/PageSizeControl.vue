<script lang="ts" setup>
import { useInputValue } from "@/cdh-vue-lib";

interface Props {
    pageSize: number;
    pageSizeOptions: number[];
}

const props = defineProps<Props>();

const emits = defineEmits<{
    (e: "update:pageSize", value: number): void;
    (e: "update:page-size", value: number): void;
}>();

function updatePageSize(val: string | number) {
    if (typeof val === "string") {
        try {
            val = Number(val);
        } catch (e) {
            val = props.pageSizeOptions[0] ?? 10;
        }
    }
    // Typecast because TS cannot figure out that we cast any string to a number
    emits("update:pageSize", val as number);
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
