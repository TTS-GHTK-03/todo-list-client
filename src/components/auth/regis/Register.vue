<template>
  
  <div class="select-none border-2 z-50 w-96 shadow-lg bg-white h-3/4 flex flex-col items-center border-gray-300 rounded-lg absolute  pt-2" style="top:150px">
    <img src="../../../assets/img/atlassian.png" alt="atlassian" class="w-3/4 min-w-11 select-none px-0 py-10">
      <div class="flex flex-col items-center w-full font-apple select-text">
        <span class="text-gray-800 text-center strong text-lg font-semibold">Sign up to continue</span>
        <form @submit.prevent="handleRegis" class="flex flex-col items-center mt-4 w-full">
          <input type="text" placeholder="Enter your email" v-model="email"
          class="border-2 border-gray-300 rounded px-2 py-1 w-3/4 font-normal focus:outline-none focus:border-blue-500 placeholder-gray-700 text-sm placeholder-opacity-80 h-10">
          <div class="w-3/4 mt-2">
            <span class="text-center smaller-text">
              By signing up, I accept the Atlassian 
              <span class="text-[#2f66e6] hover:underline cursor-pointer">Cloud Terms of Service</span>
              and acknowledge the 
              <span class="text-[#2f66e6] hover:underline cursor-pointer">Privacy Policy</span>
            </span>
          </div>
          <div v-if="errorMessage" class="text-red-500 mt-2 text-xs w-3/4 text-left font-apple flex-1">{{ errorMessage }}</div>
          <button :disabled="loading" type="submit" class="select-none bg-[#2d66e6] text-white rounded px-4 py-1 mt-4 w-3/4 hover:bg-[#1c4cb8] h-10 font-medium flex items-center justify-center">
            <span v-if="loading" class="loader"></span>
            <span v-else>Sign up</span>
          </button>
        </form>
        <div class="flex items-center mt-4 mb-0 space-x-2">
          <router-link to="/author/" class="list-none text-[#2f66e6] text-sm hover:underline cursor-pointer mb-0">
            Already have an Atlassian account? Log in
          </router-link>        
        </div>
        <footer class="w-full flex flex-col items-center mt-4 space-y-2">
          <hr class="border-t-2 border-gray-300 w-3/4 mb-5">
          <img src="../../../assets/img/atlassian.png" alt="atlassian" class="max-h-6 select-none grayscale">
          <span class="text-center text-xs pt-4">One account for Jira, Confluence, Trello and 
            <span class="text-[#2f66e6] hover:underline cursor-pointer">more</span>.
          </span>
          <div class="flex flex-col items-center ">
            <span class="text-center text-xs leading-3 pt-0">This site is protected by reCAPTCHA and the Google  
              <span class="text-[#2f66e6] hover:underline cursor-pointer">Privacy</span>.
            </span>
            <span class="text-center text-xs p-0">
              <span class="text-[#2f66e6] hover:underline cursor-pointer">Policy</span>
              and <span class="text-[#2f66e6] hover:underline cursor-pointer">Term of Service</span> apply
            </span>
          </div>
        </footer>
      </div>
    </div>

  </template>
  
  <style scoped>
  .smaller-text {
    font-size: 12px; /* Adjust the font size as needed */
  }
  </style>
  
  <script lang="ts">

  import {useRegisAccountStore} from '../../../stores/authStores/regisStore';
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'Register',
    setup() {
    const router = useRouter();
    const regisStore = useRegisAccountStore();
    const email = ref('');
    const errorMessage = ref('');
    const loading = ref(false);

    const handleRegis = async () => {
      loading.value = true;
      errorMessage.value = '';
      try {
        console.log('Attempting to login with:', { email: email.value });
        await regisStore.regisAccount(email.value);
        if (regisStore.error) {
      if (regisStore.error === 'Account has already been registered') {
        // Chuyển sang tab login
        console.log('Account has already been registered, redirecting to login.');
        router.push('/author'); // Thay đổi đường dẫn nếu cần
      } else {
        errorMessage.value = regisStore.error;
      }
    } else {
      console.log('Email sent successfully.');
      router.push('/author/validate');
    }
      } catch (error: any) {
        console.log('Error message:', error.message);
        errorMessage.value = 'An error occurred.';
      } finally {
        loading.value = false;
      }
    };

    return {
      email,
      errorMessage,
      loading,
      handleRegis,
    };
  },
});
</script>

<style scoped>
.loader {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.select-none {
  user-select: none;
}
</style>
  