<template>
    <div class="mt-24 px-8 py-0 ">
        <div class="min-h-[150px] flex flex-col justify-around ">
            <div class="font-ui font-normal text-[#44546F] mb-2">
                <span class="cursor-pointer hover:underline">Projects </span>
                <span class="px-1">/</span>
                <span class="cursor-pointer hover:underline"> My project name</span>
            </div>

            <div class="flex justify-between mb-12">
                <span class="font-ui text-2xl font-semibold text-[#172B4D]">Backlog</span>
                <div class="flex items-center">
                    <div class="flex space-x-2 text-[#172B4D] mr-2">


                        <i
                            class="fa-solid fa-share-nodes bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                        <i
                            class="fa-solid fa-up-right-and-down-left-from-center bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                    </div>



                    <button
                        class="bg-gray-100 text-sm text-[#172B4D] hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-1">
                        <i class="fa-solid fa-ellipsis text-xl"></i>
                    </button>
                </div>
            </div>

            <div class="flex mb-0">
                <div class="relative inline-block mr-6">
                    <input type="text" v-model="searchQuery" placeholder="Search"
                        class="custom-input w-[224px] min-h-[36px] border border-gray-500 rounded py-2 font-light pl-2 pr-10 placeholder-gray-400 hover:border-blue-600" />
                    <i v-if="searchQuery" @click="clearSearch"
                        class="fa-solid fa-x absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"></i>
                    <i v-else
                        class="fa-solid fa-magnifying-glass absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"></i>
                </div>

                <div class="flex items-center mr-6">
                    <a-button shape="circle" class="w-9 h-9 flex items-center justify-center -mr-2"
                        style="border: none; padding: 0">
                        <img class="w-8 h-8 rounded-full mx-auto"
                            src="https://secure.gravatar.com/avatar/b135b1cb057c7e8230e8d0d5a3eba119?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FLH-4.png"
                            alt="" width="36" height="36" />
                    </a-button>
                    <a-button shape="circle" class="w-9 h-9 flex items-center justify-center"
                        style="border: none; padding: 0">
                        <img class="w-8 h-8 rounded-full mx-auto cursor-pointer" src="../../assets/img/logo_no_text.png"
                            alt="" width="36" height="36" />
                    </a-button>

                    <a-button shape="circle" class="ml-3 w-9 h-9 flex items-center justify-center"
                        style="border: none; padding: 0">
                        <img class="w-8 h-8 rounded-full mx-auto cursor-pointer" src="../../assets/img/logo_no_text.png"
                            alt="" width="36" height="36" />
                    </a-button>
                </div>
            </div>
        </div>

        <div class="flex flex-col mt-8 bg-gray-100 bg-opacity-60 cursor-pointer rounded">
            <div class=" rounded flex flex-col mt-4">
                <div class="flex justify-between font-apple text-[#172B4D] text-sm">
                    <div class="font-semibold flex items-center">
                        <div class="w-5 h-5 p-1 flex items-center ml-4">
                            <input type="checkbox" id="checkbox" class="h-3 w-3  border-gray-300 rounded ">
                        </div>
                        <button @click="toggleSprint">
                            <i v-if="isSprintVisible" class="fa-solid fa-chevron-down ml-1 text-xs mr-2"></i>
                            <i v-else class="fa-solid fa-chevron-right ml-1 text-xs mr-2"></i>
                        </button>
                        <span>SCRUM Sprint 1</span>
                        <span class="font-apple text-xs text-[#626F86] font-normal ml-2">(1 issues)</span>
                    </div>
                    <div class="flex">
                        <button
                            class="h-8 font-medium bg-gray-200 bg-opacity-70 hover:bg-gray-300 px-3 rounded mr-2">Complete
                            Sprint</button>
                        <button
                            class="bg-gray-200 bg-opacity-70 hover:bg-gray-300 transition-opacity rounded h-8 w-8  mr-2  ">
                            <i class="fa-solid fa-ellipsis text-xl  pt-1"></i>
                        </button>
                    </div>
                </div>

            </div>
            <div v-show="isSprintVisible" class="m-2">
                <BacklogTask />
                <BacklogTask />


            </div>
        </div>


        <div class="flex flex-col  cursor-pointer rounded mt-2">
            <div class=" rounded flex flex-col mt-4">
                <div class="flex justify-between font-apple text-[#172B4D] text-sm">
                    <div class="font-semibold flex items-center">
                        <div class="w-5 h-5 p-1 flex items-center ml-4">
                            <input type="checkbox" id="checkbox" class="h-3 w-3  border-gray-300 rounded ">
                        </div>
                        <button @click="toggleBacklog">
                            <i v-if="isBacklogVisible" class="fa-solid fa-chevron-down ml-1 text-xs mr-2"></i>
                            <i v-else class="fa-solid fa-chevron-right ml-1 text-xs mr-2"></i>
                        </button>
                        <span>Backlog</span>
                        <span class="font-apple text-xs text-[#626F86] font-normal ml-2">(1 issues)</span>
                    </div>
                    <div class="flex">
                        <button
                            class="h-8 font-medium bg-gray-200 bg-opacity-70 hover:bg-gray-300 px-3 rounded mr-2">Create
                            sprint</button>

                    </div>
                </div>
            </div>

            <div v-show="isBacklogVisible" class="mt-2 mx-2">
                <BacklogTask />
                <BacklogTask />

                <button
                    class="w-full h-8 hover:bg-gray-200 mt-1 mb-3 rounded text-sm font-apple text-[#172B4D] flex items-center justify-start">
                    <div>
                        <i class="fa-solid fa-plus font-semibold p-2"></i>
                        <span class="ml font-medium">Create issue</span>
                    </div>
                </button>
            </div>

        </div>

    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import BacklogTask from '../shared/backlogTask/index.vue';


export default defineComponent({
    name: 'Backlog',
    components: {
        BacklogTask,
    },
    setup() {
        const isSprintVisible = ref(true);
        const isBacklogVisible = ref(true);
        const searchQuery = ref<string>('');
        const isCreatingIssue = ref(false);


        function toggleSprint() {
            isSprintVisible.value = !isSprintVisible.value;
        }

        function toggleBacklog() {
            isBacklogVisible.value = !isBacklogVisible.value;
        }

        const clearSearch = () => {
            searchQuery.value = '';
        };

        return {
            searchQuery,
            isSprintVisible,
            isBacklogVisible,
            clearSearch,
            toggleSprint,
            toggleBacklog,
        };
    },
});
</script>




<style scoped>
.custom-input:focus {
    border-color: #3b82f6;
    outline: none;
    border-width: 1px;
    box-shadow: inset 0 0 0 1px #2563eb;
}
</style>