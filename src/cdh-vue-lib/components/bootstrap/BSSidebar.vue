<script lang="ts" setup>
import { v4 as UUIDv4 } from "uuid";
import { computed } from "vue";

interface Props {
    id?: string | null;
    placement?: "left" | "right";
    mobilePlacement?: "top" | "bottom";
    stickySidebar?: boolean;
    mobileStickySidebar?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    id: null,
    placement: "left",
    mobilePlacement: "top",
    stickySidebar: false,
    mobileStickySidebar: false,
});

const elId = computed(() => {
    if (props.id !== null) return props.id;

    // Identifiers should start with a letter, but UUIDs aren't guaranteed to do that...
    return "id_" + UUIDv4().toString().replace(/-/g, "");
});

const placementClasses = computed(() => {
    let classes = "";

    if (props.placement === "right") classes += "uu-sidebar-right ";
    if (props.mobilePlacement === "bottom")
        classes += "uu-sidebar-mobile-bottom ";
    if (props.stickySidebar) classes += "uu-sidebar-sticky ";
    if (props.mobileStickySidebar) classes += "uu-sidebar-mobile-sticky ";

    return classes;
});
</script>

<template>
    <div class="uu-sidebar-container" :class="placementClasses">
        <aside class="uu-sidebar">
            <button
                class="uu-sidebar-toggle"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#' + elId"
                aria-expanded="false"
            >
                <slot name="sidebar-button" />
            </button>
            <div :id="elId" class="uu-sidebar-collapse collapse">
                <slot name="sidebar" />
            </div>
        </aside>
        <section class="uu-sidebar-content">
            <slot />
        </section>
    </div>
</template>
