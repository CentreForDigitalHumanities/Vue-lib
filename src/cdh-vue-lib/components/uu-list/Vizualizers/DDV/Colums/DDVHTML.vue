<script lang="ts" setup>
import { DDCListData, DDCHTML } from "../../../types";

interface Props {
    item: DDCListData;
    column: DDCHTML;
}

const props = defineProps<Props>();
</script>

<template>
    <span v-html="item[column.field]" />
</template>
