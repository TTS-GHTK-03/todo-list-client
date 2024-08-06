<template>
  <!-- Loading Spinner -->
  <div v-if="isLoading" class="loading-container">
    <a-spin size="large" />
  </div>
  <div v-else>
    <div class="mt-24 px-8 py-0">
      <div class="min-h-[150px] flex flex-col justify-around">
        <div class="font-ui font-normal text-text-dark mb-2">
          <span class="cursor-pointer hover:underline">Projects </span>
          <span class="px-1">/</span>
          <span class="cursor-pointer hover:underline"> Project 1</span>
          <span class="px-1">/</span>
          <span class="cursor-pointer hover:underline"> Project settings</span>
        </div>

        <div class="flex justify-between mb-12">
          <span class="font-ui text-2xl font-semibold text-text-dark-thin">Details</span>
          <div class="flex items-center">
            <button
              class="bg-gray-100 text-sm text-text-dark-thin hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-2"
            >
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center w-full min-h-screen">
          <div class="max-w-lg w-full p-12 bg-white">
            <img
              src="https://hanluan1001.atlassian.net/secure/viewavatar?size=xxxlarge@2x&avatarId=10407&avatarType=project"
              alt="Project avatar"
              class="w-24 h-24 mx-auto mb-4"
            />
            <a-upload class="w-full mb-4 flex justify-center">
              <a-button>Change icon</a-button>
            </a-upload>
            <!-- :form="form"  @finish="onFinish" -->
            <a-form  layout="vertical"> 
              <a-form-item
                label="Name"
                name="name"
                :rules="[
                  { required: true, message: 'Please input the project name!' },
                ]"
              >
                <a-input v-model:value="project.title" />
              </a-form-item>
              <a-form-item
                label="Key"
                name="key"
                :rules="[
                  { required: true, message: 'Please input the project key!' },
                ]"
              >
                <a-input v-model:value="project.keyProject" />
              </a-form-item>
            
              <!-- <a-form-item
                label="Project lead"
                name="projectLead"
                :rules="[
                  { required: true, message: 'Please select the project lead!' },
                ]"
              >
                <a-select placeholder="Select project lead">
                  <a-select-option value="luan-han">Luan Han</a-select-option>
                </a-select>
              </a-form-item> -->
              <a-form-item
                label="Project lead"
                name="projectLead"
                :rules="[
                  { required: true, message: 'Please select the project lead!' },
                ]"
              >
                <a-select v-model:value="selectedProjectLead" placeholder="Select project lead">
                  <a-select-option v-for="(lead, index) in project.userNameResponseList" :key="index" :value="lead.firstName">
                    {{ lead.firstName }}
                  </a-select-option>
                </a-select>

              </a-form-item>

              <a-form-item label="Default assignee" name="defaultAssignee">
                <a-select placeholder="Select default assignee">
                  <a-select-option value="unassigned">Unassigned</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item class="flex justify-center">
                <a-button type="primary" htmlType="submit">Save</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import {  ref, onMounted } from "vue";
import { useProjectDetailStore } from "../../../../stores/projectSettingStores/detailStores/detailStore";

export default {
  setup() {
    const project = ref({})
    const isLoading = ref(true)
    const projectStore = useProjectDetailStore();
    const loadData = async () => {
      isLoading.value = true
      try {
        await projectStore.loadProjectDetail();
        project.value = projectStore.project
        console.log("project:", project.value.userNameResponseList);
      } catch (error) {
        
      }finally {
        isLoading.value = false
      }
    };

    const projectLeads = ref([

    ]);

    // Gọi loadData khi component được mount
    onMounted(() => {
      loadData();
      // if (project.value.userNameResponseList.length > 0) {
      //   selectedProjectLead.value = project.value.userNameResponseList[0].value;
      // }
    });

    return {
      project,
      isLoading,
    };
  },
};
</script>
