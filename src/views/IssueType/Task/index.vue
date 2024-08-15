<template>
    <div>
      <div>
        <MainNavbar />
        <router-view />
        <TaskIssue />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import MainNavbar from '../../../components/shared/MainNavbar/index.vue';
  import TaskIssue from '../../../components/issueType/task/index.vue';
  
  export default defineComponent({
    components: {
         MainNavbar,
         TaskIssue
    },
    setup() {
      onMounted(() => {
        // fetchData();
      });
  
      return {
        // isLoading,
      };
    },
  });
  </script>
  
  <style scoped>  
  </style>
  