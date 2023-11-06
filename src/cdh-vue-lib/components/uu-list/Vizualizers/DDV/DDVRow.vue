<script lang="ts" setup>
// I'm gonna be honest with y'all, this component only exists to make the
// Vue devtools readable. This way, all the column components are neatly grouped
// by their row.
import { DDCListData, DataDefinedColumn as DDC } from "../../types";
import DDVColumn from "./DDVColumn.vue";

interface Props {
    item: DDCListData;
    columns: DDC[];
}

const props = defineProps<Props>();
</script>

<template>
    <tr>
        <td v-for="column in columns" :key="column.field" class="align-middle">
            <DDVColumn :column="column" :item="item" />
        </td>
    </tr>
</template>
