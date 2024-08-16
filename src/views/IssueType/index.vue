<template>
    <div class="flex">
      <MainNavbar />
    <!-- Sidebar -->
    <SidebarIssueType :isCollapsed="false" />

    <!-- Main Content -->
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import MainNavbar from '../../components/shared/MainNavbar/index.vue';
import SideBarIssueType from '../../components/shared/SidebarIssueType/index.vue';

import { ref } from 'vue';
const isSidebarCollapsed = ref(false);

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};
</script>