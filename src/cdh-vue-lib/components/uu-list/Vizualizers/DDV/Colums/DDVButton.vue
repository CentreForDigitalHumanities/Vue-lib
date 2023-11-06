<script lang="ts" setup>
import { BSButton } from "@/cdh-vue-lib/components/bootstrap";
import { DDCListData, DDCButton } from "../../../types";

interface Props {
    item: DDCListData;
    column: DDCButton;
}

const props = defineProps<Props>();
</script>

<template>
    <span v-if="item[column.field]">
        <BSButton
            :href="item[column.field]['link']"
            :css-classes="item[column.field]['classes']"
            :new-tab="item[column.field]['new_tab']"
            :size="column.size"
            :variant="column.variant"
        >
            {{ item[column.field]["text"] }}
        </BSButton>
    </span>
</template>
