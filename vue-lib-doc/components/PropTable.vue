<script lang="ts" setup>
export interface PropDefinition {
    id: string;
    type: string;
    required: boolean | string;
    defaultValue?: string;
    description: string;
}

defineProps<{
    propsData: PropDefinition[];
}>();

function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
}
</script>

<template>
    <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prop in propsData" :key="prop.id">
                    <td>
                        <code>{{ prop.id }}</code>
                    </td>
                    <td>{{ prop.type }}</td>
                    <td>
                        <span v-if="isBoolean(prop.required)">{{
                            prop.required === true
                                ? "Yes"
                                : prop.required === false
                                ? "No"
                                : prop.required
                        }}</span>
                        <span v-else>{{ prop.required }}</span>
                    </td>
                    <td v-if="prop.defaultValue && prop.defaultValue !== '-'">
                        <code>{{ prop.defaultValue ?? "-" }}</code>
                    </td>
                    <td v-else>-</td>
                    <td>{{ prop.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
