<script lang="ts" setup>
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useInputValue } from "@/cdh-vue-lib/composables";
import { useI18n } from "vue-i18n";

interface Props {
    modelValue: string;
}

// So this method is a pain to type correctly, so I'm not
// @ts-ignore
function debounce(func, timeout = 500) {
    // @ts-ignore
    let timer;
    // @ts-ignore
    return (...args) => {
        // @ts-ignore
        clearTimeout(timer);
        timer = setTimeout(() => {
            // @ts-ignore
            func.apply(this, args);
        }, timeout);
    };
}

const props = defineProps<Props>();

// Twice because Vue is somewhat dumb from time to time and does not realize
// they are equivalent
const emits = defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "update:model-value", value: string): void;
}>();

// Firing the update event on _every_ key input event can quickly overwhelm a
// backend. Thus, we use the debounce method to create a version of update
// that only fires after some time with no additional input events.
function update(value: string) {
    emits("update:modelValue", value);
}

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
