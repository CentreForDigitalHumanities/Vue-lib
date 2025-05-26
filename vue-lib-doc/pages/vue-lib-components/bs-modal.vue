<script setup lang="ts">
import { BSModal } from "cdh-vue-lib";
import { ref } from "vue";

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
            <ul>
                <li>
                    <code>id</code> (String | null, optional, default:
                    <code>null</code>): A unique ID for the modal. If not
                    provided, a UUID will be generated.
                </li>
                <li>
                    <code>active</code> (Boolean, required): Controls the
                    visibility of the modal. Set to <code>true</code> to show
                    the modal, and <code>false</code> to hide it.
                </li>
                <li>
                    <code>hasBackground</code> (Boolean, optional, default:
                    <code>true</code>): Determines if the modal has a backdrop.
                </li>
                <li>
                    <code>backgroundClickCloses</code> (Boolean, optional,
                    default: <code>true</code>): If <code>true</code> and
                    <code>hasBackground</code> is <code>true</code>, clicking
                    the backdrop will close the modal. If set to
                    <code>false</code>, the backdrop becomes 'static'.
                </li>
                <li>
                    <code>showCloseButton</code> (Boolean, optional, default:
                    <code>true</code>): Toggles the visibility of the close
                    button (cross icon) in the modal header.
                </li>
                <li>
                    <code>size</code> (String, optional, default:
                    <code>"default"</code>): Defines the size of the modal.
                    Accepted values are <code>"small"</code>,
                    <code>"default"</code>, <code>"large"</code>, or
                    <code>"extra-large"</code>.
                </li>
                <li>
                    <code>headerColor</code> (String | undefined | null,
                    optional, default: <code>"primary"</code>): Sets the
                    background color of the modal header using Bootstrap's
                    <code>text-bg-*</code> utility classes (e.g., "primary",
                    "success", "dark"). Set to <code>null</code> or
                    <code>undefined</code> for no specific background color.
                </li>
                <li>
                    <code>headerBold</code> (Boolean, optional, default:
                    <code>true</code>): If <code>true</code>, the header text
                    will be bold.
                </li>
                <li>
                    <code>centered</code> (Boolean, optional, default:
                    <code>false</code>): If <code>true</code>, the modal will be
                    vertically centered on the page.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Slots</h3>
            <ul>
                <li>
                    <code>default</code>: The main content of the modal, placed
                    within the <code>.modal-body</code>.
                </li>
                <li>
                    <code>title</code>: Content for the modal's title, placed
                    within the <code>.modal-header</code>.
                </li>
                <li>
                    <code>footer</code>: Content for the modal's footer, placed
                    within the <code>.modal-footer</code>.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <ul>
                <li>
                    <code>shown</code>: Emitted when the modal has been fully
                    shown to the user (after CSS transitions complete).
                </li>
                <li>
                    <code>hidden</code>: Emitted when the modal has been fully
                    hidden from the user (after CSS transitions complete).
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic Modal</h4>
                <p>
                    This is a basic modal example. It uses the default settings
                    for size, header color, and other options.
                </p>
                <p>
                    The modal can be closed by clicking the close button or the
                    backdrop.
                </p>
                <button class="btn btn-primary" @click="showModal">
                    Open Modal
                </button>

                <BSModal
                    :active="isModalActive"
                    @hidden="handleModalHidden"
                    @shown="handleModalShown"
                >
                    <template #title>Basic Modal Title</template>
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
&lt;/template&gt;
</code>
            </pre>
            </section>

            <section class="my-3">
                <h4 class="h5">Customized Modal</h4>
                <p>
                    This modal is larger, centered in the middle of the screen,
                    and cannot be closed by clicking the backdrop.
                </p>
                <button class="btn btn-info" @click="showSecondModal">
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
<code>&lt;script setup lang="ts"&gt;
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
&lt;/template&gt;
</code>
                </pre>
            </section>
        </section>
    </div>
</template>
