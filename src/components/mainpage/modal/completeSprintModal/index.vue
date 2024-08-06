<template>
    <div>
        <span @click="showModal" >Complete sprint</span>
        <a-modal 
            v-model:open="open" 
            title="Title" 
            :confirm-loading="confirmLoading" 
            @ok="handleOk" 
            class="modal-custom"
            :bodyStyle="{ padding: '24px' }" 
        >
            <p>modal</p>
        </a-modal>
        <div v-if="open" class="fixed inset-0 bg-blue-500 bg-opacity-30 z-50"></div>  <!-- Blue overlay -->
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const open = ref<boolean>(false);
const confirmLoading = ref<boolean>(false);

const showModal = () => {
    open.value = true;
};

const handleOk = () => {
    open.value = false;
};
</script>

<style scoped>
.modal-custom .ant-modal {
    max-width: 800px;  /* Use Tailwind utility for width adjustment */
}
</style>
