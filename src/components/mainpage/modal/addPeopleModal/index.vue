<template>
  <a-modal :visible="visible" @ok="handleOk" @cancel="closeModal">
    <div class="add-people-content">
      <div class="flex justify-between">
        <h3 class="text-xl leading-6 font-medium text-gray-900">Add People</h3>
        <button class="text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-2">
          <i class="fa-solid fa-ellipsis text-xl"></i>
        </button>
      </div>
      <div class="mt-2 flex flex-col items-start">
        <label for="email" class="text-xs text-slate-400">Names or emails</label>
        <input
          id="email"
          type="text"
          placeholder="e.g., Maria, maria@company.com"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div class="mt-4 flex flex-col items-start">
        <label class="text-xs text-slate-400">Role</label>
        <select
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Administrator</option>
          <option>Member</option>
          <option>Viewer</option>
        </select>
      </div>
    </div>
    <template #footer>
      <button
        type="button"
        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
        @click="addPeople"
      >
        Add
      </button>
      <button
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
        @click="closeModal"
      >
        Cancel
      </button>
    </template>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, watch, toRefs } from 'vue';

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const { visible } = toRefs(props);

    const closeModal = () => {
      emit('update:visible', false);
    };

    const addPeople = () => {
      closeModal();
    };

    const handleOk = () => {
      addPeople();
    };

    return {
      visible,
      closeModal,
      addPeople,
      handleOk,
    };
  },
});
</script>

<style scoped>
.add-people-content {
  padding: 16px;
}
</style>
