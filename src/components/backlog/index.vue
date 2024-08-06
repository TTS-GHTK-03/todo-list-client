<template>
    <div v-if="isLoading" class="loading-container">
        <div class="loader"></div>
    </div>
    <div v-else>
        <div class="mt-24 px-8 py-0 ">
            <div class="min-h-[130px] flex flex-col justify-around ">
                <div class="font-ui font-normal text-text-dark mb-2">
                    <span class="cursor-pointer hover:underline">Projects </span>
                    <span class="px-1">/</span>
                    <span class="cursor-pointer hover:underline"> My project name</span>
                </div>

                <div class="flex justify-between mb-8">
                    <span class="font-ui text-2xl font-semibold text-text-dark-thin">Backlog</span>
                    <div class="flex items-center">
                        <div class="flex space-x-2 text-text-dark-thin mr-2">

                            <i
                                class="fa-solid fa-share-nodes bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                            <i
                                class="fa-solid fa-up-right-and-down-left-from-center bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                        </div>



                        <button
                            class="bg-gray-100 text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-1">
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
                            <img class="w-8 h-8 rounded-full mx-auto cursor-pointer"
                                src="../../assets/img/logo_no_text.png" alt="" width="36" height="36" />
                        </a-button>

                        <a-button shape="circle" class="ml-3 w-9 h-9 flex items-center justify-center"
                            style="border: none; padding: 0">
                            <img class="w-8 h-8 rounded-full mx-auto cursor-pointer"
                                src="../../assets/img/logo_no_text.png" alt="" width="36" height="36" />
                        </a-button>
                    </div>
                </div>
            </div>
            <div class="h-[480px] overflow-y-auto mt-4">
                <div v-for="sprint in sprints" :key="sprint.id"
                    class="flex flex-col my-8 bg-gray-100 bg-opacity-70 cursor-pointer rounded">
                    <div class=" rounded flex flex-col mt-4 ">
                        <div class="flex justify-between font-apple text-text-dark-thin text-sm">
                            <div class="font-semibold flex items-center">
                                <div class="w-5 h-5 p-1 flex items-center ml-4">
                                    <input type="checkbox" id="checkbox" class="h-3 w-3  border-gray-300 rounded ">
                                </div>
                                <button @click="toggleSprint(sprint.id)">
                                    <i v-if="!isSprintNotVisible[sprint.id]"
                                        class="fa-solid fa-chevron-down ml-1 text-xs mr-2"></i>
                                    <i v-else class="fa-solid fa-chevron-right ml-1 text-xs mr-2"></i>
                                </button>
                                <span>{{ sprint.title }}</span>
                                <span class="font-apple text-xs text-[#626F86] font-normal ml-2">(1 issues)</span>
                            </div>
                            <div class="flex">
                                <button v-if="sprint.status === SprintStatus.TODO"
                                    class="h-8 font-medium bg-gray-200 bg-opacity-70 hover:bg-gray-300 px-3 rounded mr-2">
                                    Start sprint
                                </button>
                                <button v-else-if="sprint.status === SprintStatus.START"
                                    class="h-8 font-medium bg-gray-200 bg-opacity-70 hover:bg-gray-300 px-3 rounded mr-2">
                                    Complete sprint

                                </button>
                                <button
                                    class="bg-gray-200 bg-opacity-70 hover:bg-gray-300 transition-opacity rounded h-8 w-8  mr-2  ">
                                    <i class="fa-solid fa-ellipsis text-xl  pt-1"></i>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div v-show="!isSprintNotVisible[sprint.id]" class="m-2">
                        <div class="min-h-[30px]" @drop="onDrop($event, sprint.id)" @dragenter.prevent
                            @dragover.prevent>
                            <BacklogTask v-for="task in getTasksForSprint(sprint.id)" :key="task.id" :id="task.id"
                                :title="task.title || ''" :status="task.status || ''" :point="task.point || 0"
                                :userId="task.userId || ''" :keyProjectTask="task.keyProjectTask || ''" draggable="true"
                                @dragstart="startDrag($event, task)" />
                        </div>

                    </div>

                </div>


                <div class="flex flex-col  cursor-pointer rounded mt-2">
                    <div class=" rounded flex flex-col mt-4">
                        <div class="flex justify-between font-apple text-text-dark-thin text-sm">
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
                                    class="h-8 font-medium bg-gray-200 bg-opacity-70 hover:bg-gray-300 px-3 rounded mr-2">
                                    Create sprint
                                </button>

                            </div>
                        </div>
                    </div>

                    <div v-show="isBacklogVisible" class="mt-2 mx-2">

                        <div class="min-h-[30px] pb-1" @drop="onDrop($event, null)" @dragenter.prevent
                            @dragover.prevent>
                            <BacklogTask v-for="task in getTaskBacklog()" :key="task.id" :id="task.id"
                                :status="task.status || ''" :title="task.title || ''" :point="task.point || 0"
                                :userId="task.userId || ''" :keyProjectTask="task.keyProjectTask || ''" draggable="true"
                                @dragstart="startDrag($event, task)" />
                        </div>

                        <button v-if="!isCreateTask" @click.stop="toggleTask(true)"
                            class="w-full h-10 hover:bg-gray-200 py-1 mb-3 rounded text-sm font-apple text-text-dark-thin flex items-center justify-start">
                            <div>
                                <i class="fa-solid fa-plus font-semibold p-2"></i>
                                <span class="ml font-medium">Create issue</span>
                            </div>
                        </button>

                        <div v-else ref="taskDiv"
                            class="w-full min-h-10 flex justify-between items-center cursor-pointer border-2 border-blue-500">
                            <div class="flex ml-4 items-center w-full">
                                <div class="w-6 h-6 p-1 flex items-center">

                                </div>
                                <div
                                    class="flex items-center cursor-pointer ml-1 min-w-10 py-1 rounded hover:bg-gray-200">
                                    <i class="fa-solid fa-square-check text-blue-400 ml-1 "></i>
                                    <i class="fa-solid fa-chevron-down text-xs ml-2 "></i>
                                </div>
                                <input type="text" placeholder="What needs to be done?" v-model="inputCreateTask"
                                    @keydown.enter="handleEnterKey"
                                    class="flex-grow ml-4 p-1 border-none font-ui  text-text-dark-thin input-create-task placeholder:font-ui">
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <div class="min-h-10"></div>
    </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BacklogTask from '../shared/backlogTask/index.vue';
import { Sprint, fetchSprintProject, SprintProjectRequest } from '../../api/project';
import { fetchAllTask, Task, createNewTask } from '../../api/task';
import { updateSprintTask } from '../../api/task';
import { SprintStatus, sortSprints } from '../../utils/constants/enum';
import { useUserProjectStore } from '../../stores/projectSettingStores/accessStores/accessStore';


// interface BacklogTask {
//     id: string;
//     title: string;
//     point: number;
//     keyProjectTask: string;
//     userId: string;
//     sprintId: string;
// }

const isSprintNotVisible = ref<Record<string, boolean>>({});
const isCreateTask = ref(false);
const isBacklogVisible = ref(true);
const searchQuery = ref<string>('');
const isLoading = ref(true);
const inputCreateTask = ref('');
const statusSprintSearch = ref<string>('');
const sprints = ref<Sprint[]>([]);
const allUser = ref<any[]>([]);
const data = ref<Map<string | null, Task[]>>(new Map());

const taskDiv = ref<HTMLElement | null>(null);
const userProjectStore = useUserProjectStore();

// Functions
function startDrag(event: DragEvent, task: Task) {
    console.log(task);
    event.dataTransfer!.dropEffect = "move";
    event.dataTransfer!.effectAllowed = "move";
    event.dataTransfer!.setData("taskId", task.id);
    event.dataTransfer!.setData("sprint", task.sprintId);
};

async function createNewBacklogTask(title: string) {
    try {
        console.log("title:", title)
        const response = await createNewTask(title);

        const newTask = response.data;
        const tasks = data.value.get(null) || [];
        tasks.push(newTask);
        data.value.set(null, tasks);
    } catch (error) {
        console.error("Failed to create new task", error);
    }
}

const handleEnterKey = () => {
    if (inputCreateTask.value.trim()) {
        createNewBacklogTask(inputCreateTask.value);
        inputCreateTask.value = '';
    }
};

async function onDrop(event: DragEvent, newSprint: string) {
    const taskId = event.dataTransfer!.getData("taskId");
    const oldSprint = event.dataTransfer!.getData("sprint");

    const oldTasks = oldSprint != "null" ?
        data.value.get(oldSprint) || [] : data.value.get(null) || [];
    const newTasks = data.value.get(newSprint) || [];
    console.log("old sprint:", oldTasks);
    console.log("new sprint:", newTasks);

    // Tìm nhiệm vụ trong danh sách trạng thái cũ
    const taskIndex = oldTasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
        await updateSprintTask(taskId, newSprint);
        const [task] = oldTasks.splice(taskIndex, 1);
        task.sprintId = newSprint;
        newTasks.push(task);
        data.value.set(newSprint, newTasks);
        data.value.set(oldSprint, oldTasks);
    }

}

const toggleTask = (state: boolean) => {
    isCreateTask.value = state;
};

function toggleSprint(sprintId: string) {
    isSprintNotVisible.value[sprintId] = !isSprintNotVisible.value[sprintId];
}

function toggleBacklog() {
    isBacklogVisible.value = !isBacklogVisible.value;
}

const clearSearch = () => {
    searchQuery.value = '';
}

const getTasksForSprint = (sprintId: string) => {
    return data.value.get(sprintId) || [];
};
const getTaskBacklog = () => {
    return data.value.get(null) || [];
};



const handleClickOutside = (event: MouseEvent) => {
    if (taskDiv.value && !taskDiv.value.contains(event.target as Node)) {
        isCreateTask.value = false;
    }
};

async function loadAllUserProject() {
    try {
        await userProjectStore.loadUserProjects();
        allUser.value = userProjectStore.userProjects;
        console.log("all user:", allUser.value);
    } catch (error) {
        console.error("Failed to load user projects", error);
    }

}


onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});


onMounted(async () => {
    try {
        loadAllUserProject();

        const tasksResponse = await fetchAllTask();
        const map = new Map<string, Task[]>();
        tasksResponse.data.forEach((task) => {
            if (!map.has(task.sprintId)) {
                map.set(task.sprintId, []);
            }
            map.get(task.sprintId)!.push(task);
        });

        data.value = map;

        const requestPayload: SprintProjectRequest = { status: statusSprintSearch.value };
        const sprintResponse = await fetchSprintProject(requestPayload);
        const filteredSprints = (sprintResponse.data as Sprint[]).filter(sprint => sprint.status !== SprintStatus.COMPLETE);
        const sortedSprints = sortSprints(filteredSprints);
        sprints.value = sortedSprints;
    } catch (error) {
        console.error("Failed to fetch tasks", error);
    } finally {
        isLoading.value = false;
    }
});

// Exporting variables and functions to be used in the template
</script>


<style scoped>
@import "index.scss";
</style>