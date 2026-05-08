<script lang="ts" setup>
import { useConfirm } from "cdh-vue-lib";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";

const parametersData: PropDefinition[] = [
    {
        name: "text",
        type: "String",
        required: true,
        description: "The message displayed in the body of the confirm dialog.",
    },
    {
        name: "callback",
        type: "() => void | Promise<void>",
        required: true,
        description:
            "Function called when the user confirms. If it returns a Promise, the dialog stays open until the promise settles.",
    },
];

function handleConfirmed(): void {
    console.log("Confirmed!");
}
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">useConfirm Composable Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>useConfirm</code> composable programmatically mounts a
                <code>BSConfirmDialog</code> into the DOM. It presents the user
                with a confirmation dialog containing a message and two buttons
                (confirm / cancel). If the user confirms, the provided callback
                is invoked. The dialog is automatically removed from the DOM
                when it closes.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Usage notes</h3>
            <p>
                <code>useConfirm</code> must be called from within a component's
                setup context (or another composable called from setup), because
                it uses <code>getCurrentInstance()</code> internally to inherit
                the app's plugin context (e.g. i18n, router).
            </p>
            <p>
                If the callback returns a <code>Promise</code>, the dialog
                remains visible until the promise settles, allowing you to
                perform async operations (such as an API call) before the dialog
                closes.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Parameters</h3>
            <PropTable :prop-defs="parametersData" />
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic</h4>
                <p>
                    Only default values for the modal header and buttons.
                </p>
                <button
                    class="btn btn-secondary"
                    @click="
                        useConfirm({
                            text: 'Only this text is customised.',
                            callback: handleConfirmed,
                        })
                    "
                >
                    Trigger standard dialog
                </button>
            </section>

            <section class="my-3">
                <h4 class="h5">Customised</h4>
                <p>
                    With custom header and button texts.
                </p>
                <button
                    class="btn btn-primary"
                    @click="
                        useConfirm({
                            text: 'Are you sure you want to proceed?',
                            abortText: 'No way!',
                            confirmText: 'Absolutely',
                            headerText: 'Riddle me this',
                            callback: handleConfirmed,
                        })
                    "
                >
                    Trigger customised dialog
                </button>
            </section>
        </section>
    </div>
</template>
