<script lang="ts" setup>
import { computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// The type warnings for the optional string props are the lesser of two evils.
// These props here should be added to withDefaults() with a value ofundefined,
// but the generated type for the prop is then `undefined`.
// This is most likely a bug in the compiler.
// Related: https://github.com/vuejs/core/issues/13236
interface Props {
    inline?: boolean;
    border?: boolean;
    fixedWidth?: boolean;
    icon: object | Array<string> | string;
    listItem?: boolean;
    pulse?: boolean;
    swapOpacity?: boolean;
    spin?: boolean;
    symbol?: boolean | string;
    inverse?: boolean;
    flip?: "horizontal" | "vertical" | "both";
    mask?: object | Array<string> | string;
    pull?: "right" | "left";
    rotation?: 90 | 180 | 270 | "90" | "180" | "270";
    size?:
        | "lg"
        | "xs"
        | "sm"
        | "1x"
        | "2x"
        | "3x"
        | "4x"
        | "5x"
        | "6x"
        | "7x"
        | "8x"
        | "9x"
        | "10x";
    title?: string;
    transform?: object | string;
}

const props = withDefaults(defineProps<Props>(), {
    inline: false,
    symbol: false,
});

const element = computed(() => {
    if (props.inline) return "span";
    return "div";
});
</script>

<template>
    <!-- Dynamically determine if the container is a div or a span (inline) -->
    <component :is="element">
        <span v-if="$slots.default">
            <span class="icon me-1">
                <FontAwesomeIcon
                    :border="border"
                    :fixed-width="fixedWidth"
                    :flip="flip"
                    :icon="icon"
                    :mask="mask"
                    :list-item="listItem"
                    :pull="pull"
                    :pulse="pulse"
                    :rotation="rotation"
                    :swap-opacity="swapOpacity"
                    :size="size"
                    :spin="spin"
                    :transform="transform"
                    :symbol="symbol"
                    :title="title"
                    :inverse="inverse"
                />
            </span>
            <span><slot /></span>
        </span>
        <FontAwesomeIcon
            v-else
            :border="border"
            :fixed-width="fixedWidth"
            :flip="flip"
            :icon="icon"
            :mask="mask"
            :list-item="listItem"
            :pull="pull"
            :pulse="pulse"
            :rotation="rotation"
            :swap-opacity="swapOpacity"
            :size="size"
            :spin="spin"
            :transform="transform"
            :symbol="symbol"
            :title="title"
            :inverse="inverse"
        />
    </component>
</template>

<style scoped></style>
