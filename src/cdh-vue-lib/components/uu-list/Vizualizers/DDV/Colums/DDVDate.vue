<script lang="ts" setup>
import { DDCListData, DDCDate } from "../../../types";
import { computed } from "vue";

interface Props {
    item: DDCListData;
    column: DDCDate;
}

const props = defineProps<Props>();

const value = computed(() => {
    let date: Date | null = null;
    try {
        date = new Date(props.item[props.column.field]);
    } catch (e) {
        console.error(e);
        return "";
    }

    let language = undefined;
    if (props.column.language !== undefined && props.column.language !== null)
        language = props.column.language;

    if (typeof props.column.format === "string") {
        let options = null;
        switch (props.column.format) {
            case "date":
                options = {
                    dateStyle: "medium",
                };
                break;
            case "time":
                options = {
                    timeStyle: "short",
                };
                break;
            case "datetime":
                options = {
                    dateStyle: "medium",
                    timeStyle: "short",
                };
                break;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore Intl.DateTimeFormat isn't typed correctly by TS
        const formatter = new Intl.DateTimeFormat(language, options);
        return formatter.format(date);
    }

    // apparently 'null' is an object. fml
    if (
        typeof props.column.format === "object" &&
        props.column.format !== null
    ) {
        const formatter = new Intl.DateTimeFormat(
            language,
            props.column.format
        );
        return formatter.format(date);
    }

    const formatter = new Intl.DateTimeFormat(language);
    return formatter.format(date);
});
</script>

<template>
    <span :class="column.classes">
        {{ value }}
    </span>
</template>
