<script lang="ts" setup>
import { BSMultiSelect } from "../../../dist/cdh-vue-lib.es";
import { ref } from "vue";

const multiSelectOptions = ref([
    ["option1", "Option 1"],
    ["option2", "Option 2"],
    ["option3", "Option 3"],
    ["option4", "Option 4"],
]);
const selectedOptions = ref(["option1", "option3"]);
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
            <ul>
                <li>
                    <code>options</code> (Array, required): An array of tuples,
                    where each tuple contains the value (String | Number) and
                    the label (String) for a checkbox option. E.g.,
                    <code>[['value1', 'Label 1'], ['value2', 'Label 2']]</code>.
                </li>
                <li>
                    <code>modelValue</code> (Array, required): An array of
                    currently selected values. These should correspond to the
                    values provided in the <code>options</code> prop.
                </li>
                <li>
                    <code>containerClasses</code> (String, optional, default:
                    <code>""</code>): Additional CSS classes to apply to each
                    checkbox's container div.
                </li>
                <li>
                    <code>uniqueId</code> (String, optional, default: a
                    generated UUID): A unique identifier to be appended to the
                    generated IDs of the input elements. This is useful if you
                    have multiple instances of the component on the same page.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <ul>
                <li>
                    <code>update:model-value</code> (value: Array): Emitted when
                    an option is selected or deselected. The payload is an array
                    of the currently selected values.
                </li>
            </ul>
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
<code>&lt;BSMultiSelect
    v-model="selectedOptions"
    :options="multiSelectOptions"
/&gt;

&lt;script setup lang="ts"&gt;
import { ref } from "vue";

const multiSelectOptions = ref([
    ["option1", "Option 1"],
    ["option2", "Option 2"],
    ["option3", "Option 3"],
    ["option4", "Option 4"],
]);
const selectedOptions = ref(["option1", "option3"]);
&lt;/script&gt;</code>
                                    </pre>
                </section>
        </section>
    </div>
</template>
