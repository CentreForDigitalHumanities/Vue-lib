<script lang="ts" setup>
import { BSModal } from "cdh-vue-lib";
import { ref } from "vue";
import EmitTable, { type EmitDefinition } from "~/components/EmitTable.vue";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";
import SlotTable, { type SlotDefinition } from "~/components/SlotTable.vue";

const isModalActive = ref(false);
const isSecondModalActive = ref(false);

function showModal(): void {
    console.log("Showing modal.");
    isModalActive.value = true;
}

function hideModal(): void {
    console.log("Hiding modal.");
    isModalActive.value = false;
}

function showSecondModal(): void {
    console.log("Showing modal.");
    isSecondModalActive.value = true;
}

function hideSecondModal(): void {
    console.log("Hiding modal.");
    isSecondModalActive.value = false;
}

function handleModalShown(): void {
    console.log("Modal has been shown");
}

function handleModalHidden(): void {
    console.log("Modal has been hidden");
    // Resetting the ref if needed, though BSModal handles its internal state
    // For this documentation, we ensure the button reflects the actual state.
    isModalActive.value = false;
    isSecondModalActive.value = false;
}

const propDefinitions: PropDefinition[] = [
    {
        name: "id",
        type: "String",
        required: false,
        description:
            "A unique ID for the modal. If not provided, a UUID will be generated.",
    },
    {
        name: "active",
        type: "Boolean",
        required: true,
        description:
            "Controls the visibility of the modal. Set to true to show the modal, and false to hide it.",
    },
    {
        name: "hasBackground",
        type: "Boolean",
        required: false,
        defaultValue: "true",
        description:
            "Determines whether the modal has a backdrop. If true, a backdrop is shown.",
    },
    {
        name: "backgroundClickCloses",
        type: "Boolean",
        required: false,
        defaultValue: "true",
        description:
            "If true and hasBackground is true, clicking the backdrop will close the modal. If set to false, the backdrop becomes 'static'.",
    },
    {
        name: "showCloseButton",
        type: "Boolean",
        required: false,
        defaultValue: "true",
        description:
            "Toggles the visibility of the close button (cross icon) in the modal header.",
    },
    {
        name: "size",
        type: "String",
        required: false,
        defaultValue: '"default"',
        description:
            'Defines the size of the modal. Accepted values are "small", "default", "large", or "extra-large".',
    },
    {
        name: "headerColor",
        type: "String | undefined | null",
        required: false,
        defaultValue: '"primary"',
        description:
            "Sets the background color of the modal header using Bootstrap's text-bg-* utility classes (e.g., primary, success, dark). Set to null or undefined for no specific background color.",
    },
    {
        name: "headerBold",
        type: "Boolean",
        required: false,
        defaultValue: "true",
        description: "If true, the header text will be bold.",
    },
    {
        name: "centered",
        type: "Boolean",
        required: false,
        defaultValue: "false",
        description:
            "If true, the modal will be vertically centered on the page.",
    },
];

const slotDefinitions: SlotDefinition[] = [
    {
        slotName: "title",
        description:
            "Content for the modal's title, placed within the `.modal-header`.",
    },
    {
        slotName: "default",
        description:
            "Main content of the modal, placed within the `.modal-body`.",
    },
    {
        slotName: "footer",
        description:
            "Content for the modal's footer, placed within the `.modal-footer`.",
    },
];

const emitDefinitions: EmitDefinition[] = [
    {
        eventName: "shown",
        description:
            "Emitted when the modal has been fully shown to the user (after CSS transitions are complete).",
    },
    {
        eventName: "hidden",
        description:
            "Emitted when the modal has been fully hidden from the user (after CSS transitions are complete).",
    }
];
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSModal Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSModal</code> component is a wrapper around
                Bootstrap's modal functionality, allowing for dynamic and
                interactive dialog prompts. It teleports its content to the body
                to ensure proper stacking and display.
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
            <h3 class="h4">Emits</h3>
            <EmitTable :emit-defs="emitDefinitions" />
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic modal</h4>
                <p>
                    This is a basic modal example. It uses the default settings
                    for size, header color, and other options.
                </p>
                <p>
                    The modal can be closed by clicking the close button or the
                    backdrop.
                </p>
                <button class="btn btn-primary mb-3" @click="showModal">
                    Open Modal
                </button>

                <BSModal
                    :active="isModalActive"
                    @hidden="handleModalHidden"
                    @shown="handleModalShown"
                >
                    <template #title>Basic modal title</template>
                    <p>This is the content of the basic modal.</p>
                    <p>
                        It uses the default settings for size, header color, and
                        other options.
                    </p>
                    <template #footer>
                        <button class="btn btn-secondary" @click="hideModal">
                            Close
                        </button>
                        <button class="btn btn-primary" @click="hideModal">
                            Save Changes
                        </button>
                    </template>
                </BSModal>

                <pre v-pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { ref } from "vue";
import { BSModal } from "cdh-vue-lib";

const isModalActive = ref(false);

function showModal(): void {
    console.log('Showing modal.');
    isModalActive.value = true;
}

function hideModal(): void {
    console.log('Hiding modal.');
    isModalActive.value = false;
}

function handleModalShown(): void {
    console.log("Modal has been shown");
}

function handleModalHidden(): void {
    console.log("Modal has been hidden");
    isModalActive.value = false;
    isSecondModalActive.value = false;
}
&lt;/script&gt;

&lt;template&gt;
    &lt;BSModal
        :active="isModalActive"
        @hidden="handleModalHidden"
        @shown="handleModalShown"
        @update:active="isModalActive = $event"
    &gt;
        &lt;template #title&gt;Basic Modal Title&lt;/template&gt;
        &lt;p&gt;This is the content of the basic modal.&lt;/p&gt;
        &lt;p&gt;
            It uses the default settings for size, header color, and other options.
        &lt;/p&gt;
        &lt;template #footer&gt;
            &lt;button class="btn btn-secondary" @click="hideModal"&gt;
                Close
            &lt;/button&gt;
            &lt;button class="btn btn-primary" @click="hideModal"&gt;
                Save Changes
            &lt;/button&gt;
        &lt;/template&gt;
    &lt;/BSModal&gt;
&lt;/template&gt;</code></pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Customized Modal</h4>
                <p>
                    This modal is larger, centered in the middle of the screen,
                    and cannot be closed by clicking the backdrop.
                </p>
                <button class="btn btn-info mb-3" @click="showSecondModal">
                    Open Customized Modal
                </button>
                <BSModal
                    :active="isSecondModalActive"
                    size="large"
                    header-color="success"
                    :centered="true"
                    :background-click-closes="false"
                    :show-close-button="true"
                    @hidden="handleModalHidden"
                >
                    <template #title>Customized Modal Header</template>
                    <p>
                        This modal is larger, centered, and cannot be closed by
                        clicking the backdrop.
                    </p>
                    <p>The header has a 'success' background.</p>
                    <template #footer>
                        <button
                            class="btn btn-warning"
                            @click="hideSecondModal"
                        >
                            Dismiss
                        </button>
                    </template>
                </BSModal>

                <pre v-pre class="code-example">
<code>&lt;script lang="ts" setup&gt;
import { BSModal } from "cdh-vue-lib";
import { ref } from "vue";

const isModalActive = ref(false);

function showModal(): void {
    isModalActive.value = true;
}

function hideModal(): void {
    isModalActive.value = false;
}

function handleModalHidden(): void {
    isModalActive.value = false;
    console.log("Modal hidden event triggered");
}
&lt;/script&gt;

&lt;template&gt;
    &lt;BSModal
        :active="isModalActive"
        size="large"
        header-color="success"
        :centered="true"
        :background-click-closes="false"
        :show-close-button="true"
        @hidden="handleModalHidden"
    &gt;
        &lt;template #title&gt;
            Customized Modal Header
        &lt;/template&gt;

        &lt;p&gt;
            This modal is larger, centered, and cannot be closed by clicking the
            backdrop.
        &lt;/p&gt;

        &lt;p&gt;The header has a 'success' background.&lt;/p&gt;

        &lt;template #footer&gt;
            &lt;button class="btn btn-warning" @click="hideModal"&gt;
            Dismiss
            &lt;/button&gt;
        &lt;/template&gt;
    &lt;/BSModal&gt;
&lt;/template&gt;</code></pre>
            </section>
        </section>
    </div>
</template>
