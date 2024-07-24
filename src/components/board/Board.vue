<template>
  <div class="mt-20 px-10 py-0 ml-10">
    <div class="h-[40px] flex justify-between items-center">
      <div class="block">
        <span class="font-ui text-lg text-gray-400 block">Projects / name</span>
        <span class="font-ui text-2xl font-semibold opacity-80 block"
          >All Sprint</span
        >
      </div>
      <div class="flex">
        <button
          class="h-[32px] bg-blue-600 text-white hover:bg-blue-700 px-3 mr-4 rounded"
        >
          Complete sprint
        </button>
        <button
          class="h-[32px] bg-gray-200 text-black hover:bg-gray-300 px-3 rounded"
        >
          Edit sprint
        </button>
      </div>
    </div>
    <div class="mt-6 flex items-center">
      <div class="relative inline-block mr-6">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search"
          class="custom-input w-[224px] min-h-[36px] border border-gray-500 rounded py-2 font-light pl-2 pr-10 placeholder-gray-400 hover:border-blue-600"
        />
        <i
          v-if="searchQuery"
          @click="clearSearch"
          class="fa-solid fa-x absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        ></i>
        <i
          v-else
          class="fa-solid fa-magnifying-glass absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
        ></i>
      </div>

      <div class="relative flex items-center mr-6">
        <a-button
          shape="circle"
          class="w-9 h-9 flex items-center justify-center -mr-2"
          style="border: none; padding: 0"
        >
          <img
            class="w-8 h-8 rounded-full mx-auto"
            src="https://secure.gravatar.com/avatar/b135b1cb057c7e8230e8d0d5a3eba119?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FLH-4.png"
            alt=""
            width="36"
            height="36"
          />
        </a-button>
        <a-button
          shape="circle"
          class="w-9 h-9 flex items-center justify-center"
          style="border: none; padding: 0"
        >
          <img
            class="w-8 h-8 rounded-full mx-auto cursor-pointer"
            src="../../assets/img/logo_no_text.png"
            alt=""
            width="36"
            height="36"
          />
        </a-button>
        <a-button
          shape="circle"
          class="ml-3 w-9 h-9 flex items-center justify-center"
          style="border: none; padding: 0"
        >
          <img
            class="w-8 h-8 rounded-full mx-auto cursor-pointer"
            src="../../assets/img/logo_no_text.png"
            alt=""
            width="36"
            height="36"
          />
        </a-button>
      </div>

      <div class="relative inline-block">
        <button
          :class="[
            'text-[#44546F] px-2 py-2 rounded transition duration-300',
            activeModal === index
              ? 'bg-white text-inherit hover:bg-slate-200'
              : 'hover:bg-gray-200',
          ]"
          ref="buttonRefs"
          :data-index="index"
          @click="openModal(index, $event)"
        >
          Type
          <i class="fas fa-chevron-down text-xs ml-2"></i>
        </button>
      </div>

      <div class="relative inline-block ml-4">
        <button
          :class="[
            'text-[#44546F] px-2 py-2  rounded transition duration-300',
            activeModal === index
              ? 'bg-white text-inherit hover:bg-slate-200'
              : 'hover:bg-gray-200',
          ]"
          ref="buttonRefs"
          :data-index="index"
          @click="openModal(index, $event)"
        >
          Sprint
          <i class="fas fa-chevron-down text-xs ml-2"></i>
        </button>
      </div>
    </div>

    <div class="overflow-x overflow-y">
      <div class="scroll-container">
        <div
          class="mt-6 flex"
          style="
            position: relative;
            --board-scroll-element-height: 80;
            --board-scroll-element-width: 0;
          "
        >
          <!-- select 1  -->
          <div class="bg-gray-100 py-1.5">
            <div
              class="bg-gray-100"
              style="
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                z-index: 9999;
              "
            >
              <div class="h-10 flex items-center ml-4">
                <span class="uppercase">TO DO</span>
              </div>
            </div>
            <ul>
              <li>
                <item-task
                  text="This is a long text that will be truncated if it exceeds the width of the container"
                  img-alt="Task"
                  img-src="https://tag111.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium"
                  key-text="Key This is a long text that will be truncated"
                  tooltip-title="Image"
                  button-img-src="https://secure.gravatar.com/avatar/b135b1cb057c7e8230e8d0d5a3eba119?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FLH-4.png"
                />
              </li>
              <li>
                <item-task
                  text="This is a long text that will be truncated if it exceeds the width of the container"
                  img-alt="Task"
                  img-src="https://tag111.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium"
                  key-text="Key This is a long text that will be truncated"
                  tooltip-title="Image"
                  button-img-src="https://secure.gravatar.com/avatar/b135b1cb057c7e8230e8d0d5a3eba119?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FLH-4.png"
                />
              </li>
            </ul>
          </div>
          <!--  -->
          <!-- select 2 -->
          <div class="bg-gray-100 py-1.5 ml-4">
            <div
              class="bg-gray-100"
              style="
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                z-index: 9999;
              "
            >
              <div class="h-10 flex items-center ml-4">
                <span class="uppercase"> In progress</span>
              </div>
            </div>
            <ul>
              <li>
                <item-task
                  text="This is a long text that will be truncated if it exceeds the width of the container"
                  img-alt="Task"
                  img-src="https://tag111.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium"
                  key-text="Key This is a long text that will be truncated"
                  tooltip-title="Image"
                  button-img-src="https://secure.gravatar.com/avatar/b135b1cb057c7e8230e8d0d5a3eba119?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FLH-4.png"
                />
              </li>
            </ul>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";
import { defineComponent, markRaw } from "vue";
import ItemTask from "./ItemTask.vue";

export default {
  name: "Board",
  components: {
    ItemTask: markRaw(ItemTask),
  },
  setup() {
    const searchQuery = ref("");
    const isDropdownVisible = ref(false);
    const selectedFilters = ref<string[]>([]);

    const clearSearch = () => {
      searchQuery.value = "";
    };

    const toggleDropdown = (show: boolean) => {
      isDropdownVisible.value = show;
    };

    return {
      searchQuery,
      clearSearch,
      isDropdownVisible,
      toggleDropdown,
      selectedFilters,
    };
  },
};
</script>

<style scoped>
.custom-input:focus {
  border-color: #3b82f6;
  outline: none;
  border-width: 1px;
  box-shadow: inset 0 0 0 1px #2563eb;
}
.text-custom {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.scroll-container {
  margin-top: 20px;
  height: 500px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
</style>
