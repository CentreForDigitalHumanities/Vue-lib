<script lang="ts" setup>
import { Data, DDCHTML } from "../../../types";

interface Props {
    item: Data;
    column: DDCHTML;
}

const props = defineProps<Props>();
</script>

<template>
    <span v-html="item[column.field]"> </span>
</template>
