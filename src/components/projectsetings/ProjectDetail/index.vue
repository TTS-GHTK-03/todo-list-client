<template>
  <div class="mt-24 px-8 py-0">
    <div class="min-h-[150px] flex flex-col justify-around">
      <div class="font-ui font-normal text-[#44546F] mb-2">
        <span class="cursor-pointer hover:underline">Projects </span>
        <span class="px-1">/</span>
        <span class="cursor-pointer hover:underline"> Project 1</span>
        <span class="px-1">/</span>
        <span class="cursor-pointer hover:underline"> Project setings</span>
      </div>

      <div class="flex justify-between mb-12">
        <span class="font-ui text-2xl font-semibold text-[#172B4D]"
          >Details</span
        >
        <div class="flex items-center">
          <button
            class="bg-gray-100 text-sm text-[#172B4D] hover:bg-gray-200 rounded h-9 w-9 flex px-2 items-center justify-center ml-2"
          >
            <i class="fa-solid fa-ellipsis text-xl"></i>
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center w-full min-h-screen">
        <div class="max-w-lg w-full p-6 bg-white">
            <img
                src="https://hanluan1001.atlassian.net/secure/viewavatar?size=xxxlarge@2x&avatarId=10407&avatarType=project"
                alt="Project avatar"
                class="w-16 h-16 mx-auto mb-4"
            />
            <a-upload class="w-full mb-4 flex justify-center">
                <a-button>Change icon</a-button>
            </a-upload>
            <a-form :form="form" @finish="onFinish" layout="vertical">
                <a-form-item
                label="Name"
                name="name"
                :rules="[
                    { required: true, message: 'Please input the project name!' },
                ]"
                >
                <a-input />
                </a-form-item>
                <a-form-item
                label="Key"
                name="key"
                :rules="[
                    { required: true, message: 'Please input the project key!' },
                ]"
                >
                <a-input />
                </a-form-item>
                <a-form-item label="Category" name="category">
                <a-select placeholder="Choose a category">
                    <a-select-option value="category1">Category 1</a-select-option>
                    <a-select-option value="category2">Category 2</a-select-option>
                </a-select>
                </a-form-item>
                <a-form-item
                label="Project lead"
                name="projectLead"
                :rules="[
                    { required: true, message: 'Please select the project lead!' },
                ]"
                >
                <a-select placeholder="Select project lead">
                    <a-select-option value="luan-han">Luan Han</a-select-option>
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
</template>

<script lang="ts">
import { Form, Input, Select, Button, Upload } from 'ant-design-vue';
import { defineComponent, ref } from "vue";

export default {
  setup() {
    return {};
  },
};
</script>
