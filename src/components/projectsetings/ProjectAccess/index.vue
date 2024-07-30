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
          >Access</span
        >
        <div class="flex items-center">
          <button
            class="h-[36px] bg-blue-600 text-white hover:bg-blue-700 px-3 mr-1 rounded h-9 flex items-center"
          >
            Add people
          </button>
        </div>
      </div>

      <div class="flex">
        <div class="box-border mb-8 w-full">
          <div class="flex items-center rounded custom-access">
            <img
              src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/access-banner.e0758cd5.svg"
              alt=""
            />
            <div>
              <div class="text-gray-800">
                To customize user access, such as roles and permissions, upgrade
                your plan to Standard.
              </div>
              <div class="flex items-center mt-3 mr-4 gap-2">
                <div>
                  <a
                    class="inline-flex items-center rounded border-0 text-white py-1.5 px-3 css-1ncptc6"
                    href=""
                  >
                    <span>Upgrade</span>
                  </a>
                </div>
                <a href="">
                  <span class="text-sky-500"
                    >Learn more about managing access</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="relative inline-block mr-6">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search projects"
            class="custom-input w-[224px] min-h-[40px] border border-gray-500 rounded py-3 font-light pl-2 pr-10 placeholder-gray-400 hover:border-blue-600"
          />
          <i
            v-if="searchQuery"
            @click="clearSearch"
            class="fa-solid fa-x absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          ></i>
          <i
            v-else
            class="fa-solid fa-magnifying-glass absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          ></i>
        </div>

        <div class="relative inline-block">
          <input
            type="text"
            @focus="toggleDropdown(true)"
            @blur="toggleDropdown(false)"
            placeholder="Roles"
            class="custom-input w-[100px] min-h-[40px] border border-gray-500 rounded py-3 font-light pl-2 pr-10 placeholder-gray-400"
          />
          <i
            class="fa-solid fa-chevron-down absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          ></i>

          <!-- Dropdown Menu -->
        </div>
      </div>
      <div>
        <a-table :columns="columns" :data-source="data" class="mt-6">
          <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex === 'name'">
              <div class="flex">
                <img
                  src="../../assets/img/project_logo.svg"
                  alt=""
                  height="24"
                  width="24"
                />
                <span class="text-slate-950 ml-2">{{ text }}</span>
              </div>
            </template>
            <template v-if="column.dataIndex === 'role'">
              <a-select
                v-model:value="record.role"
                style="width: 160px"
                :dropdown-match-select-width="false"
                @change="handleRoleChange(record)"
              >
                <a-select-option value="admin">Administrator</a-select-option>
                <a-select-option value="member">Member</a-select-option>
                <a-select-option value="view">Viewer</a-select-option>
              </a-select>
            </template>

            <template v-if="column.dataIndex === 'actions'">
              <div
                @click="confirmRemove(record)"
                class="text-[#0C66E4] flex items-center justify-center cursor-pointer bg-white rounded hover:bg-gray-100 ml-8"
              >
                Remove
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- Dialog -->
    <a-modal
      v-model:visible="isModalVisible"
      title="Confirm Deletion"
      @ok="handleOk"
      @cancel="handleCancel"
      :maskClosable="false"
    >
      <p>
        Are you sure you want to delete the project "{{ projectToRemove.name }}"
        with email "{{ projectToRemove.email }}"?
      </p>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useUserProjectStore } from "../../../stores/projectSettingStores/accessStores/accessStore";

interface DataType {
  name: string;
  email: string;
  role: string;
  action: string;
}

const columns: TableColumnType<DataType>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 250,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 350,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: 200,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    width: 120,
  },
];

export default defineComponent({
  setup() {
    const searchQuery = ref("");
    const isModalVisible = ref(false);
    const projectToRemove = ref<{
      id: string;
      name: string;
      email: string;
    } | null>(null);

    const accessStore = useUserProjectStore();
    const data = ref<DataType[]>([]);

    const loadData = async () => {
      await accessStore.loadUserProjects();
      const newProjects = accessStore.userProjects.map((project) => ({
        key: project?.id,
        name: project?.firstName || "",
        email: project?.email || "",
        role: project?.roleUser || "",
      }));
      data.value = newProjects;
      console.log("Item:", data);
    };

    onMounted(() => {
      loadData();
    });

    const clearSearch = () => {
      searchQuery.value = "";
    };

    const handleRoleChange = (record: DataType) => {
      console.log("Role changed for:", record);
    };

    const confirmRemove = (record: DataType) => {
      projectToRemove.value = {
        id: record.key,
        name: record.name,
        email: record.email,
      };
      isModalVisible.value = true;
    };

    const handleOk = async () => {
      if (projectToRemove.value) {
        await accessStore.removeUserProject(projectToRemove.value.id);
        await loadData();
      }
      isModalVisible.value = false;
    };

    const handleCancel = () => {
      isModalVisible.value = false;
    };

    return {
      data,
      columns,
      searchQuery,
      clearSearch,
      handleRoleChange,
      confirmRemove,
      isModalVisible,
      handleOk,
      handleCancel,
      projectToRemove,
    };
  },
});
</script>

<style>
@import "index.scss";
</style>
