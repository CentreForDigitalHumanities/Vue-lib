<script lang="ts" setup>
/**
 * Button generates a Button!
 *
 * Usage:
 *
 * As link:
 * <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Text</Button>
 *
 * As HTML form button:
 * <Button name="example">Text</Button>
 *
 * Combine with the input prop to set it's role (submit and such)
 *
 * As HTML plain button:
 * <Button>Text</Button>
 * (Technically the same as the last one, but without any special stuff)
 *
 * Props:
 * href?: use if one wants a simple link
 * to?: use if one wants a Nuxt link.
 * name?: use if one wants a HTML button. Will set the name attribute.
 *
 * One must use exactly one of the three options above. Undefined behavior looms otherwise
 *
 * variant?: specifies the color, see spec for options
 * size?: small, normal, large.
 * outlined?: set to true if one wants colored outlines instead of colored background
 * active?: if true, sets the active css class
 * disabled?: HTML button only. Sets the 'disabled' attribute on the button if true
 * loading?: if true, adds the Bulma loading class for a nice 'working' animation
 * input?: HTML button only. 'submit', 'reset' or 'button'. Dictates what kind of HTML button it is
 * new_tab?: link and nuxt link only. Opens said link in a new tab if true
 */
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
    id?: string | null;
    href?: string;
    name?: string;
    variant?: BSButtonVariant;
    size?: BSButtonSize;
    outlined?: boolean;
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    input?: "submit" | "reset" | "button" | undefined;
    newTab?: boolean;
    cssClasses?: string;
}
const props = withDefaults(defineProps<Props>(), {
    id: null,
    variant: "dark",
    size: "normal",
    outlined: false,
    active: false,
    disabled: false,
    loading: false,
    input: "button",
    newTab: false,
    cssClasses: "",

    href: undefined,
    to: undefined,
    name: undefined,
});

const buttonClasses = computed(() => {
    let classes = "btn ";

    if (props.size === "large") classes += "btn-lg ";
    else if (props.size === "small") classes += "btn-sm ";

    if (props.outlined) classes += "btn-outline-";
    else classes += "btn-";
    classes += `${props.variant} `;

    if (props.loading) classes += `btn-loading `;

    if (props.active) classes += "active ";

    if (props.disabled) classes += "cursor-not-allowed ";

    return classes;
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
    </button>
</template>

<style scoped lang="scss"></style>
