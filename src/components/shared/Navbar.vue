<template>
  <div class="h-[10vh] fixed top-0 left-0 right-0 bg-white z-50 font-charlie flex">
    <img src="../../assets/img/logo_no_text.png" alt="" class="h-full w-20">
    <div class="container mx-auto flex items-center h-full justify-between ml-20">
      <a href="" class="flex items-center space-x-1 select-none">
        <img src="../../assets/img/Jira_Logo.png" alt="Logo" class="block" width="75" height="75">
        <!-- <span class="text-custom-dark text-2xl font-medium">Jira</span> -->
      </a>
      <div class="flex items-center space-x-4 select-none">
        <button class="ml-4 bg-button-color text-white rounded-full px-8 py-3 font-bold hover:bg-button-color-hover">
          Get it free
        </button>
        <div class="h-full border-l-2 border-black mx-2" style="height: 24px;"></div>
        <button @click="goToAuthorPage" class="mr-0 bg-white text-button-color text-xs font-bold px-4 py-4 hover:bg-gray-100">
          Sign in
        </button>
      </div>
    </div>
    <!-- <section class="h-[70vh] flex justify-center bg-gray-100 ">
      <div class="text-center pt-28">
        <div class="font-charlie-display flex items-center justify-center flex-wrap">
            <span class="text-6xl font-bold mb-4 mx-2">Great outcomes</span>
            <span class="text-6xl mb-4 mx-2 font-normal" >start with</span>
            <div class="flex flex-col items-center mb-4 mx-2 ">
                <span ref="jiraText" class="text-6xl mb-0 mt-5">Jira</span>
                <img :style="{ width: computedImgWidth + 'px' }" src="../assets/img/signal.webp" alt="Jira Logo" class="block h-auto">
            </div>
        </div>
        <div class="block mb-8 font-charlie text-base">The only project management tool you need to plan and track work across every team.</div>
        <button class="bg-button-color text-white rounded-full px-8 py-4 font-semibold hover:bg-button-color-hover font-charlie">Get Jira free</button>

      </div>
    </section> -->
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter();
    
    const goToAuthorPage = () => {
      router.push('/author');
    };

    return {
      goToAuthorPage
    };
  }
};
</script>
