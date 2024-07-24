<template>
    <div class="flex">
      <Sidebar :isCollapsed="isSidebarCollapsed" @toggleSidebar="toggleSidebar"/>
      <div class="flex-1 transition-all duration-300" :class="{'ml-20': isSidebarCollapsed, 'ml-64': !isSidebarCollapsed}">
        <AllProjects />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import Sidebar from '../shared/Sidebar.vue';
  import AllProjects from './AllProjects.vue';
  
  export default {
    components: { Sidebar, AllProjects },
    setup() {
      const isSidebarCollapsed = ref(false);
  
      function toggleSidebar() {
        isSidebarCollapsed.value = !isSidebarCollapsed.value;
      }
  
      return {
        isSidebarCollapsed,
        toggleSidebar
      };
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add any custom styles here if needed */
  </style>
  