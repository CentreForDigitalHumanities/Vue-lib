<script lang="ts" setup>
import { BSSelect, type BSSelectOption } from "cdh-vue-lib";
import { ref } from "vue";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";
import EmitTable, { type EmitDefinition } from "~/components/EmitTable.vue";

const selectOptions = ref<BSSelectOption<string | number | null>[]>([
    [null, "Empty"],
    ["option1", "Option 1"],
    ["option2", "Option 2 (Value is string)"],
    [3, "Option 3 (Value is number)"],
]);
const selectedValue = ref<string | number | null>(null);

const selectOptionsNumbers = ref<BSSelectOption<number>[]>([
    [10, "Ten"],
    [20, "Twenty"],
    [30, "Thirty"],
]);
const selectedNumber = ref(10);

const propDefinitions: PropDefinition[] = [
    {
        name: "options",
        type: "[string | number | null, string][]",
        required: true,
        description:
            "An array of tuples, where each tuple contains the value and label for an option.",
    },
    {
        name: "modelValue",
        type: "string | number | null",
        required: true,
        description:
            "The currently selected value of the select input. This should match one of the values in the options array.",
    },
    {
        name: "containerClasses",
        type: "string",
        required: false,
        defaultValue: '""',
        description:
            "Additional CSS classes to apply to the <select> element.",
    },
    {
        name: "placeholder",
        type: "string",
        required: false,
        defaultValue: "undefined",
        description:
            "If provided, an initial disabled option with this text will be shown. The value of this placeholder option is an empty string ''",
    },
];

const emitDefinitions: EmitDefinition[] = [
    {
        eventName: "update:modelValue",
        payload: "string | number | null",
        description:
            "Emitted when an option is selected. The payload is the value of the chosen option.",
    },
];
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSSelect Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSSelect</code> component renders a Bootstrap-styled
                select (dropdown) input. It allows users to choose a single
                option from a provided list.
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

            <section class="my-3">
                <h4 class="h5">Basic Select</h4>
                <p>
                    This example demonstrates a select input with options of mixed
                    types.
                </p>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Value type</th>
                            <th>Label (string)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="[value, label] in selectOptions" :key="value ?? ''">
                            <td><code>{{ value === null ? 'null' : value }}</code></td>
                            <td>
                                <code>{{ typeof value }}<span>
                                    {{ value === null ? ' (null)' : '' }}
                                </span></code>
                            </td>
                            <td>{{ label }}</td>
                        </tr>
                    </tbody>
                </table>

                <BSSelect
                    v-model="selectedValue"
                    :options="selectOptions"
                />
                <p class="mt-2">
                    Selected Value:
                    <code>{{ JSON.stringify(selectedValue) }}</code> (Type:
                    <code>{{ typeof selectedValue }}</code
                    >)
                </p>

                <pre v-pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { BSSelect } from "cdh-vue-lib";
import { ref } from "vue";

const selectOptions = ref([
    [null, "Empty"],
    ["option1", "Option 1"],
    ["option2", "Option 2 (Value is string)"],
    [3, "Option 3 (Value is number)"],
]);

const selectedValue = ref&lt;string | number | null&gt;(null);
&lt;/script&gt;

&lt;template&gt;
    &lt;h4&gt;Basic Select with Mixed Value Types&lt;/h4&gt;
    &lt;BSSelect
        v-model="selectedValue"
        :options="selectOptions"
    /&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Select with a placeholder and custom classes</h4>
                <BSSelect
                    v-model="selectedNumber"
                    :options="selectOptionsNumbers"
                    placeholder="Please choose one..."
                    container-classes="p-4"
                />
                <p class="mt-2">
                    Selected Number:
                    <code>{{ JSON.stringify(selectedNumber) }}</code> (Type:
                    <code>{{ typeof selectedNumber }}</code
                    >)
                </p>
            </section>

            <pre v-pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { BSSelect } from "cdh-vue-lib";
import { ref } from "vue";

const selectOptions = ref([
    [10, "Ten"],
    [20, "Twenty"],
    [30, "Thirty"],
]);
const selectedValue = ref(10);
&lt;/script&gt;

&lt;template&gt;
  &lt;h4&gt;Select with a placeholder and custom classes&lt;/h4&gt;
  &lt;BSSelect
    v-model="selectedValue"
    :options="selectOptions"
    placeholder="Please choose one..."
    container-classes="p-4"
  /&gt;
&lt;/template&gt;</code></pre>
        </section>
    </div>
</template>
