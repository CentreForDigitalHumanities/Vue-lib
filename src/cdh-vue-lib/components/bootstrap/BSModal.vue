<script lang="ts" setup>
import { ref, type Ref, watch, computed, onMounted, onUnmounted } from "vue";
import { Modal as BsModal } from "bootstrap";

interface Props {
    id?: string | null;
    active: boolean;
    hasBackground?: boolean;
    backgroundClickCloses?: boolean;
    showCloseButton?: boolean;
    size?: "small" | "default" | "large" | "extra-large";
    headerColor?: string | undefined | null;
    headerBold?: boolean;
    centered?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    id: null,
    hasBackground: true,
    backgroundClickCloses: true,
    showCloseButton: true,
    size: "default",
    headerColor: "primary",
    headerBold: true,
    centered: false,
});

const emit = defineEmits<{
    (e: "shown"): void;
    (e: "hidden"): void;
    (e: "close-clicked"): void;
}>();

const modalClasses = computed<string>(() => {
    const classes: string[] = [];

    if (props.centered) {
        classes.push("modal-dialog-centered");
    }

    switch (props.size) {
        case "small":
            classes.push("modal-sm modal-fullscreen-sm-down");
            break;
        case "large":
            classes.push("modal-lg modal-fullscreen-lg-down");
            break;
        case "extra-large":
            classes.push("modal-xl modal-fullscreen-xl-down");
            break;
        default:
            classes.push("modal-fullscreen-md-down");
            break;
    }

    return classes.join(" ");
});

const headerClasses = computed<string>(() => {
    const classes: string[] = [];

    if (props.headerColor) {
        classes.push(`text-bg-${props.headerColor}`);
    }

    if (props.headerBold) {
        classes.push("fw-bold");
    }

    return classes.join(" ");
});

let bsModal: Ref<BsModal> | undefined;

// With Vue 3.5 we will be able to use useTemplateRef instead.
const modalElement = ref<HTMLDivElement | null>(null);

function switchBsModal(show: boolean): void {
    if (show) {
        bsModal?.value?.show();
    } else {
        bsModal?.value?.hide();
    }
}

onMounted(() => {
    // Should not happen.
    if (!modalElement.value) {
        return;
    }

    let backdrop: boolean | "static" = props.hasBackground;

    if (backdrop && !props.backgroundClickCloses) {
        backdrop = "static";
    }

    bsModal = ref(
        new BsModal(modalElement.value, {
            backdrop,
        }),
    );

    modalElement.value.addEventListener("hidden.bs.modal", () =>
        emit("hidden"),
    );
    modalElement.value.addEventListener("shown.bs.modal", () => emit("shown"));

    switchBsModal(props.active);
});

onUnmounted(() => {
    bsModal?.value?.dispose();
});

watch(
    () => props.active,
    (newValue) => {
        switchBsModal(newValue);
    },
);
</script>

<template>
    <Teleport to="body">
        <div ref="modalElement" class="modal fade" tabindex="-1">
            <div
                class="modal-dialog modal-dialog-scrollable"
                :class="modalClasses"
            >
                <div class="modal-content">
                    <div
                        v-if="$slots.title || showCloseButton"
                        class="modal-header"
                        :class="headerClasses"
                    >
                        <p v-if="$slots.title" class="modal-title mw-100">
                            <slot name="title" />
                        </p>
                        <button
                            v-if="showCloseButton"
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <div class="modal-body">
                        <slot />
                    </div>

                    <div
                        v-if="$slots.footer"
                        class="modal-footer justify-content-start"
                    >
                        <slot name="footer" />
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
