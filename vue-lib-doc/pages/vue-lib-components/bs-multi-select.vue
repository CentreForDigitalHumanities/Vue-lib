<script lang="ts" setup>
import { BSMultiSelect, type BSSelectOption } from "cdh-vue-lib";
import { ref } from "vue";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";
import EmitTable, { type EmitDefinition } from "~/components/EmitTable.vue";

const multiSelectOptions = ref<BSSelectOption<string>[]>([
    ["option1", "Option 1"],
    ["option2", "Option 2"],
    ["option3", "Option 3"],
    ["option4", "Option 4"],
]);
const selectedOptions = ref(["option1", "option3"]);

const propDefinitions: PropDefinition[] = [
    {
        name: "options",
        type: "Array",
        required: true,
        description:
            "An array of tuples, where each tuple contains the value and label for a checkbox option.",
    },
    {
        name: "modelValue",
        type: "Array",
        required: true,
        description:
            "An array of currently selected values. These should correspond to the values provided in the options prop.",
    },
    {
        name: "containerClasses",
        type: "String",
        required: false,
        description:
            "Additional CSS classes to apply to each checkbox's container div.",
    },
    {
        name: "uniqueId",
        type: "String",
        required: false,
        defaultValue: "(a generated UUID)",
        description:
            "A unique identifier to be appended to the generated IDs of the input elements.",
    },
];

const emitDefinitions: EmitDefinition[] = [
    {
        eventName: "update:model-value",
        payload: "string[] | number[]",
        description:
            "Emitted when an option is selected or deselected. The payload is an array of the currently selected values.",
    },
];
</script>
<template>
    <div class="container py-4">
        <h2 class="h3">BSMultiSelect Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSMultiSelect</code> component allows users to select
                multiple options from a list. It renders a series of checkboxes
                styled using Bootstrap form check classes.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <PropTable :prop-defs="propDefinitions" />
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <EmitTable :emit-defs="emitDefinitions" />
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>
                <section class="my-4">
                    <h4 class="h5">Basic usage</h4>
                    <BSMultiSelect
                        v-model="selectedOptions"
                        :options="multiSelectOptions"
                    />
                    <p class="mt-3">
                        Selected: {{ selectedOptions.join(", ") }}
                    </p>
                    <pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";

const multiSelectOptions = ref([
    ["option1", "Option 1"],
    ["option2", "Option 2"],
    ["option3", "Option 3"],
    ["option4", "Option 4"],
]);
const selectedOptions = ref(["option1", "option3"]);
&lt;/script&gt;

&lt;template&gt;
    &lt;BSMultiSelect
        v-model="selectedOptions"
        :options="multiSelectOptions"
    /&gt;
&lt;/template&gt;</code></pre>
                </section>
        </section>
    </div>
</template>
