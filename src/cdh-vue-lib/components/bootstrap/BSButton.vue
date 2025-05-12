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

interface Props {
    href: string;
    name: string;
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
    // Setting 'undefined' here would be more correct, but that leads to
    // an incorrect typing of this prop as 'undefined'.
    href: "",
    name: "",
    variant: "dark",
    size: "normal",
    outlined: false,
    active: false,
    disabled: false,
    loading: false,
    input: "button",
    newTab: false,
    cssClasses: "",
});

const buttonClasses = computed(() => {
    let classes = "btn ";

    if (props.size === "large") {
        classes += "btn-lg ";
    } else if (props.size === "small") {
        classes += "btn-sm ";
    }

    if (props.outlined) {
        classes += "btn-outline-";
    } else {
        classes += "btn-";
    }
    classes += `${props.variant} `;

    if (props.active) {
        classes += "active ";
    }

    if (props.disabled) {
        classes += "cursor-not-allowed ";
    }

    return (classes += ` ${props.cssClasses}`);
});
</script>

<template>
    <a
        v-if="href"
        :href="href"
        :class="buttonClasses"
        :target="newTab ? '_blank' : '_self'"
    >
        <span class="btn-text"><slot /></span>
    </a>
    <button
        v-else
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

<style scoped lang="scss"></style>
