<template>
  <div class="mt-0 px-10 py-0 ml-10">
    <div class="mt-2">
      <div class="w-full flex justify-end">1 of 9</div>
      <div class="flex mt-2">
        <div class="mr-10 w-[60%]">
          <div class="pr-10 h-[450px] w-full overflow-y-auto">
            <div class="">
              <div class="font-ui text-gray-400 flex items-center hover:cursor-pointer">
                <div class="w-6 h-6 hover:bg-gray-200 rounded flex items-center justify-center mt-1">
                  <i class="fa-solid fa-square-check text-blue-400 "></i>

                </div>
                <span class="text-sm text-text-dark ml-1 hover:underline ">SCRUM-9</span>
              </div>

              <div class="font-apple text-text-dark-thin text-2xl font-semibold py-4">
                <span>Task name</span>
              </div>
            </div>
            <div class="mt-2">
              <div class="mb-2">
                <span class="text-text-dark-thin text-base font-ui font-medium">Description</span>
              </div>

              <div style="scroll-margin-bottom: 75pt">
                <div style="margin-bottom: 24px">
                  <div style="margin-bottom: 24px">
                    <div style="margin-bottom: 24px">
                      <button v-if="!isEditing" @click="isEditing = true">
                        <span class="font-apple text-text-dark text-sm">{{
                          value_des ? value_des : "Add Description..."
                        }}</span>
                      </button>
                      <div v-else>
                        <a-textarea v-model:value="value_des" placeholder="Add Description..." allow-clear show-count
                          :maxlength="100" />
                        <div class="mt-2">
                          <button @click="saveEdit"
                            class="bg-blue-600 hover:bg-blue-700  h-8 font-apple text-sm rounded text-white px-3 font-semibold">
                            Save
                          </button>
                          <button @click="isEditing = false"
                            class="hover:bg-gray-200 h-8 font-apple text-sm rounded text-text-dark-thin px-3 font-semibold ml-2">
                            Cancel
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="mb-2">
                <span class="text-text-dark-thin text-base font-ui font-medium">Activity</span>
              </div>
              <comment></comment>
            </div>


          </div>
        </div>

        <div class="flex-1 overflow-y-auto">
          <div>
            <div class="mb-4">
              <div class="flex items-center justify-end">
                <div class="flex space-x-2 text-text-dark-thin mr-2">

                  <i
                    class="fa-regular fa-thumbs-up bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                  <i
                    class="fa-solid fa-up-right-and-down-left-from-center bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                </div>

                <button
                  class=" text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ">
                  <i class="fa-solid fa-ellipsis text-xl"></i>
                </button>
              </div>
            </div>
            <div class="block relative">
              <button @click.stop="toggleDropdownStatus"
                class="bg-gray-200 bg-opacity-60 hover:bg-gray-300 transition-colors duration-300 ease-in-out h-[32px] rounded px-3 py-2 mx-1 flex items-center justify-center">
                <span class="flex items-center text-text-dark-thin text-sm font-apple font-medium">
                  To Do
                  <i class="fa-solid fa-chevron-down ml-2 text-xs"></i>
                </span>
              </button>
              <div v-if="isDropdownStatus" ref="dropdownStatus"
                class="z-30 bg-white absolute w-[220px] left-0 top-[40px] rounded border shadow-lg border-blur">
                <div class="my-2 text-[11px] font-semibold font-apple">
                  <div
                    class="h-[28px] flex items-center pl-4 cursor-pointer border-l-[3px] border-white hover:border-blue-500 hover:bg-gray-200 hover:bg-opacity-60">

                    <span class="text-gray-500 font-bold bg-gray-100 px-1 rounded">TODO</span>
                  </div>
                  <div
                    class="h-[28px] flex items-center pl-4 cursor-pointer border-l-[3px] border-white hover:border-blue-500 hover:bg-gray-200 hover:bg-opacity-60">

                    <span class="text-blue-500 font-bold bg-blue-100 px-1 rounded">IN
                      PROGRESS</span>
                  </div>
                  <div
                    class="h-[28px] flex items-center pl-4 cursor-pointer border-l-[3px] border-white hover:border-blue-500 hover:bg-gray-200 hover:bg-opacity-60">
                    <span class="text-purple-600 font-bold bg-purple-100 px-1 rounded">READY FOR
                      TEST</span>
                  </div>
                  <div
                    class="h-[28px] flex items-center pl-4 cursor-pointer border-l-[3px] border-white hover:border-blue-500 hover:bg-gray-200 hover:bg-opacity-70">
                    <span class="text-green-600 font-bold bg-green-100 px-1 rounded">DONE</span>
                  </div>
                </div>
              </div>
            </div>
            <div >
              <button v-if="!isDropdownDetail" @click="toggleDropdownDetail"
                class="h-12 w-full border border-gray-300 hover:bg-gray-200 rounded mt-4">
                <div class="flex items-center justify-between px-4 h-full">
                  <span class="text-text-dark font-ui text-sm">Details</span>
                  <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </button>
              <div v-else class="h-[200px] w-full border border-gray-300 rounded  mt-4 flex flex-col">
                <button @click="toggleDropdownDetail"
                  class=" border-b border-gray-300 w-full h-12  hover:bg-gray-200 rounded-t">
                  <div class="flex items-center justify-between px-4 h-full">
                    <span class="text-text-dark font-ui text-sm">Details</span>
                    <i class="fa-solid fa-chevron-up text-xs"></i>
                  </div>
                </button>
                <div class="py-3 px-4 flex-1 flex  text-text-dark text-sm font-ui">
                  <div class="flex flex-col justify-between">
                    <div>Assignee</div>
                    <div>Labels</div>
                    <div>Sprint</div>
                    <div>Reporter</div>
                  </div>
                  <div class="ml-20 flex flex-col justify-between w-full font-ui">
                    <div class="font-apple text-text-dark-thin text-sm flex items-center w-full hover:bg-gray-200 rounded px-2 h-7">
                      <div class="rounded-full bg-blue-500 w-6 h-6 text-gray-800 font-xl font-semibold flex items-center justify-center">V</div>
                      <span class="ml-2">vuquanghari3</span>
                    </div>
                    <div class="px-2 hover:bg-gray-200 h-7 rounded flex items-center ">None</div>
                    <div class="px-2 hover:bg-gray-200 text-blue-500 h-7 rounded flex items-center hover:underline cursor-pointer">SCRUM Sprint 8</div>
                    <div class="font-apple text-text-dark-thin text-sm flex items-center w-full hover:bg-gray-200 rounded px-2 h-7">
                      <div class="rounded-full bg-blue-500 w-6 h-6 text-gray-800 font-xl font-semibold flex items-center justify-center">V</div>
                      <span class="ml-2">vuquanghari3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 ml-2">
              <div class="text-text-dark text-xs font-ui ">
                <div class="py-1">Created July 10, 2024 at 11:35 AM</div>
                <div class="">Updated 12 minutes ago</div>
              </div>
              <div class="text-text-dark text-sm font-apple font-medium mt-2 hover:underline hover:cursor-pointer">
                <i class="fa-solid fa-gear mr-2"></i>
                <span>Configure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import Comment from './Comment.vue';
import LabelAdd from './LabelAdd.vue';

// Reactive state
const value_des = ref('');
const isEditing = ref(false);
const isDropdownStatus = ref(false);
const isDropdownDetail = ref(false);

const toggleDropdownStatus = () => {
  isDropdownStatus.value = !isDropdownStatus.value;
};

const saveEdit = () => {
  if (!value_des.value) {
    return;
  }
  isEditing.value = false;
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
function toggleDropdownDetail() {
  isDropdownDetail.value = !isDropdownDetail.value;
}
// Assignee related state
const selectedAssignee = ref(null);
const assignees = ref([
  { label: 'Luan Han', value: 'luan-han' },
  { label: 'Unassigned', value: 'unassigned' },
  { label: 'Automatic', value: 'automatic' },
]);

// Export components for template
const components = {
  Comment,
  LabelAdd,
};
</script>


<style scoped>
.custom_icon {
  border: none;
  padding: 0;
}
</style>
