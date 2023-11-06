<script lang="ts" setup>
import { DDCListData, DataDefinedColumn as DDC } from "../../types";
import DDVRow from "./DDVRow.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
    data?: DDCListData[] | null;
    columns: DDC[];
    isLoading: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    data: null,
    isLoading: false,
});

const dataEmpty = computed(() => {
    return (
        props.data === null ||
        props.data === undefined ||
        props.data.length === 0
    );
});

const { t } = useI18n();
</script>

<template>
    <!-- A custom loading box for when we are doing the initial load. Subsequent loads use table.loading to indicate loading status -->
    <div v-if="isLoading && dataEmpty" class="alert alert-info w-100">
        {{ t("loading") }}
    </div>
    <table v-else class="table" :class="isLoading ? 'loading' : ''">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.field">
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody v-if="!dataEmpty">
            <DDVRow
                v-for="item in data"
                :key="item.id"
                :item="item"
                :columns="columns"
            />
        </tbody>
        <tbody v-else>
            <tr>
                <td :colspan="columns.length">{{ t("no_data") }}</td>
            </tr>
        </tbody>
    </table>
</template>

<i18n>
{
  "en": {
    "loading": "Loading....",
    "no_data": "No items to display"
  },
  "nl": {
    "loading": "Gegevens worden laden...",
    "no_data": "Geen gegevens om te tonen"
  }
}
</i18n>
