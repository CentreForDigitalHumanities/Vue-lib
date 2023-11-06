<script lang="ts" setup>
import { DDCListData, DDCString } from "../../../types";

interface Props {
    item: DDCListData;
    column: DDCString;
}

const props = defineProps<Props>();
</script>

<template>
    <span :class="column.classes">
        {{ item[column.field] }}
    </span>
</template>
