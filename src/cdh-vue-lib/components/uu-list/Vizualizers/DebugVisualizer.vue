<script lang="ts" setup>
import { Data } from "../types";

interface Props {
    data?: Data[];
    isLoading: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isLoading: false,
});
</script>

<template>
    <pre>{{ data }}</pre>
</template>
