<template>
    <div>
      <div>
        <MainNavbar />
        <router-view />
        <Bug />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import MainNavbar from '../../../components/shared/MainNavbar/index.vue';
  // import Bug from '../../../components/issueType/bug/index.vue';
  import Bug from '../../../components/issueType/bug/index.vue';
  
  export default defineComponent({
    components: {
         MainNavbar,
         Bug
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
  