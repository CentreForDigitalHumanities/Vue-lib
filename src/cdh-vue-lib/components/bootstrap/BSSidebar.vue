<script lang="ts" setup>
import useGeneratedId from "@/cdh-vue-lib/composables/useGeneratedId";
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

const generatedId = useGeneratedId();
const elementId = computed(() => {
    return props.id ?? generatedId;
});

const placementClasses = computed(() => {
    const classes: string[] = [];

    if (props.placement === "right") {
        classes.push("uu-sidebar-right");
    }
    if (props.mobilePlacement === "bottom") {
        classes.push("uu-sidebar-mobile-bottom");
    }
    if (props.stickySidebar) {
        classes.push("uu-sidebar-sticky");
    }
    if (props.mobileStickySidebar) {
        classes.push("uu-sidebar-mobile-sticky");
    }

    return classes.join(" ");
});
</script>

<template>
    <div class="uu-sidebar-container" :class="placementClasses">
        <aside class="uu-sidebar">
            <button
                class="uu-sidebar-toggle"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#' + elementId"
                aria-expanded="false"
            >
                <slot name="sidebar-button" />
            </button>
            <div :id="elementId" class="uu-sidebar-collapse collapse">
                <slot name="sidebar" />
            </div>
        </aside>
        <section class="uu-sidebar-content">
            <slot />
        </section>
    </div>
</template>
