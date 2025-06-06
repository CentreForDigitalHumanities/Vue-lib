<script setup lang="ts">
import { faCog, faStar } from "@fortawesome/free-solid-svg-icons";
import { BSButton, BSCard, BSIcon } from "cdh-vue-lib";
import type { EmitDefinition } from "~/components/EmitTable.vue";
import PropTable, { type PropDefinition } from "~/components/PropTable.vue";
import type { SlotDefinition } from "~/components/SlotTable.vue";

function handleHeaderIconClick() {
    alert("Header icon clicked!");
}

function actionButtonClick() {
    alert("Action button clicked!");
}

const propsData: PropDefinition[] = [
    {
        id: "header-classes",
        type: "String",
        required: "No",
        description:
            "Additional CSS classes to apply to the card header element.",
    },
];

const emitData: EmitDefinition[] = [
    {
        eventName: "header-icon-clicked",
        description:
            "Emitted when the content in the header_icon slot is clicked.",
    },
];

const slotData: SlotDefinition[] = [
    {
        slotName: "header",
        description:
            "Custom content for the card header. Overrides title and header_icon slots if used.",
    },
    {
        slotName: "title",
        description: "Content for the card header title.",
    },
    {
        slotName: "header_icon",
        description:
            "Content for the card header icon, typically aligned to the right. Clicking this slot emits the header-icon-clicked event.",
    },
    {
        slotName: "image",
        description:
            "Image to be displayed at the top of the card, below the header.",
    },
    {
        slotName: "default",
        description: "Main content of the card body.",
    },
    {
        slotName: "footer",
        description: "Content for the card footer.",
    },
];
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSCard Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSCard</code> component is a versatile container for
                displaying content in a card format, commonly used in UIs to
                group related information. It supports various slots, for which
                see below.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <PropTable :props-data="propsData" />
        </section>

        <section class="my-4">
            <h3 class="h4">Slots</h3>
            <SlotTable :slots-data="slotData" />
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <EmitTable :emits-data="emitData" />
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic card</h4>
                <BSCard class="mb-3">
                    This is a basic card with content in the default slot.
                </BSCard>
            </section>

            <section class="my-3">
                <h4 class="h5">Card with title and footer</h4>
                <BSCard class="mb-3">
                    <template #title>Card Title</template>
                    This card uses the <code>#title</code> and
                    <code>#footer</code> slots.
                    <template #footer>Card Footer</template>
                </BSCard>
            </section>

            <section class="my-3">
                <h4 class="h5">
                    Card with clickable header icon and custom header classes
                </h4>
                <BSCard
                    header-classes="bg-light text-primary"
                    class="mb-3"
                    @header-icon-clicked="handleHeaderIconClick"
                >
                    <template #title>Card with clickable icon</template>
                    <template #header_icon>
                        <BSIcon :icon="faCog" />
                    </template>
                    This card has a title and a clickable settings icon in the
                    header. The header has custom styling.
                    <template #footer>
                        <small class="text-muted"
                            >Last updated 3 mins ago</small
                        >
                    </template>
                </BSCard>
            </section>

            <section class="my-3">
                <h4 class="h5">Card with all slots</h4>
                <BSCard
                    header-classes="bg-info text-white"
                    class="mb-3"
                    @header-icon-clicked="handleHeaderIconClick"
                >
                    <template #header>
                        <div
                            class="d-flex justify-content-between align-items-center"
                        >
                            <span
                                >Fully-featured card (custom header slot)</span
                            >
                            <BSIcon :icon="faStar" />
                        </div>
                    </template>
                    <template #image>
                        <img
                            src="https://placehold.co/200x100"
                            alt="Placeholder Image"
                            class="img-fluid card-img-top"
                        />
                    </template>
                    <p>
                        This card demonstrates the usage of many slots
                        simultaneously.
                    </p>
                    <p>
                        It includes a custom header, an image, body content, and
                        a footer.
                    </p>
                    <p>
                        The header icon (star) is part of the custom header slot
                        in this example.
                    </p>
                    If you wanted a separate title and clickable icon, you would
                    omit the <code>#header</code> slot and use
                    <code>#title</code> and <code>#header_icon</code> instead.
                    <template #footer>
                        <BSButton
                            variant="primary"
                            size="small"
                            class="mt-2"
                            @click="actionButtonClick"
                        >
                            Action
                        </BSButton>
                    </template>
                </BSCard>
            </section>
        </section>
    </div>
</template>

<style scoped>
.card-img-top {
    width: 100%;
    height: auto;
}
</style>
