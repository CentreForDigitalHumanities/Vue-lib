<script lang="ts" setup>
const componentTabs = [
    { name: "BSButton", path: "/vue-lib-components/bs-button" },
    { name: "BSCard", path: "/vue-lib-components/bs-card" },
    { name: "BSDropdown", path: "/vue-lib-components/bs-dropdown" },
    {
        name: "BSDropdownMultiSelect",
        path: "/vue-lib-components/bs-dropdown-multi-select",
    },
    { name: "BSIcon", path: "/vue-lib-components/bs-icon" },
    { name: "BSModal", path: "/vue-lib-components/bs-modal" },
    { name: "BSMultiSelect", path: "/vue-lib-components/bs-multi-select" },
    { name: "BSPagination", path: "/vue-lib-components/bs-pagination" },
    { name: "BSRadioSelect", path: "/vue-lib-components/bs-radio-select" },
    { name: "BSSelect", path: "/vue-lib-components/bs-select" },
    { name: "BSSidebar", path: "/vue-lib-components/bs-sidebar" },
    { name: "DSCList", path: "/vue-lib-components/dsc-list" },
    { name: "UUList", path: "/vue-lib-components/uu-list" },
];
</script>
<template>
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <NuxtLink class="nav-link" to="/" active-class="active">
                Home
            </NuxtLink>
        </li>
        <li v-for="tab in componentTabs" :key="tab.path" class="nav-item">
            <NuxtLink class="nav-link" :to="tab.path" active-class="active">
                {{ tab.name }}
            </NuxtLink>
        </li>
    </ul>
</template>
