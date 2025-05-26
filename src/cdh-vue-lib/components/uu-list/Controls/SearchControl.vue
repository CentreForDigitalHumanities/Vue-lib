<script lang="ts" setup>
import { useInputValue } from "@/cdh-vue-lib/composables";
import { useI18n } from "vue-i18n";

interface Props {
    modelValue: string;
}

function debounce<A extends unknown[]>(
    func: (...args: A) => void,
    timeout: number = 500,
): (...args: A) => void {
    // In browser environments, setTimeout is the same as window.setTimeout,
    // which returns a number.
    let timer: number | undefined;

    return (...args: A): void => {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
            func(...args);
        }, timeout);
    };
}

const props = defineProps<Props>();

const emits = defineEmits<{
    (e: "update:model-value", value: string): void;
}>();

function update(value: string) {
    emits("update:model-value", value);
}

// Firing the update event on _every_ key input event can quickly overwhelm a
// backend. Therefore, we use the debounce method to create a version of update
// that only fires after some time with no additional input events.
const debouncedUpdate = debounce((value: string) => update(value));

const { t } = useI18n();
</script>

<template>
    <div class="search">
        <input
            id="search"
            class="form-control"
            :value="modelValue"
            :placeholder="t('placeholder')"
            @input="(val) => debouncedUpdate(useInputValue(val))"
        />
    </div>
</template>

<i18n>
{
  "en": {
    "placeholder": "Search"
  },
  "nl": {
    "placeholder": "Zoeken"
  }
}
</i18n>
