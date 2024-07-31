<template>
  <!-- Loading Spinner -->
  <div v-if="isLoading" class="loading-container">
    <div class="loader"></div>
  </div>
  <div v-else>
    <div class="mt-24 px-8 py-0">
      <div class="min-h-[150px] flex flex-col justify-around">
        <div class="font-ui font-normal text-text-dark mb-2">
          <span class="cursor-pointer hover:underline">Projects </span>
          <span class="px-1">/</span>
          <span class="cursor-pointer hover:underline"> My project name</span>
        </div>

        <div class="flex justify-between mb-12">
          <span class="font-ui text-2xl font-semibold text-text-dark-thin"
            >SCRUM Sprint 1</span
          >
          <div class="flex items-center">
            <div class="flex space-x-2 text-text-dark-thin mr-2">
              <i
                class="fa-solid fa-bolt bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"
              ></i>
              <i
                class="fa-regular fa-star bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"
              ></i>
              <i
                class="fa-solid fa-share-nodes bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"
              ></i>
              <i
                class="fa-solid fa-up-right-and-down-left-from-center bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"
              ></i>
            </div>

            <button
              class="bg-gray-100 font-medium font-apple text-sm text-text-dark-thin hover:bg-gray-200 px-4 py-2 rounded h-9 flex items-center"
            >
              Complete sprint
            </button>

            <button
              class="bg-gray-100 text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-2"
            >
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>
          </div>
        </div>

        <div class="flex mb-0">
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

          <div class="flex items-center mr-6">
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
        </div>
      </div>

      <div class="flex gap-6 mt-10">
        <div
          class="w-[260px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded flex flex-col"
          @drop="onDrop($event, TaskStatus.TODO)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div class="h-12 py-4 flex justify-between items-center group">
            <span
              class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-pointer flex-grow"
            >
              TO DO
            </span>
            <button
              class="text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>
          </div>

          <!-- Container for item-task, positioned right under the header -->
          <div class="mt-0 m-1 flex flex-col items-center min-h-[100px]">
            <item-task
              v-for="task in data.get(TaskStatus.TODO)"
              :key="task?.id"
              :text="task?.title"
              :key-text="task?.keyProjectTask"
              :tooltip-title="task?.title"
              draggable="true"
              @dragstart="startDrag($event, task)"
            />
          </div>
        </div>

        <div
          class="w-[260px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded flex flex-col"
          @drop="onDrop($event, TaskStatus.IN_PROGRESS)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div class="h-12 py-4 flex justify-between items-center group">
            <span
              class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-pointer flex-grow"
            >
              IN PROGRESS
            </span>
            <button
              class="text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>
          </div>

          <!-- Container for item-task, positioned right under the header -->
          <div class="mt-0 m-1 flex flex-col items-center min-h-[100px]">
            <item-task
              v-for="task in data.get(TaskStatus.IN_PROGRESS)"
              :key="task?.id"
              :text="task?.title"
              :key-text="task?.keyProjectTask"
              :tooltip-title="task?.title"
              draggable="true"
              @dragstart="startDrag($event, task)"
            />
          </div>
        </div>

        <div
          class="w-[260px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded flex flex-col"
          @drop="onDrop($event, TaskStatus.READY_FOR_TEST)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div class="h-12 py-4 flex justify-between items-center group">
            <span
              class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-pointer flex-grow"
            >
              READY FOR TEST
            </span>
            <button
              class="text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>
          </div>

          <!-- Container for item-task, positioned right under the header -->
          <div class="mt-0 m-1 flex flex-col items-center min-h-[100px]">
            <item-task
              v-for="task in data.get(TaskStatus.READY_FOR_TEST)"
              :key="task?.id"
              :text="task?.title"
              :key-text="task?.keyProjectTask"
              :tooltip-title="task?.title"
              draggable="true"
              @dragstart="startDrag($event, task)"
            />
          </div>
        </div>

        <div
          class="w-[260px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded flex flex-col"
          @drop="onDrop($event, TaskStatus.DONE)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div class="h-12 py-4 flex justify-between items-center group">
            <span
              class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-pointer flex-grow"
            >
              DONE
            </span>
            <button
              class="text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>
          </div>

          <!-- Container for item-task, positioned right under the header -->
          <div class="mt-0 m-1 flex flex-col items-center min-h-[100px]">
            <item-task
              v-for="task in data.get(TaskStatus.DONE)"
              :key="task?.id"
              :text="task?.title"
              :key-text="task?.keyProjectTask"
              :tooltip-title="task?.title"
              draggable="true"
              @dragstart="startDrag($event, task)"
            />
          </div>
        </div>

        <!-- <div class="w-[270px] min-h-[180px] bg-gray-100 bg-opacity-70 rounded">
          <div class="h-12 py-4 flex justify-between items-center group">
            <span class="rounded text-xs text-[#626F86] font-semibold font-apple ml-2 pl-3 py-1 hover:bg-gray-200 hover:cursor-grab flex-grow">IN PROGRESS</span>
            <button class="text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 mr-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>
          </div>
        </div> -->
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import { defineComponent, ref, onMounted } from "vue";
import ItemTask from "../shared/ItemTask/index.vue";
import { VueDraggableNext } from "vue-draggable-next";
// import { tasks } from "../../constants/itemTask";
import { fetchAllTaskByAllSprint, updateStatusTask } from "../../api/task";
import { TaskStatus } from "../../utils/constants/enum";

export interface Task {
  id: string;
  title: string;
  point: number;
  status: string;
  keyProjectTask: string;
  userId: string;
}

export default defineComponent({
  name: "Board",
  components: {
    ItemTask,
    draggable: VueDraggableNext,
  },
  setup() {
    const searchQuery = ref<string>("");

    const data = ref<Map<string, Task[]>>(new Map());
    const isLoading = ref(true);

    const clearSearch = () => {
      searchQuery.value = "";
    };

  
    const startDrag = (event: DragEvent, task: Task) => {
      console.log(task);
      event.dataTransfer!.dropEffect = "move";
      event.dataTransfer!.effectAllowed = "move";
      event.dataTransfer!.setData("taskId", task.id);
      event.dataTransfer!.setData("status", task.status);
    };

    const onDrop = (event: DragEvent, newStatus: string) => {
      const taskId = event.dataTransfer!.getData("taskId");
      const oldStatus = event.dataTransfer!.getData("status");
      console.log(taskId);
      console.log(oldStatus);

      // Lấy danh sách nhiệm vụ từ trạng thái cũ và mới
      const oldTasks = data.value.get(oldStatus) || [];
      const newTasks = data.value.get(newStatus) || [];

      // Tìm nhiệm vụ trong danh sách trạng thái cũ
      const taskIndex = oldTasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        try {
          updateStatusTask(taskId, newStatus);
          const [task] = oldTasks.splice(taskIndex, 1); // Xóa nhiệm vụ khỏi trạng thái cũ
          if (task) {
            task.status = newStatus; // Cập nhật trạng thái của nhiệm vụ
            newTasks.push(task); // Thêm nhiệm vụ vào trạng thái mới
            data.value.set(oldStatus, oldTasks); // Cập nhật danh sách trạng thái cũ
            data.value.set(newStatus, newTasks); // Cập nhật danh sách trạng thái mới
          }
        } catch (error) {}
      }
    };

    onMounted(async () => {
      try {
        const response = await fetchAllTaskByAllSprint();
        console.log("response: ", response);
        const map = new Map<string, Task[]>();
        response.data.forEach((task) => {
          if (!map.has(task.status)) {
            map.set(task.status, []);
          }
          map.get(task.status)!.push(task);
        });
        data.value = map;
        console.log("data: ", data.value);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }finally {
        isLoading.value = false;
      }
    });

    return {
      searchQuery,
      data,
      clearSearch,
      startDrag,
      onDrop,
      // getState,
      isLoading,
      TaskStatus,
    };
  },
});
</script>

<style scoped>
@import "index.scss";
</style>
