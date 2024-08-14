<template>
    <div @click="showModal" class="w-full h-full flex justify-start items-center z-50 px-4 bg-white hover:bg-gray-200">
        <span>Delete sprint</span>
        <a-modal v-model:open="open" @ok="handleOk" class="modal-custom  rounded-none mt-[-30px]"
            :closable="false" :width="500" :footer=null>

            <!-- header -->
            <div class="text-xl font-apple text-text-dark-thin font-semibold ml-2">
                <span>
                    <i class="fa-solid fa-triangle-exclamation  text-red-500 mr-1"></i>
                    Delete sprint
                </span>
            </div>

            <!-- body -->
            <div class="mt-6 text-sm font-apple text-text-dark-thin ml-2">
                <div>
                    <span >Are you sure you want to delete sprint <span class="font-bold">SCRUM Sprint 3?</span></span>
                </div>

            </div>

            <!-- footer -->
            <div class="flex justify-end w-full mt-6">
                <div class="font-apple font-semibold">
                    <button key="back" @click="handleCancel"
                        class="text-text-dark-thin  hover:bg-gray-200 px-4 py-2 rounded">
                        <span>Cancel</span>
                    </button>
                    <button @click="deleteSprintInfo"
                        class="bg-red-500 hover:bg-red-700  text-white px-4 py-2 rounded ml-2 ">
                        <span v-if="!isLoading">
                            Delete
                        </span>
                        <div v-if="isLoading"
                            class="w-5 h-5 border-4 border-white border-t-transparent border-solid rounded-full animate-spin">
                        </div>
                    </button>

                   
                </div>
            </div>


        </a-modal>
        <div v-if="open" class="fixed inset-0 bg-blue-500 bg-opacity-30 z-40"></div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'startSprintModal',
})
</script>

<script lang="ts" setup>
import { ref} from 'vue';
import { deleteSprint } from '../../../../api/sprint';


const emit = defineEmits<{
    (event: 'sprintDeleted'): void;
}>();

const props = defineProps<{
    sprintName: string;
    sprintId: string;
   
}>();

const open = ref<boolean>(false);

const isLoading = ref<boolean>(false);

const showModal = () => {
    open.value = true;


};

async function deleteSprintInfo() {
    isLoading.value = true;
    try {
        await deleteSprint(props.sprintId);
        // emit('sprintDeleted');
        open.value = false;
    } catch (error) {
        console.log(error);
    } finally {
        isLoading.value = false;
    }
}


const handleOk = () => {
    open.value = false;
};

const handleCancel = () => {
    open.value = false;
};



</script>


<style lang="scss" scoped>

</style>