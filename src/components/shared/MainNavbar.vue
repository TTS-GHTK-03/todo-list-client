<template>
  <div class="h-[60px] fixed top-0 left-0 right-0 bg-white z-40 border-b border-black border-opacity-20">
    <div class="container mx-auto flex items-center h-full justify-between select-none">
      <div class="flex ml-[10px]">
        <img src="../../assets/img/Jira_Logo.png" alt="Logo Jira" class="my-4 mr-10 h-[35px] w-[70px]">
        <ul class="ml-4 flex items-center relative">
          <li v-for="(button, index) in buttons" :key="index" class="font-apple font-medium px-1 relative">
            <button
              :class="[
                'text-[#44546F] px-2 py-2 mt-4  rounded transition duration-300',
                activeModal === index ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 'hover:bg-gray-200'
              ]"
              ref="buttonRefs"
              :data-index="index"
              @click="openModal(index, $event)"
            >
              {{ button }}
              <i class="fas fa-chevron-down text-xs"></i>
            </button>

            <component
              :is="modalComponents[index]"
              v-if="activeModal === index"
              :isVisible="activeModal === index"
              @update:isVisible="closeModal"
              class="absolute top-[60px] left-0 min-w-[320px] transition-transform duration-300 modal"
            />
          </li>
        </ul>
      </div>
      <div class="flex items-center">
        <button class="mx-2 text-gray-600 hover:text-gray-900">
          <i class="fas fa-bell"></i>
        </button>
        <button class="mx-2 text-gray-600 hover:text-gray-900">
          <i class="fas fa-user"></i>
        </button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, markRaw } from 'vue';
import YourWorkModal from '../mainpage/modal/YourWorkModal.vue';
import ProjectModal from '../mainpage/modal/ProjectModal.vue';
import FilterModal from '../mainpage/modal/FilterModal.vue';
import TeamModal from '../mainpage/modal/TeamModal.vue';
export default defineComponent({
  name: 'MainNavbar',
  components: {
    YourWorkModal: markRaw(YourWorkModal),
    ProjectModal: markRaw(ProjectModal),
    FilterModal: markRaw(FilterModal),
    TeamModal: markRaw(TeamModal),
  },
  data() {
    return {
      buttons: ['Your Work', 'Projects', 'Filters', 'Teams'],
      activeModal: null as number | null,
      modalComponents: [YourWorkModal, ProjectModal, FilterModal, TeamModal] // Add other modal components here
    };
  },
  methods: {
    openModal(index: number, event: MouseEvent) {
      this.activeModal = index;
      event.stopPropagation();
      this.$nextTick(() => {
        document.addEventListener('click', this.handleOutsideClick);
      });
    },
    closeModal() {
      this.activeModal = null;
      document.removeEventListener('click', this.handleOutsideClick);
    },
    handleOutsideClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const modals = document.querySelectorAll('.modal');
      const isClickInsideModal = Array.from(modals).some(modal => modal.contains(target));
      if (!isClickInsideModal) {
        this.closeModal();
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
});
</script>

<style scoped>
/* No additional styles needed */
</style>
