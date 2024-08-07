<template>
    <div>
      <!-- Loading Spinner -->
      <!-- <div v-if="isLoading" class="loading-container">
        <div class="loader"></div>
      </div> -->
  
      <!-- Main Content (visible after loading is done) -->
      <div>
        <MainNavbar />
        <router-view />
        <ProfileHeader />
        <div class="flex flex-row container">
            <div class="basis-1/3">
                <ProfileDetails />
            </div>
            <div class="basis-2/3 ml-6">
                <WorkOn />
            </div>
        </div>
        <!-- <div class="flex flex-row">
            <div class="basis-1/3">
                
                <ProfileDetails />
            </div>
            
            <div class="container basis-2/3">
                <WorkOn />
            </div>
        </div> -->
        
        
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import MainNavbar from '../../components/shared/MainNavbar/index.vue';
  import ProfileHeader from '../../components/profile/profileHeader/index.vue';
  import ProfileDetails from '../../components/profile/profileDetails/index.vue';
  import WorkOn from '../../components/profile/workOn/index.vue';
  // import { useProjectStore } from '../../stores/projectStores/projectStore';
  
  export default defineComponent({
    components: {
         MainNavbar,
         ProfileHeader,
         ProfileDetails,
         WorkOn
    },
    setup() {
      // const projectStore = useProjectStore();
      // const isLoading = ref(true);
  
      // const fetchData = async () => {
      //   try {
      //     await projectStore.loadProjects();
      //     if (projectStore.error) {
      //       console.error('Failed to fetch projects:', projectStore.error);
        
      //     } else {
      //       console.log('Successfully fetched projects:', projectStore.projects);
  
      //     }
      //   } catch (error: any) {
      //     console.error('Failed to fetch projects:', error);
      //   } finally {
      //     isLoading.value = false;
      //   }
      // };
  
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
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
  }
  
  .loader {
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .container {
  max-width: 1200px;
}
  </style>
  