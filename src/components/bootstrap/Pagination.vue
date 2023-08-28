<script lang="ts" setup>
import { computed } from "vue";

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

const items = computed(() => {
    const delta = props.numOptions;
    const left = props.currentpage - delta;
    const right = props.currentpage + delta + 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= props.maxPages; i++) {
        if (i === 1 || i === props.maxPages || (i >= left && i < right))
            range.push(i);
    }

    for (const i of range) {
        if (l) {
            if (i - l === 2) rangeWithDots.push(l + 1);
            else if (i - l !== 1) rangeWithDots.push(-42);
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
});

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
    (e: "change-page", value: number): void;
}>();

function changePage(page: number) {
    page = clamp(page, 1, props.maxPages);

    emit("change-page", page);
}
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
                Vorige
            </a>
        </li>
        <li
            v-for="item in items"
            :key="item"
            class="page-item"
            :class="
                (item === -42 ? 'disabled page-ellipsis ' : '') +
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
                Volgende
            </a>
        </li>
    </ul>
</template>
