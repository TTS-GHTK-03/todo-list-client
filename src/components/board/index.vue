<template>
  <div class="mt-24 px-8 py-0 ">
    <div class="min-h-[150px] flex flex-col justify-around ">
      <div class="font-ui font-normal text-[#44546F] mb-2">
        <span class="cursor-pointer hover:underline">Projects </span>
        <span class="px-1">/</span>
        <span class="cursor-pointer hover:underline"> My project name</span>
      </div>

      <div class="flex justify-between mb-12">
        <span class="font-ui text-2xl font-semibold text-[#172B4D]">SCRUM Sprint 1</span>
        <div class="flex items-center">
          <div class="flex space-x-2 text-[#172B4D] mr-2">
            <i class="fa-solid fa-bolt bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
            <i class="fa-regular fa-star bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
            <i class="fa-solid fa-share-nodes bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
            <i class="fa-solid fa-up-right-and-down-left-from-center bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
          </div>

          <button class="bg-gray-100 font-medium font-apple text-sm text-[#172B4D] hover:bg-gray-200 px-4 py-2 rounded h-9 flex items-center">
            Complete sprint
          </button>

          <button class="bg-gray-100 text-sm text-[#172B4D] hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-2">
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
          <a-button shape="circle" class="w-9 h-9 flex items-center justify-center" style="border: none; padding: 0">
            <img class="w-8 h-8 rounded-full mx-auto cursor-pointer" src="../../assets/img/logo_no_text.png" alt=""
              width="36" height="36" />
          </a-button>

          <a-button shape="circle" class="ml-3 w-9 h-9 flex items-center justify-center" style="border: none; padding: 0">
            <img class="w-8 h-8 rounded-full mx-auto cursor-pointer" src="../../assets/img/logo_no_text.png" alt=""
              width="36" height="36" />
          </a-button>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-6 mt-10">
      <div class="w-[260px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded flex flex-col"
         @drop="onDrop($event,1)"
          @dragenter.prevent
          @dragover.prevent>
        <div class="h-12 py-4 flex justify-between items-center group">
          <span class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-pointer flex-grow">
            IN PROGRESS
          </span>
          <button class="text-sm text-[#172B4D] hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <i class="fa-solid fa-ellipsis text-xl"></i>
          </button>
        </div>

        <!-- Container for item-task, positioned right under the header -->
        <div class="mt-0 m-1 flex flex-col items-center min-h-[100px]" 
       
        >
    
            <item-task 
              v-for="task in getState(1)"
              :key="task.keyText"
              :text="task.text"
              :key-text="task.keyText"
              :tooltip-title="task.tooltipTitle"
              draggable="true"
              @dragstart="startDrag($event,task)"
            />
      
        </div>
      </div>

      <div class="w-[260px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded flex flex-col"
          @drop="onDrop($event,2)"
          @dragenter.prevent
          @dragover.prevent>
        <div class="h-12 py-4 flex justify-between items-center group">
          <span class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-pointer flex-grow">
            TO DO
          </span>
          <button class="text-sm text-[#172B4D] hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <i class="fa-solid fa-ellipsis text-xl"></i>
          </button>
        </div>

        <!-- Container for item-task, positioned right under the header -->
        <div class="mt-0 m-1 flex flex-col items-center min-h-[100px]">
         
            <item-task         
              v-for="task in getState(2)"
              :key="task.keyText"
              :text="task.text"
              :key-text="task.keyText"
              :tooltip-title="task.tooltipTitle"
              draggable="true"
              @dragstart="startDrag($event,task)"
            />
       
          
        </div>
      </div>

      <div class="w-[260px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded flex flex-col"
          @drop="onDrop($event,3)"
          @dragenter.prevent
          @dragover.prevent>
        <div class="h-12 py-4 flex justify-between items-center group">
          <span class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-pointer flex-grow">
            TO DO
          </span>
          <button class="text-sm text-[#172B4D] hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <i class="fa-solid fa-ellipsis text-xl"></i>
          </button>
        </div>

        <!-- Container for item-task, positioned right under the header -->
        <div class="mt-0 m-1 flex flex-col items-center min-h-[100px]">
         
            <item-task         
              v-for="task in getState(3)"
              :key="task.keyText"
              :text="task.text"
              :key-text="task.keyText"
              :tooltip-title="task.tooltipTitle"
              draggable="true"
              @dragstart="startDrag($event,task)"
            />
       
          
        </div>
      </div>

      <div class="w-[270px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded">
        <div class="h-12 py-4 flex justify-between items-center group">
          <span class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-grab flex-grow">IN PROGRESS</span>
          <button class="text-sm text-[#172B4D] hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <i class="fa-solid fa-ellipsis text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import ItemTask from '../shared/ItemTask/index.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import {tasks} from '../../constants/itemTask'

interface Task {
  text: string;
  keyText: string;
  tooltipTitle: string;
  state: number;
}

export default defineComponent({
  name: 'Board',
  components: {
    ItemTask,
    draggable: VueDraggableNext,
  },
  setup() {
    const searchQuery = ref<string>('');

    const clearSearch = () => {
      searchQuery.value = '';
    };

    const AllTasks = ref<Task[]>(tasks)

    const getState = (state: number): Task[] => {
      return AllTasks.value.filter(task => task.state === state);
    };

    const startDrag = (event: DragEvent, task: Task) => {
      console.log(task);
      event.dataTransfer!.dropEffect = 'move';
      event.dataTransfer!.effectAllowed = 'move';
      event.dataTransfer!.setData('taskId', task.keyText);
    };

    const onDrop = (event: DragEvent, state: number) => {
      const taskId = event.dataTransfer!.getData('taskId');
      const task = AllTasks.value.find(task => task.keyText === taskId);
      if (task) {
        task.state = state;
      }
    };

    return {
      searchQuery,
      AllTasks,
      clearSearch,
      startDrag,
      onDrop,
      getState,
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
