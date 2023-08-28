<script lang="ts" setup>
import { ref } from "vue";

interface Props {
    options: [string | number, string][];
    modelValue: string | number;
    containerClasses?: string;
}
const props = withDefaults(defineProps<Props>(), {
    containerClasses: "",
});

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
    (
        e: "update:modelValue",
        value: string | number
    ): void;
}>();

const selected = ref<(string | number)>(props.modelValue);

function toggleSelected(key: string | number) {
    selected.value = key;
    emit("update:modelValue", selected.value);
}
</script>

<template>
    <div>
        <div
            v-for="option in options"
            :key="option[0]"
            class="form-check"
            :class="containerClasses"
        >
            <input
                :id="'id_' + option[0]"
                type="radio"
                class="form-check-input"
                :value="option[0]"
                :checked="selected == option[0]"
                @click="toggleSelected(option[0])"
            />
            <label class="form-check-label" :for="'id_' + option[0]">{{
                option[1]
            }}</label>
        </div>
    </div>
</template>
