<script lang="ts" setup generic="T extends string | number">
const props = withDefaults(defineProps<{
    options: [T, string][];
    modelValue: T[];
    containerClasses?: string;
}>(), {
    containerClasses: "",
});

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
    // Twice, because Vue is dumb
    (
        e: "update:modelValue",
        value: T[]
    ): void;
    (
        e: "update:model-value",
        value: T
    ): void;
}>();

function toggleSelected(key: T) {
    const curVal: boolean = props.modelValue.includes(key);

    let copy = [...props.modelValue]

    if (!curVal) copy.push(key);
    else {
        const index = copy.indexOf(key);
        if (index > -1) copy.splice(index, 1); // 2nd parameter means remove one item only
    }

    emit("update:modelValue", copy);
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
                :id="'id_' + value"
                type="checkbox"
                class="form-check-input"
                :value="value"
                :checked="props.modelValue.includes(value)"
                @click="toggleSelected(value)"
            />
            <label class="form-check-label" :for="'id_' + value">{{
                label
            }}</label>
        </div>
    </div>
</template>
