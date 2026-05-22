<script lang="ts" setup>
import { ref } from "vue";
import BSModal from "./BSModal.vue";
import { BSButton } from ".";

interface Props {
    headerText?: string;
    confirmText?: string;
    abortText?: string;
    callback: () => void | Promise<void>;
}

const props = defineProps<Props>();
const emit = defineEmits<(e: "close") => void>();

const active = ref<boolean>(true);

function close() {
    active.value = false;
}

function runCallback() {
    const returnValue = props.callback();
    // If we got a promise from our callback, close only after it's resolved.
    if (returnValue instanceof Promise) {
        returnValue.finally(close);
    } else {
        close();
    }
}
</script>

<template>
    <BSModal
        :active="active"
        :show-close-button="false"
        :background-click-closes="false"
        :centered="true"
        @hidden="$emit('close')"
    >
        <template #title>
            <h5 class="modal-title">
                {{ headerText || "Are you sure?" }}
            </h5>
        </template>
        <slot />
        <template #footer>
            <div class="btn-group w-100">
                <BSButton variant="primary" @click="runCallback()">
                    {{ confirmText || "Yes" }}
                </BSButton>
                <BSButton variant="secondary" @click="close()">
                    {{ abortText || "No" }}
                </BSButton>
            </div>
        </template>
    </BSModal>
</template>
