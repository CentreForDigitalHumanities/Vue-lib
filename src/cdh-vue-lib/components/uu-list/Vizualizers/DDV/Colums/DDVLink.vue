<script lang="ts" setup>
import { Data, DDCLink } from "../../../types";

interface Props {
    item: Data;
    column: DDCLink;
}

const props = defineProps<Props>();
</script>

<template>
    <span v-if="item[column.field]">
        <a
            :href="item[column.field]['link']"
            :class="column.classes"
            :target="item[column.field]['new_tab'] ? '_blank' : '_self'"
        >
            {{ item[column.field]["text"] }}
        </a>
    </span>
</template>
