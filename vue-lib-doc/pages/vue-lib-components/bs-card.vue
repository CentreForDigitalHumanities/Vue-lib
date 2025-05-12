<script setup lang="ts">
import { faCog, faStar } from "@fortawesome/free-solid-svg-icons";
import { BSButton, BSCard, BSIcon } from "../../../dist/cdh-vue-lib.es";

function handleHeaderIconClick() {
    alert("Header icon clicked!");
}

function actionButtonClick() {
    alert("Action button clicked!");
}
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSCard Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSCard</code> component is a versatile container for
                displaying content in a card format, commonly used in UIs to
                group related information. It supports various sections, for
                which see below.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <ul>
                <li>
                    <code>header-classes</code> (String, optional): Additional
                    CSS classes to apply to the card header element.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Slots</h3>
            <ul>
                <li>
                    <code>header</code>: For custom content in the card header.
                    Overrides <code>title</code> and <code>header_icon</code> if
                    used.
                </li>
                <li>
                    <code>title</code>: For the title text in the card header.
                </li>
                <li>
                    <code>header_icon</code>: For an icon or element in the
                    header, typically aligned to the right. Clicking this slot
                    triggers the <code>header-icon-clicked</code> event.
                </li>
                <li>
                    <code>image</code>: For an image to be displayed at the top
                    of the card, below the header.
                </li>
                <li>
                    <code>default</code>: For the main content of the card body.
                </li>
                <li><code>footer</code>: For content in the card footer.</li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Emits</h3>
            <ul>
                <li>
                    <code>header-icon-clicked</code>: Emitted when the content
                    in the <code>header_icon</code> slot is clicked.
                </li>
            </ul>
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
