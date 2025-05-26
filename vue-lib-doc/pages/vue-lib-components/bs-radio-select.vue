<script lang="ts" setup>
import { BSRadioSelect, type BSSelectOption } from "cdh-vue-lib";
import { ref } from "vue";

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
            <ul>
                <li>
                    <code>options</code> (Array, required): An array of tuples,
                    where each tuple contains the value (String | Number) and
                    the label (String) for a radio option. E.g.,
                    <code>[['value1', 'Label 1'], ['value2', 'Label 2']]</code>.
                </li>
                <li>
                    <code>modelValue</code> (String | Number, required): The
                    currently selected value. This should be one of the values
                    provided in the <code>options</code> prop.
                </li>
                <li>
                    <code>containerClasses</code> (String, optional, default:
                    <code>""</code>): Additional CSS classes to apply to each
                    radio button's container div.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <ul>
                <li>
                    <code>update:modelValue</code> (value: String | Number):
                    Emitted when a radio option is selected. The payload is the
                    value of the selected option.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic use, string values</h4>
                <BSRadioSelect
                    v-model="selectedOption1"
                    :options="radioOptions1"
                />
                <p class="mt-3">Selected: {{ selectedOption1 }}</p>
                <pre class="code-example">
<code>&lt;script setup lang="ts"&gt;
import { ref } from "vue";

const radioOptions = ref([
    ["apples", "Apples"],
    ["bananas", "Bananas"],
    ["watermelons", "Watermelons"],
]);
const selectedOption = ref("apples");
&lt;/script&gt;
                    &lt;BSRadioSelect
    v-model="selectedOption"
    :options="radioOptions"
/&gt;
</code>
                </pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Numeric values, custom container classes</h4>
                <BSRadioSelect
                    v-model="selectedOption2"
                    :options="radioOptions2"
                    container-classes="mb-4"
                />
                <p class="mt-3">Selected: {{ selectedOption2 }}</p>
                <pre class="code-example">
<code>&lt;script setup lang="ts"&gt;
import { ref } from "vue";

const radioOptions = ref([
    [0, "Opel"],
    [1, "Ford"],
    [2, "Mercedes"],
]);
const selectedOption = ref(0);
&lt;/script&gt;

&lt;BSRadioSelect
    v-model="selectedOption"
    :options="radioOptions"
    container-classes="mb-4"
/&gt;
</code>
                </pre>
            </section>
        </section>
    </div>
</template>
