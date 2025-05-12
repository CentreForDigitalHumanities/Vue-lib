<script lang="ts" setup generic="T extends string | number">
import { v4 as UUIDv4 } from "uuid";

const props = withDefaults(
    defineProps<{
        options: [T, string][];
        modelValue: T[];
        containerClasses?: string;
        uniqueId?: string;
    }>(),
    {
        containerClasses: "",
        uniqueId: () => UUIDv4().toString(),
    },
);

const emit = defineEmits<{
    (e: "update:model-value", value: T[]): void;
}>();

function toggleSelected(clickedItem: T) {
    const isSelected = props.modelValue.includes(clickedItem);
    const newSelected = [...props.modelValue];
    const indexOfClicked = newSelected.indexOf(clickedItem);

    if (!isSelected) {
        newSelected.push(clickedItem);
    } else if (indexOfClicked > -1) {
        newSelected.splice(indexOfClicked, 1);
    }

    emit("update:model-value", newSelected);
}
</script>

<template>
    <div>
        <div
            v-for="[value, label] in options"
            :key="value"
            class="form-check"
            :class="containerClasses"
        >
            <input
                :id="'id_' + value + '_' + uniqueId"
                type="checkbox"
                class="form-check-input"
                :value="value"
                :checked="props.modelValue.includes(value)"
                @click="toggleSelected(value)"
            />
            <label
                class="form-check-label"
                :for="'id_' + value + '_' + uniqueId"
                >{{ label }}</label
            >
        </div>
    </div>
</template>
