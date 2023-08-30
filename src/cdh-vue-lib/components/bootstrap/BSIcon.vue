<script lang="ts" setup>
/**
 * Displays a given FontAwesome 6 icon in an icon container
 *
 * Usage:
 * <Icon icon='x' />
 * <Icon icon='x'>Optional text</Icon>
 *
 * Without optional text this will display as an icon.
 * With it, it will wrap the icon container into an icon-text container
 *
 * Props:
 * see the font-awesome-icon component docs, most props are inherited from there.
 * Extra props:
 * inline - whether to display the icon in a span or div. Optional, defaults to false
 * classes - any additional CSS classes one wants. Optional
 */
import { computed } from "vue";

interface Props {
    inline?: boolean;
    // From font-awesome-icon
    border?: boolean;
    fixedWidth?: boolean;
    flip?: boolean | "horizontal" | "vertical" | "both";
    icon: object | Array<string> | string;
    mask?: object | Array<string> | string | null;
    listItem?: boolean;
    pull?: "right" | "left" | null;
    pulse?: boolean;
    rotation?: 90 | 180 | 270 | "90" | "180" | "270" | null;
    swapOpacity?: boolean;
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
        | "10x"
        | null;
    spin?: boolean;
    transform?: object | string | null;
    symbol?: boolean | string;
    title?: string | null;
    inverse?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    inline: false,
    size: null,
    flip: false,
    mask: null,
    pull: null,
    rotation: null,
    transform: null,
    symbol: false,
    title: null,
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
                <font-awesome-icon
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
        <font-awesome-icon
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
