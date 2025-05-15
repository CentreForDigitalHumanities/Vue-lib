<script lang="ts" setup>
import { BSSelect } from "../../../dist/cdh-vue-lib.es";
import { ref } from "vue";

const selectOptions = ref([
    [null, "Empty"],
    ["option1", "Option 1"],
    ["option2", "Option 2 (Value is string)"],
    [3, "Option 3 (Value is number)"],
]);
const selectedValue = ref<string | number | null>(null);

const selectOptionsNumbers = ref([
    [10, "Ten"],
    [20, "Twenty"],
    [30, "Thirty"],
]);
const selectedNumber = ref(10);
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
            <ul>
                <li>
                    <code>options</code> (Array, required): An array of tuples.
                    Each tuple represents an option and should be in the format
                    <code>[value, label]</code>, where <code>value</code> can be
                    a String, Number, or <code>null</code>, and
                    <code>label</code> is a String displayed to the user.
                </li>
                <li>
                    <code>modelValue</code> (String | Number | null, required):
                    The currently selected value of the select input. This
                    should match one of the <code>value</code>s in the
                    <code>options</code> array.
                </li>
                <li>
                    <code>containerClasses</code> (String, optional, default:
                    <code>""</code>): Additional CSS classes to apply to the
                    <code>&lt;select&gt;</code> element.
                </li>
                <li>
                    <code>placeholder</code> (String, optional, default:
                    <code>undefined</code>): If provided, an initial disabled
                    option with this text will be shown. The value of this
                    placeholder option is an empty string <code>''</code>.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <ul>
                <li>
                    <code>update:modelValue</code> (value: String | Number |
                    null): Emitted when an option is selected. The payload is
                    the value of the chosen option. The type of the emitted
                    value (String or Number) will match the type of the original
                    option value.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic Select with Mixed Value Types</h4>

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
&lt;/template&gt;</code>
                </pre>
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
<code>&lt;script setup lang="ts"&gt;
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
&lt;/template&gt;</code>
            </pre>
        </section>
    </div>
</template>
