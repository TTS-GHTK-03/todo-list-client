<template>
  <div class="flex flex-col justify-center items-center group w-[254px] h-[90px] bg-white hover:bg-gray-200 cursor-grab my-1 border border-b-2 border-b-gray-300 rounded">
    <div class="p-3  w-full h-full "> 
      <div class="w-full flex flex-col justify-between ">
        <div class="flex justify-between relative">
          <div class="flex text-sm font-apple text-[#172B4D] ml-1 cursor-pointer">
            <span class ="group-hover:underline ">{{ text }}</span>  
            <div class="hover:bg-gray-300 w-5 h-5 flex items-center justify-center rounded ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <i class="fa-solid fa-pen text-xs "></i>
            </div>
          </div>
          
          <div class="absolute right-[0px] top-[-5px] ">
            <button class=" text-sm text-[#172B4D] bg-white bg-opacity-30  hover:bg-gray-300 rounded h-8 w-8 flex  items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>
          </div>
        </div>
        
        <div class="flex justify-between  mt-4">
          <div class="flex items-center cursor-pointer">
            <i class="fa-solid fa-square-check text-blue-400 ml-1"></i>
            <span class="  text-xs font-medium font-apple text-[#44546F] ml-2 mb-1">
              {{ keyText }}
              
            </span>
          </div>
          <div>
            <a-tooltip placement="bottom">
              <template #title>
                {{ tooltipTitle }}
              </template>
              <div
                class="w-6 h-6 p-0 flex text-center items-center justify-center bg-[#39a3bf] bg-opacity-90 text-[#1e3d5f] text-opacity-80 font-semibold  rounded-full text-sm ">
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
    buttonImgSrc: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
.text-custom {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
