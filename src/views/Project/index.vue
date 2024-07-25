<template>
  <div class="flex">
    <Sidebar :isCollapsed="isSidebarCollapsed" @toggleSidebar="toggleSidebar" />
    <div class="flex-1 transition-all duration-300"
      :class="{ 'ml-20': isSidebarCollapsed, 'ml-64': !isSidebarCollapsed }">
      <router-view />
    </div>
  </div>
</template>


<script lang="ts">
import { ref } from 'vue';
import Sidebar from '../../components/shared/Sidebar/index.vue';
import AllProjects from '../AllProject/index.vue';

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