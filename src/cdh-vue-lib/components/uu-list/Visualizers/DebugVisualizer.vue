<script lang="ts" setup>
import type { Data } from "../types";

interface Props {
    data?: Data<string | number>[];
    isLoading: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isLoading: false,
    data: undefined,
});
</script>

<template>
    <pre>{{ data }}</pre>
</template>
