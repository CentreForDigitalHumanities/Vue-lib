<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
    maxPages: number;
    currentpage: number;
    showButtons?: boolean;
    numOptions?: number;
}
const props = withDefaults(defineProps<Props>(), {
    showButtons: true,
    numOptions: 2,
});

function clamp(val: number, min: number, max: number) {
    return Math.min(Math.max(val, min), max);
}

const items = computed<(number | 'ellipsis')[]>(() => {
    const visiblePagesAroundCurrent = props.numOptions;
    const rangeStart = props.currentpage - visiblePagesAroundCurrent;
    const rangeEnd = props.currentpage + visiblePagesAroundCurrent;

    // Create an array with first and last page numbers and pages within range.
    const essentialPageNumbers = Array.from({ length: props.maxPages }, (_, index) => index + 1)
        .filter(pageNum =>
            pageNum === 1 ||
            pageNum === props.maxPages ||
            (pageNum >= rangeStart && pageNum <= rangeEnd)
        );

    const paginationItems: (number | 'ellipsis')[] = [];
    essentialPageNumbers.forEach((pageNum, index) => {
        if (index === 0) {
            paginationItems.push(pageNum);
            return;
        }
        // Add ellipsis if the pages are not consecutive.
        if (pageNum - essentialPageNumbers[index - 1] > 1) {
            paginationItems.push('ellipsis');
        }
        paginationItems.push(pageNum);
    });

    return paginationItems;
});

const emit = defineEmits<{
    (e: "change-page", value: number): void;
}>();

function changePage(page: number | 'ellipsis') {
    if (page === 'ellipsis') {
        return;
    }
    page = clamp(page, 1, props.maxPages);

    emit("change-page", page);
}

const { t } = useI18n();
</script>

<template>
    <ul
        class="pagination justify-content-center"
        role="navigation"
        aria-label="pagination"
    >
        <li
            class="page-item page-button"
            :class="currentpage === 1 ? 'disabled' : ''"
        >
            <a
                v-if="showButtons"
                class="page-link"
                @click="changePage(currentpage - 1)"
            >
                {{ t("previous") }}
            </a>
        </li>
        <li
            v-for="item in items"
            :key="item"
            class="page-item"
            :class="
                (item === 'ellipsis' ? 'disabled page-ellipsis ' : '') +
                (item === currentpage ? 'active' : '')
            "
        >
            <a v-if="item !== -42" class="page-link" @click="changePage(item)">
                {{ item }}
            </a>
            <span v-else class="page-link">&hellip;</span>
        </li>
        <li
            class="page-item page-button"
            :class="currentpage >= maxPages ? 'disabled' : ''"
        >
            <a
                v-if="showButtons"
                class="page-link"
                @click="changePage(currentpage + 1)"
            >
                {{ t("next") }}
            </a>
        </li>
    </ul>
</template>

<i18n>
{
  "en": {
    "next": "Next",
    "previous": "Previous"
  },
  "nl": {
    "next": "Volgende",
    "previous": "Vorige"
  }
}
</i18n>
