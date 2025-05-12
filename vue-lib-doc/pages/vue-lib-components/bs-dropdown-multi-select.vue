<script setup lang="ts">
import { ref } from "vue";
import { BSDropdownMultiSelect } from "../../../dist/cdh-vue-lib.es";

// Sample data for demonstrations
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
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSDropdownMultiSelect Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSDropdownMultiSelect</code> component provides a
                user-friendly way to select multiple items from a list presented
                within a Bootstrap-styled dropdown. It combines the visual style
                of a dropdown button with an internal multi-select checklist.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <ul>
                <li>
                    <code>label</code> (String, required): The text displayed on
                    the dropdown toggle button.
                </li>
                <li>
                    <code>options</code> (Array, required): An array of tuples
                    to populate the multi-select list. Each tuple must be in the
                    format <code>[value, displayText]</code>, where
                    <code>value</code> can be a string or a number, and
                    <code>displayText</code> is the string shown to the user for
                    that option. <br />Example:
                    <code
                        >[['opt1', 'Option 1 Text'], [2, 'Option 2 Text']]</code
                    >
                </li>
                <li>
                    <code>modelValue</code> (Array, required): The v-model for
                    the component. It holds an array of the currently selected
                    option values. This must be an array of strings
                    (<code>string[]</code>) or an array of numbers
                    (<code>number[]</code>), consistent with the type of values
                    provided in the <code>options</code> prop. <br />Example:
                    <code>['opt1']</code> or <code>[2]</code>
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <ul>
                <li>
                    <code>update:modelValue</code> (value: Array): Emitted when
                    the selection changes within the component. The
                    <code>value</code> payload is the new array of selected
                    option values (either <code>string[]</code> or
                    <code>number[]</code>).
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Slots</h3>
            <p>
                The <code>BSDropdownMultiSelect</code> component does not
                provide direct slots for customizing the content of the dropdown
                menu itself, as it internally manages the rendering of the
                multi-select options using the
                <code>BSMultiSelect</code> component. The text on the dropdown
                toggle button is controlled via the <code>label</code> prop.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic Usage with String Options</h4>
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
                <pre class="bg-light p-2 rounded wrap-break">
<code>&lt;script setup lang="ts"&gt;
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
    &lt;p&gt;Selected: {{ selectedStringOptions.join(', ') || 'None' }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Usage with Number Options</h4>
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
                <pre class="bg-light p-2 rounded wrap-break">
<code>&lt;script setup lang="ts"&gt;
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
    &lt;p&gt;Selected: {{ selectedNumberOptions.join(', ') || 'None' }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">With Pre-selected String Values</h4>
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
                <pre class="bg-light p-2 rounded wrap-break">
<code>&lt;script setup lang="ts"&gt;
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
    &lt;p&gt;Current Selection: {{ preselectedStrings.join(', ') || 'None' }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">With Pre-selected Number Values</h4>
                <p>
                    Shows how the component behaves when
                    <code>modelValue</code> is initialized with some number
                    values.
                </p>
                <div class="mb-3 p-3 border rounded">
                    <BSDropdownMultiSelect
                        v-model="preselectedNumbers"
                        label="Pre-selected Numbers"
                        :options="optionsForPreselectionNumbers"
                    />
                    <p class="mt-2 mb-0">
                        Current Selection:
                        <span v-if="preselectedNumbers.length">{{
                            preselectedNumbers.join(", ")
                        }}</span>
                        <span v-else>None</span>
                    </p>
                </div>
                <pre class="bg-light p-2 rounded wrap-break">
<code>&lt;script setup lang="ts"&gt;
import { ref } from "vue";
import { BSDropdownMultiSelect } from "cdh-vue-lib";

const optionsForPreselectionNumbers = ref&lt;[number, string][]&gt;([
    [101, "Pre-selected Number 101"],
    [102, "Pre-selected Number 102"],
    [103, "Another Number Option"],
]);
const preselectedNumbers = ref&lt;number[]&gt;([101, 103]); // Initial pre-selected values
&lt;/script&gt;

&lt;template&gt;
    &lt;BSDropdownMultiSelect
        v-model="preselectedNumbers"
        label="Pre-selected Numbers"
        :options="optionsForPreselectionNumbers"
    /&gt;
    &lt;p&gt;Current Selection: {{ preselectedNumbers.join(', ') || 'None' }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
            </section>
        </section>
    </div>
</template>
