<script lang="ts" setup>
import { DDCListData, DDCActions } from "../../../types";
import { computed } from "vue";

interface Props {
    item: DDCListData;
    column: DDCActions;
}

const props = defineProps<Props>();

const actions = computed(() => {
    return props.item[props.column.field].entries();
});
</script>

<template>
    <div v-if="actions" class="dropdown">
        <button
            class="btn p-1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="line-height: 1rem"
        >
            <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z"
                    fill="#000000"
                />
                <path
                    d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z"
                    fill="#000000"
                />
                <path
                    d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z"
                    fill="#000000"
                />
            </svg>
        </button>

        <ul class="dropdown-menu">
            <li v-for="[id, action] in actions" :key="id">
                <hr v-if="action.divider" class="dropdown-divider" />
                <a
                    v-else
                    :href="action.link"
                    class="dropdown-item"
                    :class="action.classes ?? ''"
                    :target="action.new_tab ? '_blank' : '_self'"
                >
                    {{ action.text }}
                </a>
            </li>
        </ul>
    </div>
</template>
