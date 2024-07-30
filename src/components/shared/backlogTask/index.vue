<template>
    <div class="w-full min-h-10 flex justify-between bg-white hover:bg-gray-100 group border border-gray-300 items-center cursor-pointer hover:border-gray-300">
        <div class="flex ml-4 items-center">
            <div class="w-6 h-6 p-1 flex items-center">
                <input type="checkbox" id="checkbox" class="h-3 w-3 border-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            </div>
          
            <div class="flex items-center cursor-pointer ml-1">
                <i class="fa-solid fa-square-check text-blue-400 ml-1"></i>
                <span class="text-xs font-medium font-apple text-[#44546F] ml-1">
                    SCRUM-1
                </span>
            </div>
            
            <div class="flex items-center text-sm font-ui text-[#172B4D] ml-4 mb-1 cursor-pointer">
                <span class="hover:underline">name</span>
                <div class="hover:bg-gray-300 w-5 h-5 flex items-center justify-center rounded ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fa-solid fa-pen text-xs mt-1"></i>
                </div>
            </div>
        </div>

        <div class="flex justify-between items-center min-w-[300px] text-[#172B4D] relative">
            <button @click.stop="toggleDropdown" class="text-xs font-bold font-apple bg-gray-200 hover:bg-gray-300 bg-opacity-70 px-1 rounded">
                <span>TO DO</span>
                <i class="fa-solid fa-chevron-down ml-1 text-xs w-4"></i>
            </button>

            <!-- Dropdown Menu -->
            <div v-if="showDropdown" ref="dropdownMenu" class="absolute top-[28px] left-0 mt-1 w-[200px]  bg-white border border-gray-300 rounded shadow-lg z-10">
                <div class="my-2 text-[11px] font-semibold font-apple">
                    <div class="h-[28px] hover:bg-gray-100 transition flex items-center pl-4 border-l-4 border-white hover:border-l-4 hover:border-blue-500">
                        <span class="text-blue-500 font-bold bg-blue-100 px-1 rounded">IN PROGRESS</span>
                    </div>
                    <div class="h-[28px] hover:bg-gray-100 transition flex items-center pl-4 border-l-4 border-white hover:border-l-4 hover:border-blue-500">
                        <span class="text-green-600 font-bold bg-green-100 px-1 rounded">DONE</span>
                    </div>

                </div>
                <div class="border-b border-gray-600 opacity-30 mb-0"></div>
                <button class="hover:bg-gray-200 w-full flex justify-start items-center h-12">
                    <span class="font-apple text-[#172B4D] text-sm font-semibold px-3 ">View workflow</span>
                </button>
            </div>

            <div v-if="!showEditNumber" @click="toggleEditNumber" class="rounded-full bg-gray-200 bg-opacity-70 hover:bg-gray-300 w-4 h-4 text-center">
                -
            </div>
            <div v-else>
                <input
                    
                    type="number"
                    class="w-[60px] border-2 rounded p-2 h-8 border-blue-400  relative"
                    min="0"
                />
            </div>

           

            <div class="flex items-center relative">
                <button @click.stop="toggleDropdownAssignee" class="w-6 h-6 rounded-full bg-gray-500 mr-4">
                    <i class="fa-solid fa-user text-white text-sm mr-[1px]"></i>
                </button>

                <!-- Assignee Dropdown Menu -->  
                <div v-if="showDropdownAssignee" ref="dropdownMenuAssignee" class="absolute top-[28px] right-[50px] mt-1 w-[300px]  bg-white border border-gray-300 rounded shadow-lg z-10">
                    
                    <div class="border-2 border-blue-600 rounded h-10 m-2 flex items-center">
                        <div class="ml-2">
                            <button @click.stop="toggleDropdownAssignee" class="w-6 h-6 rounded-full bg-gray-500 mr-1">
                                <i class="fa-solid fa-user text-white text-sm mr-[1px]"></i>
                            </button>
                            <span class="font-ui ">
                                Unassigned
                            </span>
                        </div>
                    </div>
                    <div>
                        <div class="my-2 text-[11px] font-semibold font-apple">
                            <div class="h-[45px] hover:bg-gray-100 transition flex items-center pl-2 border-l-4 border-white hover:border-l-4 hover:border-blue-500">
                                <button  class="w-8 h-8 rounded-full bg-gray-500 ">
                                    <i class="fa-solid fa-user text-white text-lg "></i>
                                </button>
                                <span class="font-ui ml-2">
                                    <span class="text-sm font-medium">Unassigned</span>
                                </span>
                            </div>

                            <div class="h-[45px] hover:bg-gray-100 transition flex items-center pl-2 border-l-4 border-white hover:border-l-4 hover:border-blue-500">
                                <div
                                    class="w-8 h-8 p-0 flex text-center items-center justify-center bg-[#39a3bf] bg-opacity-90 text-[#1e3d5f]  font-semibold  rounded-full text-lg cursor-pointer">
                                    <!-- {{ text.charAt(0).toUpperCase() }} -->
                                    A
                                </div>
                                <div class="flex flex-col ml-2 font-ui text-[#172B4D]">
                                        <span class="text-sm font-medium">username</span>
                                        <span class="text-xs font-normal">emai@gmail.com</span>
                                </div>
                            </div>
                           
                            <div class="h-[45px] hover:bg-gray-100 transition flex items-center pl-2 border-l-4 border-white hover:border-l-4 hover:border-blue-500">
                                <div
                                    class="w-8 h-8 p-0 flex text-center items-center justify-center bg-[#39a3bf] bg-opacity-90 text-[#1e3d5f]  font-semibold  rounded-full text-lg cursor-pointer">
                                    <!-- {{ text.charAt(0).toUpperCase() }} -->
                                    A
                                </div>
                                <div class="flex flex-col ml-2 font-ui text-[#172B4D]">
                                        <span class="text-sm font-medium">username</span>
                                        <span class="text-xs font-normal">emai@gmail.com</span>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
                

                <button class="opacity-0 group-hover:bg-gray-200 group-hover:opacity-100 transition-opacity rounded h-8 w-8 mr-2">
                    <i class="fa-solid fa-ellipsis text-xl hover:bg-gray-300 w-full h-full rounded pt-1"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'backlogTask',
    
    setup() {
        const showDropdown = ref(false);
        const showDropdownAssignee = ref(false);
        const showEditNumber = ref(false);
        const dropdownMenu = ref<HTMLElement | null>(null);
        const dropdownMenuAssignee = ref<HTMLElement | null>(null);

        function toggleDropdown() {
            showDropdown.value = !showDropdown.value;
        };
        function toggleDropdownAssignee() {
            showDropdownAssignee.value = !showDropdownAssignee.value;
        };

        function toggleEditNumber() {
            showEditNumber.value = !showEditNumber.value;
        };


        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownMenu.value && !dropdownMenu.value.contains(event.target as Node)) {
                showDropdown.value = false;
            }
            if (dropdownMenuAssignee.value && !dropdownMenuAssignee.value.contains(event.target as Node)) {
                showDropdownAssignee.value = false;
            }
        };

        onMounted(() => {
            document.addEventListener('click', handleClickOutside);
        });

        onUnmounted(() => {
            document.removeEventListener('click', handleClickOutside);
        });

        return {
            showDropdown,
            showDropdownAssignee,
            dropdownMenu,
            dropdownMenuAssignee,
            showEditNumber,
            toggleEditNumber,
            toggleDropdown,
            toggleDropdownAssignee,
        };
    }
}
</script>
