<template>
    <div
        class="w-full min-h-10 flex justify-between bg-white hover:bg-gray-100 group border border-gray-300 items-center cursor-pointer hover:border-gray-300">
        <div class="flex ml-4 items-center">
            <div class="w-6 h-6 p-1 flex items-center">
                <input type="checkbox" id="checkbox"
                    class="h-3 w-3 border-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            </div>

            <div class="flex items-center cursor-pointer ml-1 min-w-24">
                <i class="fa-solid fa-square-check text-blue-400 ml-1"></i>
                <span class="text-xs font-medium font-apple text-text-dark ml-1">
                    {{ props.keyProjectTask }}
                </span>
            </div>

            <div v-if="!showEditTitle" class="flex items-center text-sm font-ui text-text-dark-thin ml-4 mb-1 cursor-pointer">
                <span class="hover:underline">{{ displayTitle }}</span>
                <button @click="toggleEditTitle"
                    class="hover:bg-gray-300 w-5 h-5 flex items-center justify-center rounded ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fa-solid fa-pen text-xs mt-1"></i>
            </button>
            </div>
            <div v-else class="relative ml-4">
                <input v-model="inputTitle" type="text"
                    class="min-w-[300px] rounded px-2 h-[34px] text-xs placeholder-transparent border-2 border-blue-400 input-field"
                    @input="validateTitle" />
                <div class="absolute right-0 top-[36px] z-20 ml-1" >
                        <button @click="confirmTitle"
                            class="h-8 w-8 rounded border bg-white hover:bg-gray-200 mr-1 shadow-lg">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button @click="cancelEditTitle" class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow-lg">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
            </div>

        </div>

        <div class="flex justify-between items-center min-w-[350px] text-text-dark-thin relative">
            <button @click.stop="toggleDropdown" :class="buttonClasses"
                class="text-xs font-bold font-ui bg-opacity-50 px-1 rounded">
                <span :class="statusClasses">{{ selectedStatus }}</span>
                <i class="fa-solid fa-chevron-down ml-1 text-xs w-4"></i>
            </button>

            <!-- Dropdown Menu -->
            <div v-if="showDropdown" ref="dropdownMenu"
                class="absolute top-[28px] left-0 mt-1 w-[200px] bg-white border border-gray-300 rounded shadow-lg z-10">
                <div class="my-2 text-[11px] font-semibold font-apple">
                    <div @click="selectStatus('TO DO')" :class="itemClasses('TO DO')"
                        class="h-[28px] flex items-center pl-4 cursor-pointer border-l-4 border-white hover:border-blue-500 hover:bg-gray-200">
                        <span class="text-gray-500 font-bold bg-gray-100 px-1 rounded">TO DO</span>
                    </div>
                    <div @click="selectStatus('IN PROGRESS')" :class="itemClasses('IN PROGRESS')"
                        class="h-[28px] flex items-center pl-4 cursor-pointer border-l-4 border-white hover:border-blue-500 hover:bg-gray-200">
                        <span class="text-blue-500 font-bold bg-blue-100 px-1 rounded">IN PROGRESS</span>
                    </div>
                    <div @click="selectStatus('DONE')" :class="itemClasses('DONE')"
                        class="h-[28px] flex items-center pl-4 cursor-pointer border-l-4 border-white hover:border-blue-500 hover:bg-gray-200">
                        <span class="text-green-600 font-bold bg-green-100 px-1 rounded">DONE</span>
                    </div>
                </div>
                <div class="border-b border-gray-600 opacity-30 mb-0"></div>
                <button class="hover:bg-gray-200 w-full flex justify-start items-center h-12">
                    <span class="font-apple text-text-dark-thin text-sm font-semibold px-3">View workflow</span>
                </button>
            </div>

            <div class="flex items-center justify-between min-w-[150px]">
                <div v-if="!showEditNumber" @click="toggleEditNumber"
                    class="select-none rounded-full text-xs bg-gray-200 bg-opacity-70 hover:bg-gray-300 w-5 h-5 flex items-center justify-center">
                    {{ displayValue }}
                </div>
                <div v-else class="relative ml-10 select-none " >
                    <input v-model="inputValue" type="number"
                        class="w-[80px] border-2 border-blue-400 rounded p-2 h-8  relative text-xs input-field" min="0" max="5"
                        @input="validateInput" />
                    <div class="absolute left-0 top-[36px] z-20 ml-1">
                        <button @click="confirmValue"
                            class="h-8 w-8 rounded border bg-white hover:bg-gray-200 mr-1 shadow-lg">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button @click="cancelEdit" class="h-8 w-8 rounded border bg-white hover:bg-gray-200 shadow-lg">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>

                <div class="flex items-center relative ml-6">
                    <button @click.stop="toggleDropdownAssignee" class="w-6 h-6 rounded-full bg-gray-500 mr-4">
                        <i class="fa-solid fa-user text-white text-sm mr-[1px]"></i>
                    </button>

                    <!-- Assignee Dropdown Menu -->
                    <div v-if="showDropdownAssignee" ref="dropdownMenuAssignee"
                        class="absolute top-[28px] right-[50px] mt-1 w-[300px]  bg-white border border-gray-300 rounded shadow-lg z-10">

                        <div class="border-2 border-blue-600 rounded h-10 m-2 flex items-center">
                            <div class="ml-2">
                                <button @click.stop="toggleDropdownAssignee"
                                    class="w-6 h-6 rounded-full bg-gray-300 mr-1">
                                    <i class="fa-solid fa-user text-white text-sm mr-[1px]"></i>
                                </button>
                                <span class="font-ui ">
                                    Unassigned
                                </span>
                            </div>
                        </div>
                        <div>
                            <div class="my-2 text-[11px] font-semibold font-apple">
                                <div
                                    class="h-[45px] hover:bg-gray-100 transition flex items-center pl-2 border-l-4 border-white hover:border-l-4 hover:border-blue-500">
                                    <button class="w-8 h-8 rounded-full bg-gray-500 ">
                                        <i class="fa-solid fa-user text-white text-lg "></i>
                                    </button>
                                    <span class="font-ui ml-2">
                                        <span class="text-sm font-medium">Unassigned</span>
                                    </span>
                                </div>

                                <div
                                    class="h-[45px] hover:bg-gray-100 transition flex items-center pl-2 border-l-4 border-white hover:border-l-4 hover:border-blue-500">
                                    <div
                                        class="w-8 h-8 p-0 flex text-center items-center justify-center bg-[#39a3bf] bg-opacity-90 text-[#1e3d5f]  font-semibold  rounded-full text-lg cursor-pointer">
                                        <!-- {{ text.charAt(0).toUpperCase() }} -->
                                        A
                                    </div>
                                    <div class="flex flex-col ml-2 font-ui text-text-dark-thin">
                                        <span class="text-sm font-medium">username</span>
                                        <span class="text-xs font-normal">emai@gmail.com</span>
                                    </div>
                                </div>

                                <div
                                    class="h-[45px] hover:bg-gray-100 transition flex items-center pl-2 border-l-4 border-white hover:border-l-4 hover:border-blue-500">
                                    <div
                                        class="w-8 h-8 p-0 flex text-center items-center justify-center bg-[#39a3bf] bg-opacity-90 text-[#1e3d5f]  font-semibold  rounded-full text-lg cursor-pointer">
                                        <!-- {{ text.charAt(0).toUpperCase() }} -->
                                        A
                                    </div>
                                    <div class="flex flex-col ml-2 font-ui text-text-dark-thin">
                                        <span class="text-sm font-medium">username</span>
                                        <span class="text-xs font-normal">emai@gmail.com</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <button
                        class="opacity-0 group-hover:bg-gray-200 group-hover:opacity-100 transition-opacity rounded h-8 w-8 mr-2">
                        <i class="fa-solid fa-ellipsis text-xl hover:bg-gray-300 w-full h-full rounded pt-1"></i>
                    </button>
                </div>
            </div>
            </div>
        </div>
 
</template>



<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

// Props definition
const props = defineProps<{
  key: string;
  title: string;
  point: number;
  userId: string;
  keyProjectTask: string;
}>();

// Reactive state variables
const showDropdown = ref(false);
const showDropdownAssignee = ref(false);
const selectedStatus = ref('TO DO');
const showEditTitle = ref(false);
const inputTitle = ref(props.title);
const displayTitle = ref(props.title);
const showEditNumber = ref(false);
const inputValue = ref(props.point);
const displayValue = ref(props.point.toString());
const dropdownMenu = ref<HTMLElement | null>(null);
const dropdownMenuAssignee = ref<HTMLElement | null>(null);
const popupEditNumber = ref<HTMLElement | null>(null);
const popupEditTitle = ref<HTMLElement | null>(null);

// Computed classes
const buttonClasses = computed(() => {
  switch (selectedStatus.value) {
    case 'IN PROGRESS':
      return 'bg-blue-100 hover:bg-blue-200';
    case 'DONE':
      return 'bg-green-100 hover:bg-green-200';
    default:
      return 'bg-gray-200 hover:bg-gray-300';
  }
});

const statusClasses = computed(() => {
  switch (selectedStatus.value) {
    case 'IN PROGRESS':
      return 'text-blue-500';
    case 'DONE':
      return 'text-green-600';
    default:
      return 'text-gray-500';
  }
});

const itemClasses = (status: string) => {
  return computed(() => {
    switch (status) {
      case 'IN PROGRESS':
        return 'hover:bg-gray-100 transition border-l-4 border-white hover:border-l-4 hover:border-blue-500';
      case 'DONE':
        return 'hover:bg-gray-100 transition border-l-4 border-white hover:border-l-4 hover:border-green-500';
      default:
        return 'hover:bg-gray-100 transition border-l-4 border-white hover:border-l-4 hover:border-gray-500';
    }
  });
};

// Methods
const selectStatus = (status: string) => {
  selectedStatus.value = status;
  showDropdown.value = false;
};

const toggleDropdown = () => showDropdown.value = !showDropdown.value;
const toggleDropdownAssignee = () => showDropdownAssignee.value = !showDropdownAssignee.value;
const toggleEditNumber = () => showEditNumber.value = !showEditNumber.value;
const toggleEditTitle = () => showEditTitle.value = !showEditTitle.value;

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownMenu.value && !dropdownMenu.value.contains(event.target as Node)) {
    showDropdown.value = false;
  }
  if (dropdownMenuAssignee.value && !dropdownMenuAssignee.value.contains(event.target as Node)) {
    showDropdownAssignee.value = false;
  }
  if (popupEditNumber.value && !popupEditNumber.value.contains(event.target as Node)) {
    showEditNumber.value = false;
  }
  if (popupEditTitle.value && !popupEditTitle.value.contains(event.target as Node)) {
    showEditTitle.value = false;
  }
};

const confirmValue = () => {
  let value1 = inputValue.value > 5 ? 5 : inputValue.value;
  displayValue.value = value1.toString();
  toggleEditNumber(); // Close the input field
};

const cancelEdit = () => {
  toggleEditNumber(); // Close the input field without saving changes
};

const confirmTitle = () => {
  if (inputTitle.value.length > 0) {
    displayTitle.value = inputTitle.value;
  }
  toggleEditTitle();
};

const cancelEditTitle = () => {
  toggleEditTitle();
};

const validateTitle = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10);
  }
};

const validateInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (Number(input.value) > 5) {
    input.value = '5'; // Set to 5 if exceeds
  }
};

// Lifecycle hook
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
</script>

<style scoped>
@import 'index.scss'
</style>
