<script lang="ts" setup>
import { computed } from "vue";

export type BSButtonVariant =
    | "primary"
    | "secondary"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | "blue"
    | "cream"
    | "dark-blue"
    | "indigo"
    | "purple"
    | "pink"
    | "red"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "cyan"
    | "white"
    | "gray"
    | "gray-dark";

export type BSButtonSize = "small" | "normal" | "large";

// The type warnings for the optional string props are the lesser of two evils.
// These props here should be added to withDefaults() with a value of undefined,
// but the generated type for the prop is then `undefined` for some reason.
// This is most likely a bug in the compiler.
// Related: https://github.com/vuejs/core/issues/13236
interface Props {
    id?: string;
    href?: string;
    name?: string;
    variant?: BSButtonVariant;
    size?: BSButtonSize;
    outlined?: boolean;
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    input?: "submit" | "reset" | "button";
    newTab?: boolean;
    cssClasses?: string;
}

const props = withDefaults(defineProps<Props>(), {
    variant: "dark",
    size: "normal",
    outlined: false,
    active: false,
    disabled: false,
    loading: false,
    input: "button",
    newTab: false,
});

const buttonClasses = computed(() => {
    const classes = ["btn"];

    if (props.size === "large") {
        classes.push("btn-lg");
    } else if (props.size === "small") {
        classes.push("btn-sm");
    }

    if (props.outlined) {
        classes.push(`btn-outline-${props.variant}`);
    } else {
        classes.push(`btn-${props.variant}`);
    }

    if (props.active) {
        classes.push("active");
    }

    if (props.disabled) {
        classes.push("cursor-not-allowed");
    }

    if (props.cssClasses) {
        classes.push(props.cssClasses);
    }

    return classes.join(" ");
});
</script>

<template>
    <a
        v-if="href"
        :id="id"
        :href="href"
        :class="buttonClasses"
        :target="newTab ? '_blank' : '_self'"
    >
        <span class="btn-text"><slot /></span>
    </a>
    <button
        v-else
        :id="id"
        :type="input"
        :class="buttonClasses"
        :name="name"
        :disabled="disabled"
    >
        <span class="btn-text"><slot /></span>
        <span
            v-if="loading"
            class="spinner-border spinner-border-sm ms-2"
            role="status"
            aria-hidden="true"
        />
    </button>
</template>

