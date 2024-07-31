<template>
  <div class="flex flex-col justify-center items-center group w-[254px] h-[90px] bg-white hover:bg-gray-200 cursor-grab my-1 border border-b-2 border-b-gray-300 rounded">
    <div class="p-3  w-full h-full "> 
      <div class="w-full flex flex-col justify-between ">
        <div class="flex justify-between relative">
          <div class="flex text-sm font-apple text-text-dark-thin ml-1 cursor-pointer">
            <span class ="group-hover:underline ">{{ text }}</span>  
            <div class="hover:bg-gray-300 w-5 h-5 flex items-center justify-center rounded ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <i class="fa-solid fa-pen text-xs "></i>
            </div>
          </div>
          
          <div class="absolute right-[0px] top-[-5px] ">
            <button @click.stop="toggleDropdown" class=" text-sm text-text-dark-thin bg-white bg-opacity-30  hover:bg-gray-300 rounded h-8 w-8 flex  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>

            <div v-if="showDropdown" ref="dropdownMenu" @mouseleave="hideMenu" class="absolute top-[28px] left-0 mt-1 w-[200px]  bg-white border border-gray-300 rounded shadow-lg z-10">
                <div >
                    <div class="py-[8px] px-[20px] font-ui text-sm hover:bg-gray-300">
                      <button>Copy issue key</button>
                    </div>
                    <hr />
                    <div class="py-[8px] px-[20px] font-ui text-sm hover:bg-gray-300">
                      <button >Add flag</button>
                    </div>
                    <div class="py-[8px] px-[20px] font-ui text-sm hover:bg-gray-300" >
                      <button >Add label</button>
                    </div>
                    <div class="py-[8px] px-[20px] font-ui text-sm hover:bg-gray-300">
                      <button >Link issue</button>
                    </div>
                    <hr />
                    <div class="py-[8px] px-[20px] font-ui text-sm hover:bg-gray-300">
                      <button >Delete</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        <div class="flex justify-between  mt-4">
          <div class="flex items-center cursor-pointer">
            <i class="fa-solid fa-square-check text-blue-400 ml-1"></i>
            <span class="  text-xs font-medium font-apple text-text-dark ml-2 mb-1">
              {{ keyText }}
              
            </span>
          </div>
          <div>
            <a-tooltip placement="bottom">
              <template #title>
                {{ tooltipTitle }}
              </template>
              <div
                class="w-6 h-6 p-0 flex text-center items-center justify-center bg-[#39a3bf] bg-opacity-90 text-[#1e3d5f] text-opacity-80 font-semibold  rounded-full text-sm cursor-pointer">
                <!-- {{ text.charAt(0).toUpperCase() }} -->
                  A
              </div>
            </a-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref} from 'vue';
export default {
  name: 'MyComponent',
  props: {
    text: {
      type: String,
      required: true
    },
    keyText: {
      type: String,
      required: true
    },
    tooltipTitle: {
      type: String,
      required: true
    },
  
  },
  setup() {
    const showDropdown = ref(false);
    const dropdownMenu = ref<HTMLElement | null>(null);

    function toggleDropdown() {
            showDropdown.value = !showDropdown.value;
    };

    function hideMenu() {
      showDropdown.value = false;
    }
      
    return {
      toggleDropdown,
      dropdownMenu,
      showDropdown,
      hideMenu,
    }
  }
}
</script>

<style scoped>
@import 'index.scss'
</style>
