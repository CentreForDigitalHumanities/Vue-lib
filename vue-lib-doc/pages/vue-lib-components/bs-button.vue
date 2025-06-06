<script lang="ts" setup>
import { BSButton } from "cdh-vue-lib";
import PropTable, { type PropDefinition } from "@/components/PropTable.vue";

const buttonVariants = [
    "primary",
    "secondary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
    "light",
    "dark",
    "blue",
    "cream",
    "dark-blue",
    "indigo",
    "purple",
    "pink",
    "red",
    "brown",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "white",
    "gray",
    "gray-dark",
];

const propsData: PropDefinition[] = [
    {
        name: "id",
        type: "String",
        required: "No, if href is set",
        description: "ID for the button.",
    },
    {
        name: "href",
        type: "String",
        required: "No, if name is set",
        description:
            "If provided, renders a code tag with this as the value for the href attribute. Either href or name must be set.",
    },
    {
        name: "name",
        type: "String",
        required: false,
        description:
            "If provided, renders a button tag with this name. Either href or name must be set.",
    },
    {
        name: "variant",
        type: "String",
        required: false,
        defaultValue: '"dark"',
        description:
            'Button color variant (e.g., "primary", "secondary", "success").',
    },
    {
        name: "size",
        type: "String",
        required: false,
        defaultValue: '"normal"',
        description: 'Button size ("small", "normal", "large").',
    },
    {
        name: "outlined",
        type: "Boolean",
        required: false,
        defaultValue: "false",
        description: "Whether the button should be an outline button.",
    },
    {
        name: "active",
        type: "Boolean",
        required: false,
        defaultValue: "false",
        description: "Sets the active state.",
    },
    {
        name: "disabled",
        type: "Boolean",
        required: false,
        defaultValue: "false",
        description: "Disables the button.",
    },
    {
        name: "loading",
        type: "Boolean",
        required: false,
        defaultValue: "false",
        description: "Shows a loading spinner.",
    },
    {
        name: "input",
        type: "String",
        required: false,
        defaultValue: '"button"',
        description:
            'Type attribute for the button element ("button", "submit", "reset").',
    },
    {
        name: "new-tab",
        type: "Boolean",
        required: false,
        defaultValue: "false",
        description:
            "If <code>href</code> is used, opens the link in a new tab.",
    },
    {
        name: "css-classes",
        type: "String",
        required: false,
        description: "Additional CSS classes.",
    },
];
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSButton Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSButton</code> component renders a button or a link
                styled as a button. It is a wrapper around Bootstrap's button
                styling and provides various customization options through
                props.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Usage notes</h3>
            <p>You must set either <code>href</code> or <code>name</code>.</p>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <PropTable :prop-defs="propsData" />
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Variants</h4>
                <p>
                    The <code>variant</code> prop allows you to specify the
                    color of the button. Available options include:
                    <span v-for="variant of buttonVariants" :key="variant">
                        <code> {{ variant }}</code>
                        <span
                            v-if="
                                variant !==
                                buttonVariants[buttonVariants.length - 1]
                            "
                            >,
                        </span> </span
                    >.
                </p>
                <BSButton variant="primary" class="me-2">Primary</BSButton>
                <BSButton variant="secondary" class="me-2">Secondary</BSButton>
                <BSButton variant="success" class="me-2">Success</BSButton>
                <BSButton variant="danger" class="me-2">Danger</BSButton>
                <BSButton variant="warning" class="me-2">Warning</BSButton>
                <BSButton variant="info" class="me-2">Info</BSButton>
                <BSButton variant="light" class="me-2">Light</BSButton>
                <BSButton variant="dark" class="me-2">Dark</BSButton>
            </section>

            <section class="mt-3">
                <h4 class="h5">Outlined variants</h4>
                <BSButton variant="primary" outlined class="me-2"
                    >Primary Outlined</BSButton
                >
                <BSButton variant="secondary" outlined class="me-2"
                    >Secondary Outlined</BSButton
                >
                <BSButton variant="success" outlined class="me-2"
                    >Success Outlined</BSButton
                >
            </section>

            <section class="my-3">
                <h4 class="h5">Sizes</h4>
                <BSButton variant="primary" size="small" class="me-2"
                    >Small Button</BSButton
                >
                <BSButton variant="primary" size="normal" class="me-2"
                    >Normal Button</BSButton
                >
                <BSButton variant="primary" size="large" class="me-2"
                    >Large Button</BSButton
                >
            </section>

            <section class="my-3">
                <h4 class="h5">States</h4>
                <BSButton variant="primary" active class="me-2"
                    >Active Button</BSButton
                >
                <BSButton variant="primary" disabled class="me-2"
                    >Disabled Button</BSButton
                >
                <BSButton variant="primary" loading class="me-2"
                    >Loading Button</BSButton
                >
            </section>

            <section class="my-3">
                <h4 class="h5">As a Link</h4>
                <BSButton href="#" variant="info" class="me-2"
                    >Link Button</BSButton
                >
                <BSButton href="#" variant="success" new-tab class="me-2"
                    >Link Button (New Tab)</BSButton
                >
            </section>

            <section class="my-3">
                <h3 class="h5">With Custom CSS Classes</h3>
                <BSButton
                    variant="primary"
                    css-classes="custom-class another-class p-3"
                    >Custom CSS</BSButton
                >
            </section>
        </section>
    </div>
</template>

<style>
.another-class {
    background-color: hotpink;
    border: 3px solid purple;
}
</style>
