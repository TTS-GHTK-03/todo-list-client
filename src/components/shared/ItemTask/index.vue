<template>
  <div
    class="flex flex-col justify-center items-center group w-[254px] h-[90px] bg-white hover:bg-gray-200 cursor-grab my-1 border border-b-2 border-b-gray-300 rounded">
    <div class="p-3  w-full h-full ">
      <div class="w-full flex flex-col justify-between ">
        <div class="flex justify-between relative">
          <div class="flex text-sm font-apple text-text-dark-thin ml-1 cursor-pointer">
            <span class="group-hover:underline ">{{ text }}</span>
            <div
              class="hover:bg-gray-300 w-5 h-5 flex items-center justify-center rounded ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <i class="fa-solid fa-pen text-xs "></i>
            </div>
          </div>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">
                  <a href="http://www.alipay.com/">Copy issue key</a>
                </a-menu-item>
                <hr>
                <a-menu-item key="1">
                  <a href="http://www.taobao.com/">Add flag</a>
                </a-menu-item>
                <a-menu-item key="2">
                  <a href="http://www.taobao.com/">Add label</a>
                </a-menu-item>
                <a-menu-item key="3">
                  <a href="http://www.taobao.com/">Link issue</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="5">Delete</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
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


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ItemTask',

});
</script>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  text: string;
  keyText: string;
  tooltipTitle: string;
}>();

const showDropdown = ref(false);
const dropdownMenu = ref<HTMLElement | null>(null);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function hideMenu() {
  showDropdown.value = false;
}

</script>


<style scoped>
@import 'index.scss'
</style>
