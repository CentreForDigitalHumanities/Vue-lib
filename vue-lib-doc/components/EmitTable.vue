<script lang="ts" setup>
export interface EmitDefinition {
    eventName: string;
    payload?: string;
    description: string;
}

defineProps<{
    emitDefs: EmitDefinition[];
}>();
</script>

<template>
    <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Event name</th>
                    <th>Payload</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emitItem in emitDefs" :key="emitItem.eventName">
                    <td>
                        <code>{{ emitItem.eventName }}</code>
                    </td>
                    <td>
                        <code>{{ emitItem.payload ?? "None" }}</code>
                    </td>
                    <td>{{ emitItem.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
