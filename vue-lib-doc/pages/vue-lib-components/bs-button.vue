<script setup lang="ts">
import { BSButton } from "cdh-vue-lib";

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
            <ul>
                <li><code>id</code> (String, optional): ID for the button.</li>
                <li>
                    <code>href</code> (String, optional): If provided, renders
                    an <code>&lt;a&gt;</code> tag.
                </li>
                <li>
                    <code>name</code> (String, optional): If provided, renders a
                    <code>&lt;button&gt;</code> tag with this name.
                </li>
                <li>
                    <code>variant</code> (String, optional, default: "dark"):
                    Button color variant (e.g., "primary", "secondary",
                    "success").
                </li>
                <li>
                    <code>size</code> (String, optional, default: "normal"):
                    Button size ("small", "normal", "large").
                </li>
                <li>
                    <code>outlined</code> (Boolean, optional, default: false):
                    Whether the button should be an outline button.
                </li>
                <li>
                    <code>active</code> (Boolean, optional, default: false):
                    Sets the active state.
                </li>
                <li>
                    <code>disabled</code> (Boolean, optional, default: false):
                    Disables the button.
                </li>
                <li>
                    <code>loading</code> (Boolean, optional, default: false):
                    Shows a loading spinner.
                </li>
                <li>
                    <code>input</code> (String, optional, default: "button"):
                    Type attribute for the button element ("button", "submit",
                    "reset").
                </li>
                <li>
                    <code>new-tab</code> (Boolean, optional, default: false): If
                    <code>href</code> is used, opens the link in a new tab.
                </li>
                <li>
                    <code>css-classes</code> (String, optional): Additional CSS
                    classes.
                </li>
            </ul>
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
