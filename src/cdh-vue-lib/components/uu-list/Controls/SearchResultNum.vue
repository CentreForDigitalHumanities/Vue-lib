<script lang="ts" setup>
import { useI18n } from "vue-i18n";

interface Props {
    searchQuery?: string;
    pageNum?: number;
    totalNum: number;
}

const props = defineProps<Props>();

const { t } = useI18n();
</script>

<template>
    <div>
        <span v-if="searchQuery">
            {{ t("search", { query: searchQuery }) }}
        </span>
        {{
            t("showing", {
                pageNum: pageNum,
                totalNum: Intl.NumberFormat().format(totalNum),
            })
        }}
    </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "search": "Search result: {query},",
    "showing": "showing {pageNum} of {totalNum} results"
  },
  "nl": {
    "search": "Zoekresultaat: {query},",
    "showing": "{pageNum} van {totalNum} getoond"
  }
}
</i18n>
