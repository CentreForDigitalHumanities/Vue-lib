<script lang="ts" setup>
import { v4 as UUIDv4 } from "uuid";
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

const elementId = computed<string>(() => {
    return props.id ?? `id_${UUIDv4().toString()}`;
});

const modalClasses = computed<string>(() => {
    let classes = "";

    if (props.centered) {
        classes += "modal-dialog-centered ";
    }

    switch (props.size) {
        case "small":
            classes += "modal-sm modal-fullscreen-sm-down";
            break;
        case "large":
            classes += "modal-lg modal-fullscreen-lg-down";
            break;
        case "extra-large":
            classes += "modal-xl modal-fullscreen-xl-down";
            break;
        default:
            classes += " modal-fullscreen-md-down";
            break;
    }

    return classes;
});

const headerClasses = computed<string>(() => {
    let classes = "";

    if (props.headerColor) {
        classes += `text-bg-${props.headerColor} `;
    }

    if (props.headerBold) {
        classes += "fw-bold ";
    }

    return classes;
});

let bsModal: Ref<BsModal> | undefined;
let modalElement: Ref<HTMLElement | null> | undefined;

function switchBsModal(show: boolean): void {
    if (show) {
        bsModal?.value?.show();
    } else {
        bsModal?.value?.hide();
    }
}

onMounted(() => {
    modalElement = ref(document.getElementById(elementId.value));
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
        <div :id="elementId" class="modal fade" tabindex="-1">
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
