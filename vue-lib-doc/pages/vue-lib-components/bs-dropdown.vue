<script lang="ts" setup>
import { BSDropdown } from "cdh-vue-lib";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";
import SlotTable, { type SlotDefinition } from "~/components/SlotTable.vue";

const dropdownVariants = [
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
    "light",
    "dark",
];

const propDefinitions: PropDefinition[] = [
    {
        name: "id",
        type: "String",
        required: false,
        description:
            "A unique identifier for the dropdown. If not provided, a UUID will be generated.",
    },
    {
        name: "variant",
        type: "String",
        required: false,
        defaultValue: '"primary"',
        description: `The color variant for the dropdown button. Available options: ${dropdownVariants
            .map((v) => `"${v}"`)
            .join(", ")}.`,
    },
];

const slotDefinitions: SlotDefinition[] = [
    {
        slotName: "button",
        description:
            "Content for the dropdown toggle button. Typically text or an icon.",
    },
    {
        slotName: "default",
        description:
            "Content for the dropdown menu items. Usually a list of <li> elements with <a class='dropdown-item' href='#'> or <button class='dropdown-item' type='button'>.",
    },
];
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSDropdown Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSDropdown</code> component creates a toggleable menu
                that allows the user to choose one value from a predefined list.
                It uses Bootstrap's dropdown styling and functionality.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <PropTable :prop-defs="propDefinitions" />
        </section>

        <section class="my-4">
            <h3 class="h4">Slots</h3>
            <SlotTable :slot-defs="slotDefinitions" />
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic dropdown</h4>
                <div class="mb-3 p-3 border rounded">
                    <BSDropdown variant="secondary">
                        <template #button>Dropdown Button</template>
                        <li>
                            <a class="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li>
                            <a class="dropdown-item" href="#"
                                >Something else here</a
                            >
                        </li>
                    </BSDropdown>
                </div>
                <pre class="code-example">
    <code>&lt;BSDropdown variant="secondary"&gt;
        &lt;template #button&gt;Dropdown Button&lt;/template&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
    &lt;/BSDropdown&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Dropdown with 'link' variant</h4>
                <div class="mb-3 p-3 border rounded">
                    <BSDropdown variant="link">
                        <template #button>Link Dropdown</template>
                        <li>
                            <button class="dropdown-item" type="button">
                                Button Action
                            </button>
                        </li>
                        <li>
                            <button class="dropdown-item" type="button">
                                Another Button Action
                            </button>
                        </li>
                    </BSDropdown>
                </div>
                <pre class="code-example">
<code>&lt;BSDropdown variant="link"&gt;
    &lt;template #button&gt;Link Dropdown&lt;/template&gt;
    &lt;li&gt;&lt;button class="dropdown-item" type="button"&gt;
        Button Action
    &lt;/button&gt;&lt;/li&gt;
    &lt;li&gt;&lt;button class="dropdown-item" type="button"&gt;
        Another Button Action
    &lt;/button&gt;&lt;/li&gt;
&lt;/BSDropdown&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Dropdown with custom ID</h4>
                <div class="mb-3 p-3 border rounded">
                    <BSDropdown id="myCustomDropdown" variant="success">
                        <template #button>Custom ID Dropdown</template>
                        <li>
                            <a class="dropdown-item" href="#">Item 1</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Item 2</a>
                        </li>
                    </BSDropdown>
                </div>
                <pre class="code-example">
<code>&lt;BSDropdown id="myCustomDropdown" variant="success"&gt;
    &lt;template #button&gt;Custom ID Dropdown&lt;/template&gt;
    &lt;li&gt;
        &lt;a class="dropdown-item" href="#"&gt;Item 1&lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;a class="dropdown-item" href="#"&gt;Item 2&lt;/a&gt;
    &lt;/li&gt;
&lt;/BSDropdown&gt;</code></pre>
            </section>
        </section>
    </div>
</template>
