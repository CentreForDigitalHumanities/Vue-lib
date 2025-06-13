<script lang="ts" setup>
import { BSRadioSelect, type BSSelectOption } from "cdh-vue-lib";
import { ref } from "vue";
import EmitTable, { type EmitDefinition } from "~/components/EmitTable.vue";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";

const radioOptions1 = ref<BSSelectOption<string>[]>([
    ["apples", "Apples"],
    ["bananas", "Bananas"],
    ["watermelons", "Watermelons"],
]);

const radioOptions2 = ref<BSSelectOption<number>[]>([
    [0, "Opel"],
    [1, "Ford"],
    [2, "Mercedes"],
]);
const selectedOption1 = ref("apples");
const selectedOption2 = ref(0);

const propDefinitions: PropDefinition[] = [{
    name: "options",
    type: "BSSelectOption[]",
    required: true,
    description:
        "An array of BSSelectOptions, where each option is a tuple containing the value (string | number) and the label (string) for a radio option.",
}, {
    name: "modelValue",
    type: "string | number",
    required: true,
    description:
        "The currently selected value. This should be one of the values provided in the options prop.",
}, {
    name: "containerClasses",
    type: "string",
    required: false,
    defaultValue: '""',
    description:
        "Additional CSS classes to apply to each radio button's container div.",
    }];

const emitDefinitions: EmitDefinition[] = [{
    eventName: "update:modelValue",
    payload: "string | number",
    description:
        "Emitted when a radio option is selected. The payload is the value of the selected option.",
}];
</script>
<template>
    <div class="container py-4">
        <h2 class="h3">BSRadioSelect Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSRadioSelect</code> component provides a set of radio
                buttons for selecting a single option from a list. It is styled
                using Bootstrap form check classes.
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
                <h4 class="h5">Basic use, string values</h4>
                <BSRadioSelect
                    v-model="selectedOption1"
                    :options="radioOptions1"
                />
                <p class="mt-3">Selected: {{ selectedOption1 }}</p>
                <pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";

const radioOptions = ref([
    ["apples", "Apples"],
    ["bananas", "Bananas"],
    ["watermelons", "Watermelons"],
]);
const selectedOption = ref("apples");
&lt;/script&gt;

&lt;template&gt;
    &lt;BSRadioSelect
        v-model="selectedOption"
        :options="radioOptions"
    /&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-4">
                <h4 class="h5">Numeric values, custom container classes</h4>
                <BSRadioSelect
                    v-model="selectedOption2"
                    :options="radioOptions2"
                    container-classes="mb-4"
                />
                <p class="mt-3">Selected: {{ selectedOption2 }}</p>
                <pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";

const radioOptions = ref([
    [0, "Opel"],
    [1, "Ford"],
    [2, "Mercedes"],
]);
const selectedOption = ref(0);
&lt;/script&gt;

&lt;template&gt;
    &lt;BSRadioSelect
        v-model="selectedOption"
        :options="radioOptions"
        container-classes="mb-4"
    /&gt;
&lt;/template&gt;</code></pre>
            </section>
        </section>
    </div>
</template>
