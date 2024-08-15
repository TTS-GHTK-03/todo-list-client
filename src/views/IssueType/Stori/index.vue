<template>
    <div>
      <div>
        <MainNavbar />
        <router-view />
        <StoryIssue />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import MainNavbar from '../../../components/shared/MainNavbar/index.vue';
  import StoryIssue from '../../../components/issueType/stori/index.vue';
  
  export default defineComponent({
    components: {
         MainNavbar,
         StoryIssue
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
  