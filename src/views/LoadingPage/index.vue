<!-- <template>
    <div class="loading-container">
      <div class="loader"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted ,ref} from 'vue';
  import { useRouter } from 'vue-router';
  import { useProjectStore } from '../../stores/projectStores/projectStore';
  
  export default defineComponent({
    name: 'Loading',
    setup() {
      const router = useRouter();
      const projectStore = useProjectStore();
      const loadingFetch = ref(true);
  
      const fetchData = async () => {
        try {
          await projectStore.loadProjects();
          if (projectStore.error) {
            console.error('Failed to fetch projects:', projectStore.error);
            router.push('/mainpage'); // Redirect to /mainpage if there is an error
          } else {
            console.log('Successfully fetched projects:', projectStore.projects);
            router.push('/mainpage'); // Redirect to /mainpage after successful data fetching
          }
        } catch (error: any) {
          console.error('Failed to fetch projects:', error);
          router.push('/mainpage'); // Redirect to /mainpage if there is an exception
        } finally {
          loadingFetch.value = false;
        }
      };
  
      onMounted(() => {
        fetchData();
      });
  
      return {};
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
  </style>
   -->