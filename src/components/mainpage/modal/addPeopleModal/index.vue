<template>
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto"  @click="closeModal">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
  
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
        
        <div class="add-people inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <div class="flex justify-between" >
                <h3 class="text-xl leading-6 font-medium text-gray-900" id="modal-title">Add People</h3>
                <button class= "text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-2">
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
                <label class="text-xs text-slate-400">
                  Role
                </label>
                <select 
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                >
                  <option>Administrator</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
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
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showModal: {
        type: Boolean,
        required: true,
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      addPeople() {
        this.closeModal();
      }
    }
  }
  </script>
  
  <style scoped>
  @import "index.scss";
  </style>
  