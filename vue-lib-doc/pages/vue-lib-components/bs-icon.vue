<script setup lang="ts">
import { BSIcon } from "../../../dist/cdh-vue-lib.es";
import {
    faCoffee,
    faSpinner,
    faUser,
    faCircle,
    faSquare,
} from "@fortawesome/free-solid-svg-icons";

const iconSizes = [
    "lg",
    "xs",
    "sm",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
];
</script>

<template>
    <div class="container py-4">
        <h2 class="h3">BSIcon Component Documentation</h2>

        <section class="my-4">
            <h3 class="h4">Overview</h3>
            <p>
                The <code>BSIcon</code> component displays a FontAwesome 6 icon.
                It serves as a wrapper around the
                <code>FontAwesomeIcon</code> component, inheriting most of its
                props. It can display an icon standalone or with accompanying
                text.
            </p>
        </section>

        <section class="my-4">
            <h3 class="h4">Props</h3>
            <p>
                The component accepts most props from the
                <code>FontAwesomeIcon</code> component. Refer to the
                <a
                    href="https://docs.fontawesome.com/web/use-with/vue/style"
                    target="_blank"
                    >FontAwesome documentation</a
                >
                for a complete list.
            </p>
            <ul>
                <li>
                    <code>icon</code> (Object | Array | String, required): The
                    FontAwesome icon definition.
                </li>
                <li>
                    <code>inline</code> (Boolean, optional, default:
                    <code>false</code>): If true, renders the icon within a
                    <code>&lt;span&gt;</code> tag; otherwise, uses a
                    <code>&lt;div&gt;</code>.
                </li>
                <li>
                    <code>size</code> (String, optional): Specifies the icon
                    size. Available options:
                    <span v-for="size of iconSizes" :key="size">
                        <code> {{ size }}</code>
                        <span v-if="size !== iconSizes[iconSizes.length - 1]"
                            >,
                        </span> </span
                    >.
                </li>
                <li>
                    <code>title</code> (String, optional): A title for the icon,
                    often used for accessibility.
                </li>
                <li>
                    Other <code>FontAwesomeIcon</code> props like
                    <code>border</code>, <code>fixedWidth</code>,
                    <code>flip</code>, <code>spin</code>, <code>pulse</code>,
                    etc., are also supported.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Slots</h3>
            <ul>
                <li>
                    <code>default</code>: Optional text to display alongside the
                    icon. If provided, the icon and text are wrapped in a
                    container.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h3 class="h4">Demonstration</h3>

            <section class="my-3">
                <h4 class="h5">Basic Icon</h4>
                <BSIcon :icon="faCoffee" />
            </section>

            <section class="my-3">
                <h4 class="h5">Icon with Text</h4>
                <BSIcon :icon="faUser">User Profile</BSIcon>
            </section>

            <section class="my-3">
                <h4 class="h5">Inline Icon</h4>
                <p>
                    This is an
                    <BSIcon :icon="faCoffee" inline />
                    inline icon within a paragraph.
                </p>
            </section>

            <section class="my-3">
                <h4 class="h5">Sized Icons</h4>
                <BSIcon :icon="faCoffee" size="xs" class="me-2" />
                <BSIcon :icon="faCoffee" size="sm" class="me-2" />
                <BSIcon :icon="faCoffee" size="lg" class="me-2" />
                <BSIcon :icon="faCoffee" size="2x" class="me-2" />
                <BSIcon :icon="faCoffee" size="3x" />
            </section>

            <section class="my-3">
                <h4 class="h5">Animated Icons</h4>
                <BSIcon :icon="faSpinner" spin class="me-2" />
                <BSIcon :icon="faSpinner" pulse class="me-2" />
            </section>

            <section class="my-3">
                <h4 class="h5">Icon with Title (Tooltip)</h4>
                <BSIcon :icon="faCoffee" title="Coffee Time!" />
            </section>

            <section class="my-3">
                <h4 class="h5">Fixed Width Icon</h4>
                <div><BSIcon :icon="faUser" fixed-width /> User</div>
                <div><BSIcon :icon="faCoffee" fixed-width /> Coffee</div>
            </section>

            <section class="my-3">
                <h4 class="h5">Bordered Icon</h4>
                <BSIcon :icon="faCoffee" border />
            </section>

            <section class="my-3">
                <h4 class="h5">Pulled Icon</h4>
                <BSIcon :icon="faCoffee" pull="left" class="me-2" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <BSIcon :icon="faUser" pull="right" class="ms-2" />
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </section>

            <section class="my-3">
                <h4 class="h5">Flipped Icons</h4>
                <BSIcon
                    :icon="faCoffee"
                    flip="horizontal"
                    class="me-3"
                    title="Flipped Horizontally"
                />
                <BSIcon
                    :icon="faCoffee"
                    flip="vertical"
                    class="me-3"
                    title="Flipped Vertically"
                />
                <BSIcon
                    :icon="faCoffee"
                    flip="both"
                    class="me-3"
                    title="Flipped Both"
                />
            </section>

            <section class="my-3">
                <h4 class="h5">Transformed Icons</h4>
                <BSIcon
                    :icon="faCoffee"
                    transform="shrink-6 left-4"
                    class="me-3"
                    title="Shrink 6, Left 4"
                />
                <BSIcon
                    :icon="faUser"
                    transform="grow-2 up-2"
                    class="me-3"
                    title="Grow 2, Up 2"
                />
                <BSIcon
                    :icon="faSpinner"
                    transform="rotate-90"
                    class="me-3"
                    title="Rotate 90"
                />
            </section>

            <section class="my-3">
                <h4 class="h5">Masked Icons</h4>
                <p>
                    Using <code>faCircle</code> as a mask for
                    <code>faSquare</code> (effectively making a square hole in a
                    circle):
                </p>
                <BSIcon
                    :icon="faSquare"
                    :mask="faCircle"
                    size="3x"
                    class="me-3"
                    title="Square masked by Circle"
                />

                <p>
                    Using <code>faCoffee</code> as a mask for
                    <code>faCircle</code>
                </p>
                <BSIcon
                    :icon="faCircle"
                    :mask="faCoffee"
                    size="3x"
                    class="me-3"
                    title="Circle masked by Coffee"
                />
            </section>
        </section>
    </div>
</template>

<style scoped>
.custom-class {
    background-color: hotpink;
    border: 3px solid purple;
}
</style>
