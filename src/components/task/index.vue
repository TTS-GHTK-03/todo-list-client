<template>
  <div class="mt-20 px-10 py-0 ml-10">
    <div class="flex">
      <div class="mr-10" style="width: 60%">
        <div class="pr-10" style="height: 580px; width: 100%; overflow-y: auto">
          <div
            class="block bg-white"
            style="
              position: -webkit-sticky;
              position: sticky;
              top: 0;
              z-index: 1;
            "
          >
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
                        show-count
                        :maxlength="100"
                      />
                      <a-button type="primary" class="mt-4" @click="saveEdit"
                        >Save</a-button
                      >
                      <a-button class="mt-4 ml-2" @click="isEditing = false"
                        >Cancel</a-button
                      >
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
            <div class="flex items-center justify-end">
              <div class="flex space-x-2 text-[#172B4D] mr-2">
                <i class="fa-solid fa-bolt bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                <i class="fa-regular fa-star bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                <i class="fa-solid fa-share-nodes bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
                <i class="fa-solid fa-up-right-and-down-left-from-center bg-white hover:bg-gray-200 rounded w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-150"></i>
              </div>

              <button class="bg-gray-100 text-sm text-[#172B4D] hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-2">
                <i class="fa-solid fa-ellipsis text-xl"></i>
              </button>
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
            <a-button type="primary" class="mb-6" @click="configure">
              Configure</a-button
            >
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
import { PlusOutlined } from "@ant-design/icons-vue";

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
      { label: "Luan Han", value: "luan-han" },
      { label: "Unassigned", value: "unassigned" },
      { label: "Automatic", value: "automatic" },
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
