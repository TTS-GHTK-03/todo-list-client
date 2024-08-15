<template>
  <div class="h-[60px] fixed top-0 left-0 right-0 bg-white z-30 border-b border-black border-opacity-20">
    <div class="container mx-auto flex items-center h-full justify-between select-none">
      <div class="flex ml-[10px]">

        <div class="my-4 flex items-center">
          <!-- fix  -->
          <svg fill="none" height="28" viewBox="0 0 26 32" focusable="false" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="#357DE8"
              d="M7.967 21.323H5.748C2.401 21.323 0 19.273 0 16.271h11.933c.618 0 1.018.44 1.018 1.062V29.34c-2.983 0-4.984-2.416-4.984-5.784zm5.894-5.967h-2.22c-3.346 0-5.747-2.013-5.747-5.015h11.932c.618 0 1.055.402 1.055 1.025v12.007c-2.983 0-5.02-2.416-5.02-5.784zm5.93-5.93h-2.22c-3.347 0-5.748-2.05-5.748-5.052h11.933c.618 0 1.019.439 1.019 1.025v12.007c-2.983 0-4.984-2.416-4.984-5.784z">
            </path>
          </svg>
          <span class="ml-2 text-blue-800 text-xl mr-[80px] font-bold" style="margin-top: 6px">Todo List</span>
        </div>

        <ul class="ml-4 flex items-center relative">
          <li v-for="(button, index) in buttons" :key="index" class="font-apple font-medium px-1 relative">
            <button :class="['text-text-dark px-2 py-2 mt-4  rounded transition duration-300',
              activeModal === index
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                : 'hover:bg-gray-200',]" ref="buttonRefs" :data-index="index" @click="openModal(index, $event)">
              {{ button }}
              <i class="fas fa-chevron-down text-xs"></i>
            </button>

            <component :is="modalComponents[index]" v-if="activeModal === index" :isVisible="activeModal === index"
              @update:isVisible="closeModal"
              class="absolute top-[60px] left-0 min-w-[320px] transition-transform duration-300 modal" />
          </li>
        </ul>
      </div>
      <div class="flex items-center">
        <button class="mx-2 text-gray-600 hover:text-gray-900">
          <i class="fas fa-bell"></i>
        </button>
        <a-dropdown :trigger="['click']">
          <button class="mx-2 text-gray-600 hover:text-gray-900">
            <i class="fas fa-user"></i>
          </button>
          <template #overlay>
            <a-menu>
              <div class="w-72 pl-3">
                <div class="w-72 h-4 text-xs text-gray-600 my-1.5 ">
                  <p>ACCOUNT</p>
                </div>
                <div class="flex flex-row my-2">
                  <div class="basis-1/6">
                    <div class="flex items-center justify-center mr-1.5">
                      <div
                        class="flex items-center justify-center w-10 h-10 bg-slate-700 rounded-full text-white text-xl font-bold">
                        MH
                      </div>
                    </div>
                    <!-- <Avat class="bg-slate-700 text-white inset-x-0 rounded-full " style="font-size: 25px" :size="100">MH</Avat> -->
                  </div>
                  <div class="basis-5/6 flex flex-col">
                    <p class="text-base text-gray-600 mb-px">Mai Thanh Hà</p>
                    <p class=" text-gray-600 text-xs">thanhhaxinhdep@gmail.com</p>
                  </div>
                </div>
              </div>
              <a-menu-item key="0">
                <div class="flex justify-between items-center">
                  <a href="/mainpage" class="hover:text-current">Manage account</a>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </a-menu-item>
              <hr>
              <a-menu-item key="1">
                <a href="/profile">Profile</a>
              </a-menu-item>
              <a-menu-item key="2">
                <a href="/mainpage">Notification</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="4">Log out</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>

    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainNavbar',

});
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import YourWorkModal from '../../mainpage/modal/YourWorkModal/index.vue';
import ProjectModal from '../../mainpage/modal/ProjectModal/index.vue';
import FilterModal from '../../mainpage/modal/FilterModal/index.vue';
import TeamModal from '../../mainpage/modal/TeamModal/index.vue';


const buttons = ["Your Work", "Projects", "Filters", "Teams"];
const activeModal = ref<number | null>(null);
const modalComponents = [YourWorkModal, ProjectModal, FilterModal, TeamModal];

function openModal(index: number, event: MouseEvent) {
  activeModal.value = index;
  event.stopPropagation();
  nextTick(() => {
    document.addEventListener("click", handleOutsideClick);
  });
}
function closeModal() {
  activeModal.value = null;
  document.removeEventListener("click", handleOutsideClick);
}

function handleOutsideClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const modals = document.querySelectorAll(".modal");
  const isClickInsideModal = Array.from(modals).some((modal) => modal.contains(target));
  if (!isClickInsideModal) {
    closeModal();
  }
}

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script>
