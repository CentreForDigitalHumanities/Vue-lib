<script lang="ts" setup>
import { Data, DDCString } from "../../../types";

interface Props {
    item: Data;
    column: DDCString;
}

const props = defineProps<Props>();
</script>

<template>
    <span :class="column.classes">
        {{ item[column.field] }}
    </span>
</template>
