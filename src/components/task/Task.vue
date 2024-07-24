<template>
  <div class="mt-20 px-10 py-0 ml-10">
    <div class="flex">
      <div class="mr-10" style="width: 60%">
        <div class="pr-10" style="height: 580px; width: 100%;overflow-y: auto;">
          <div class="block bg-white" style="
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                z-index: 1;
              ">
            <span class="font-ui text-lg text-gray-400 block"
              >Projects / Test/Task</span
            >
            <span class="text-xl text-zinc-800 font-bold opacity-80 block mt-1"
              >Task 1</span
            >
          </div>
          <div class="mt-10">
            <div class="mb-4">
              <span class="text-zinc-600 font-bold">Description</span>
            </div>

            <div style="scroll-margin-bottom: 75pt">
              <div style="margin-bottom: 24px">
                <div style="margin-bottom: 24px">
                  <div style="margin-bottom: 24px">
                    <button v-if="!isEditing" @click="isEditing = true">
                      <span class="text-slate-500">{{
                        value_des ? value_des : "Add Description..."
                      }}</span>
                    </button>
                    <div v-else>
                      <a-textarea
                        v-model:value="value_des"
                        placeholder="Add Description..."
                        allow-clear
                        show-count :maxlength="100"
                      />
                      <a-button type="primary" class="mt-4" @click="saveEdit">Save</a-button>
                      <a-button class="mt-4 ml-2" @click="isEditing = false">Cancel</a-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="block">
            <div>
              <span class="text-zinc-600 font-bold">Activity</span>
            </div>
            <comment></comment>
          </div>

          <div class="mt-10"></div>
        </div>
      </div>

      <div style="width: 40%">
        <div>
          <div class="mb-10">
            <div class="flex justify-end">
              <a-button
                shape="circle"
                class="custom_icon flex items-center justify-center"
              >
                <span class="css-bwxjrz cursor-pointer">
                  <img src="../../assets/img/icon_clock.svg" />
                </span>
              </a-button>
              <a-button
                shape="circle"
                class="custom_icon flex items-center justify-center ml-2"
              >
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="presentation"
                  >
                    <path
                      d="M4 12v7a.971.971 0 00.278.704.99.99 0 00.701.296H6v-9H4.98a.99.99 0 00-.701.296A.971.971 0 004 12zm15.281-.96a3.046 3.046 0 00-2.321-1.061h-2.634c.04-.181.08-.36.11-.532.515-2.934 0-4-.504-4.594A2.432 2.432 0 0012.075 4a3.078 3.078 0 00-2.968 2.751c-.393 1.839-.454 2-.968 2.725l-.768 1.089a2.011 2.011 0 00-.363 1.141v6.273c.001.532.216 1.041.596 1.416s.896.585 1.433.584h7.247a3.014 3.014 0 002.997-2.507l.677-4a2.963 2.963 0 00-.677-2.432zm-1.998 6.1a1.007 1.007 0 01-1 .835H9.038v-6.269l.767-1.089a7.577 7.577 0 001.302-3.509c.036-.543.255-1.209.969-1.108.714.1.575 1.916.363 3.1a19.712 19.712 0 01-.868 2.882l5.39-.008c.297-.001.58.128.773.352a.993.993 0 01.226.813l-.676 4.001z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a-button>
              <a-button
                shape="circle"
                class="custom_icon flex items-center justify-center ml-2"
              >
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="presentation"
                  >
                    <g fill="currentColor" fill-rule="evenodd">
                      <path
                        d="M6 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm12-4a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 14a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z"
                        fill-rule="nonzero"
                      ></path>
                      <path d="M7 13.562l8.66 5 1-1.732-8.66-5z"></path>
                      <path d="M7 10.83l1 1.732 8.66-5-1-1.732z"></path>
                    </g></svg
                ></span>
              </a-button>
              <a-button
                shape="circle"
                class="custom_icon flex items-center justify-center ml-2"
              >
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="presentation"
                  >
                    <g fill="currentColor" fill-rule="evenodd">
                      <circle cx="5" cy="12" r="2"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </g>
                  </svg>
                </span>
              </a-button>
            </div>
          </div>
          <div class="block">
            <div class="relative inline-block">
              <a-select
                ref="select"
                v-model:value="value1"
                style="width: 106px"
                @focus="focus"
                @change="handleChange"
              >
                <a-select-option value="jack">To do</a-select-option>
                <a-select-option value="lucy">In progress</a-select-option>
                <a-select-option value="Yiminghe">Done</a-select-option>
              </a-select>
            </div>

            <div class="relative inline-block ml-4">
              <button
                :class="[
                  'text-[#44546F] px-2 py-2 text-sm  rounded transition duration-300',
                  activeModal === index
                    ? 'bg-white text-inherit hover:bg-slate-200'
                    : 'hover:bg-gray-200',
                ]"
                ref="buttonRefs"
                :data-index="index"
                @click="openModal(index, $event)"
              >
                Actions
                <i class="fas fa-chevron-down text-xs ml-2"></i>
              </button>
            </div>
          </div>

          <div class="mt-10">
            <a-card size="small" title="Details">
              <template #extra><a href="#">more</a></template>
              
              <a-form layout="vertical">
                <div class="flex items-center space-x-4">
                  <label class="min-w-24">Assignee:</label>
                  <a-select
                    v-model="selectedAssignee"
                    placeholder="Select assignee"
                    :options="assignees"
                    class="w-full"
                  />
                </div>
                <div class="flex items-center space-x-4 mt-5">
                  <label class="min-w-24">Labels:</label>
                  <!-- Label -->
                  <div>
                    <label-add></label-add>
                  </div>
                  <!--  -->
                </div>
                <div class="flex items-center space-x-4 mt-5">
                  <label class="min-w-24">Sprint:</label>
                  <a href="">Test</a>
                </div>
                <div class="flex items-center space-x-4 mt-5">
                  <label class="min-w-24">Reporter:</label>
                  <a-input v-model="labels" placeholder="Enter labels" />
                </div>
              </a-form>
            </a-card>
            <div class="text-gray-500 text-sm mt-4">
              <p>Created July 10, 2024 at 11:35 AM</p>
              <p>Updated 12 minutes ago</p>
            </div>
            <a-button type="primary" class="mb-6" @click="configure"> Configure</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, nextTick } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";
import { defineComponent, markRaw } from "vue";
import Comment from "./Comment.vue";
import LabelAdd from "./LabelAdd.vue";
import { PlusOutlined } from '@ant-design/icons-vue';

export default {
  name: "Board",
  components: {
    Comment,
    LabelAdd,
    // ItemTask: markRaw(ItemTask),
  },
  setup() {
    const value_des = ref("");
    const isEditing = ref(false);

    const saveEdit = () => {
      if (!value_des.value) {
        return;
      }
      isEditing.value = false;
    };

    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    const selectedAssignee = ref(null);
    const assignees = ref([
      { label: 'Luan Han', value: 'luan-han' },
      { label: 'Unassigned', value: 'unassigned' },
      { label: 'Automatic', value: 'automatic' },
    ]);

    return {
      assignees,
      value_des,
      isEditing,
      saveEdit,
    };
  },
};
</script>

<style scoped>
.custom_icon {
  border: none;
  padding: 0;
}
</style>
