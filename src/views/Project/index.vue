<template>
  <div class="flex">
    <Sidebar :isCollapsed="isSidebarCollapsed" @toggleSidebar="toggleSidebar" />

    <div class="flex-1 transition-all duration-300"
      :class="{ 'ml-20': isSidebarCollapsed, 'ml-64': !isSidebarCollapsed }">
      <router-view />
    </div>
    
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from '../../components/shared/Sidebar/index.vue';

const isSidebarCollapsed = ref(false);

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
}
</script>