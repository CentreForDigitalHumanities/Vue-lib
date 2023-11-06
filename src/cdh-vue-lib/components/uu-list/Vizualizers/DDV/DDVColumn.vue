<script lang="ts" setup>
import { DDCListData, DataDefinedColumn } from "../../types";
import DDVString from "./Colums/DDVString.vue";
import DDVDate from "./Colums/DDVDate.vue";
import DDVButton from "./Colums/DDVButton.vue";
import DDVLink from "./Colums/DDVLink.vue";
import DDVHTML from "./Colums/DDVHTML.vue";
import DDVActions from "./Colums/DDVActions.vue";

interface Props {
    item: DDCListData;
    column: DataDefinedColumn;
}

const props = defineProps<Props>();
// Apologies for the horrible template. There was a more elegant way to do this
// but TypeScript didn't understand a single thing about it, so now we have to
// live with this horrible nugget of code
</script>

<template>
    <DDVString v-if="column.type == 'string'" :item="item" :column="column" />
    <DDVDate v-else-if="column.type == 'date'" :item="item" :column="column" />
    <DDVButton
        v-else-if="column.type == 'button'"
        :item="item"
        :column="column"
    />
    <DDVLink v-else-if="column.type == 'link'" :item="item" :column="column" />
    <DDVHTML v-else-if="column.type == 'html'" :item="item" :column="column" />
    <DDVActions
        v-else-if="column.type == 'actions'"
        :item="item"
        :column="column"
    />
</template>
