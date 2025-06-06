<script lang="ts" setup>
import { ref } from "vue";
import { BSDropdownMultiSelect } from "cdh-vue-lib";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";
import EmitTable, { type EmitDefinition } from "~/components/EmitTable.vue";

const stringOptions = ref<[string, string][]>([
    ["apple", "Apple"],
    ["banana", "Banana"],
    ["cherry", "Cherry"],
    ["date", "Date"],
    ["elderberry", "Elderberry"],
]);
const selectedStringOptions = ref<string[]>([]);

const numberOptions = ref<[number, string][]>([
    [1, "Option One"],
    [2, "Option Two"],
    [3, "Option Three"],
    [4, "Option Four"],
]);
const selectedNumberOptions = ref<number[]>([]);

const optionsForPreselectionStrings = ref<[string, string][]>([
    ["s1", "Pre-selected String One"],
    ["s2", "Pre-selected String Two"],
    ["s3", "Another String Option"],
]);
const preselectedStrings = ref<string[]>(["s1"]);

const optionsForPreselectionNumbers = ref<[number, string][]>([
    [101, "Pre-selected Number 101"],
    [102, "Pre-selected Number 102"],
    [103, "Another Number Option"],
]);
const preselectedNumbers = ref<number[]>([101, 103]);

const propDefinitions: PropDefinition[] = [
    {
        name: "label",
        type: "String",
        required: true,
        description: "The text displayed on the dropdown toggle button.",
    },
    {
        name: "options",
        type: "[value, displayText][]",
        required: true,
        description:
            "An array of tuples to populate the multi-select list. Each tuple must be in the format [value, displayText], where value can be a string or a number, and displayText is the string shown to the user for that option.",
    },
    {
        name: "modelValue",
        type: "string[] | number[]",
        required: true,
        description:
            "The v-model for the component. It holds an array of the currently selected option values. This must be an array of strings (string[]) or an array of numbers (number[]), consistent with the type of values provided in the options prop.",
    },
];

const emitDefinitions: EmitDefinition[] = [
    {
        eventName: "update:modelValue",
        description:
            "Emitted when the selection changes within the component. The value payload is the new array of selected option values (either string[] or number[]).",
    },
];
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSDropdownMultiSelect Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSDropdownMultiSelect</code> component allows you to
                select multiple items from a dropdown list.
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
                <h4 class="h5">Basic usage with string options</h4>
                <p>Demonstrates binding to an array of strings.</p>
                <div class="mb-3 p-3 border rounded">
                    <BSDropdownMultiSelect
                        v-model="selectedStringOptions"
                        label="Select Fruits"
                        :options="stringOptions"
                    />
                    <p class="mt-2 mb-0">
                        Selected Fruits:
                        <span v-if="selectedStringOptions.length">{{
                            selectedStringOptions.join(", ")
                        }}</span>
                        <span v-else>None</span>
                    </p>
                </div>
                <pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";
import { BSDropdownMultiSelect } from "cdh-vue-lib";

const stringOptions = ref&lt;[string, string][]&gt;([
    ["apple", "Apple"],
    ["banana", "Banana"],
    ["cherry", "Cherry"],
    ["date", "Date"],
    ["elderberry", "Elderberry"],
]);
const selectedStringOptions = ref&lt;string[]&gt;([]);
&lt;/script&gt;

&lt;template&gt;
    &lt;BSDropdownMultiSelect
        v-model="selectedStringOptions"
        label="Select Fruits"
        :options="stringOptions"
    /&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Usage with number options</h4>
                <p>Demonstrates binding to an array of numbers.</p>
                <div class="mb-3 p-3 border rounded">
                    <BSDropdownMultiSelect
                        v-model="selectedNumberOptions"
                        label="Select Numbers"
                        :options="numberOptions"
                    />
                    <p class="mt-2 mb-0">
                        Selected Numbers:
                        <span v-if="selectedNumberOptions.length">{{
                            selectedNumberOptions.join(", ")
                        }}</span>
                        <span v-else>None</span>
                    </p>
                </div>
                <pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";
import { BSDropdownMultiSelect } from "cdh-vue-lib";

const numberOptions = ref&lt;[number, string][]&gt;([
    [1, "Option One"],
    [2, "Option Two"],
    [3, "Option Three"],
    [4, "Option Four"],
]);
const selectedNumberOptions = ref&lt;number[]&gt;([]);
&lt;/script&gt;

&lt;template&gt;
    &lt;BSDropdownMultiSelect
        v-model="selectedNumberOptions"
        label="Select Numbers"
        :options="numberOptions"
    /&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Pre-selected string values</h4>
                <p>
                    Shows how the component behaves when
                    <code>modelValue</code> is initialized with some string
                    values.
                </p>
                <div class="mb-3 p-3 border rounded">
                    <BSDropdownMultiSelect
                        v-model="preselectedStrings"
                        label="Pre-selected Strings"
                        :options="optionsForPreselectionStrings"
                    />
                    <p class="mt-2 mb-0">
                        Current Selection:
                        <span v-if="preselectedStrings.length">{{
                            preselectedStrings.join(", ")
                        }}</span>
                        <span v-else>None</span>
                    </p>
                </div>
                <pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";
import { BSDropdownMultiSelect } from "cdh-vue-lib";

const optionsForPreselectionStrings = ref&lt;[string, string][]&gt;([
    ["s1", "Pre-selected String One"],
    ["s2", "Pre-selected String Two"],
    ["s3", "Another String Option"],
]);
const preselectedStrings = ref&lt;string[]&gt;(['s1']); // Initial pre-selected values
&lt;/script&gt;

&lt;template&gt;
    &lt;BSDropdownMultiSelect
        v-model="preselectedStrings"
        label="Pre-selected Strings"
        :options="optionsForPreselectionStrings"
    /&gt;
&lt;/template&gt;</code></pre>
            </section>
        </section>
    </div>
</template>
