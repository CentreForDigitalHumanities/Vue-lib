<script lang="ts" setup>
export interface SlotDefinition {
    slotName: string;
    description: string;
}

defineProps<{
    slotsData: SlotDefinition[];
}>();
</script>

<template>
    <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Slot name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="slotItem in slotsData" :key="slotItem.slotName">
                    <td>
                        <code>{{ slotItem.slotName }}</code>
                    </td>
                    <td>{{ slotItem.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
