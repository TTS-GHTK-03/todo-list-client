<template>
  <div class="mt-20 px-10 py-0 ml-4 relative">
    <div class="h-[40px] flex justify-between">
      <span class="font-ui text-2xl font-semibold opacity-80">Projects</span>
      <div class="flex">
        <button
          @click="handleCreateProject()"
          class="h-[36px] bg-blue-600 text-white hover:bg-blue-700 px-3 mr-1 rounded"
        >
          Create project
        </button>
        <button
          class="h-[36px] bg-gray-100 text-black hover:bg-gray-300 px-3 rounded"
        >
          Template
        </button>
      </div>
    </div>

    <div class="mt-6">
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
          placeholder="Filter by product"
          class="custom-input w-[200px] min-h-[40px] border border-gray-500 rounded py-3 font-light pl-2 pr-10 placeholder-gray-400"
        />
        <i
          class="fa-solid fa-chevron-down absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
        ></i>

        <!-- Dropdown Menu -->
        <div
          v-show="isDropdownVisible"
          class="absolute z-10 mt-2 w-[200px] bg-white border border-gray-300 rounded shadow-lg"
        >
          <div class="text-sm font-normal font-apple">
            <label
              class="items-center block mt-2 py-2 border-l-4 border-white hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 transition-all"
            >
              <input
                type="checkbox"
                v-model="selectedFilters"
                value="business projects"
                class="ml-3"
              />
              <span class="ml-2 text-gray-700">Business Projects</span>
            </label>
            <label
              class="block mb-2 py-2 border-l-4 border-white hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 transition-all"
            >
              <input
                type="checkbox"
                v-model="selectedFilters"
                value="software projects"
                class="ml-3"
              />
              <span class="ml-2 text-gray-700">Software Projects</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div>
      <a-table
        :loading="loading"
        :row-selection="rowSelection"
        :columns="columns"
        :data-source="data"
        class="mt-6"
      >
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'name'">
            <div
              @click="handleProject(record.id)"
              class="text-button-color flex cursor-pointer hover:underline"
            >
              <img
                src="../../assets/img/project_logo.svg"
                alt=""
                height="24"
                width="24"
              />
              <span class="ml-2">{{ text }}</span>
            </div>
          </template>

          <template v-if="column.dataIndex === 'lead'">
            <div
              class="relative flex items-center cursor-pointer"
              @click="toggleHover(record.lead)"
            >
              <div
                class="w-6 h-6 flex items-center justify-center bg-[#1b2b4e] bg-opacity-90 text-white rounded-full text-xs mr-2"
              >
                {{ text.charAt(0) }}
              </div>

              <span
                class="text-button-color flex cursor-pointer hover:underline ml-1"
                >{{ text }}</span
              >
              <!-- Hover Box -->
              <div
                v-if="activeLead === record.lead"
                class="cursor-default absolute top-[-210px] left-0 w-[360px] h-[200px] bg-white border border-gray-300 shadow-lg z-50 flex flex-col rounded-lg"
              >
                <div
                  class="absolute top-[30px] left-[40px] w-[100px] h-[100px] rounded-full bg-[#1b2b4e] text-white text-5xl flex items-center justify-center"
                >
                  {{ text.charAt(0) }}
                </div>

                <div
                  class="w-full h-[100px] bg-blue-600 flex items-center justify-center border-t rounded"
                >
                  <div class="mt-8 ml-20 text-white font-apple text-lg">
                    {{ text }}
                  </div>
                </div>

                <div
                  class="w-full h-[100px] bg-white flex items-center justify-center flex-col"
                >
                  <div
                    class="mb-4 ml-32 text-text-dark-thin font-apple text-xs font-medium"
                  >
                    <i class="fa-regular fa-envelope mt-1"></i>
                    <span class="ml-2">email@gmail.com</span>
                  </div>
                  <button
                    class="mb-4 ml-48 bg-gray-200 hover p-2 text-text-dark-thin font-apple font-semibold border rounded"
                  >
                    View profile
                  </button>
                </div>
              </div>
            </div>
          </template>

          <template v-if="column.dataIndex === 'actions'">
            <div
              class="flex items-center justify-center h-10 w-10 cursor-pointer bg-white rounded hover:bg-gray-100 ml-8"
            >
              <i class="fa-solid fa-ellipsis text-2xl text-gray-500"></i>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { type TableProps, type TableColumnType } from "ant-design-vue/es";
import type { Key } from "ant-design-vue/es/table/interface";

import {
  useProjectStore,
  useProjectRoleStore,
} from "../../stores/projectStores/projectStore";
import { normalizeName } from "../../utils/normalizeName";

import "@fortawesome/fontawesome-free/css/all.css";

interface DataType {
  key: string;
  name: string;
  project: string;
  role: string;
  lead: string;
  projectUrl: string;
}

const columns: TableColumnType<DataType>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 250,
  },
  {
    title: "Key",
    dataIndex: "project",
    key: "project",
    width: 150,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: 250,
  },
  {
    title: "Lead",
    dataIndex: "lead",
    key: "lead",
    width: 250,
  },
  {
    title: "Project URL",
    dataIndex: "projectUrl",
    key: "projectUrl",
    width: 200,
  },
  {
    title: "More actions",
    dataIndex: "actions",
    key: "actions",
    width: 120,
  },
];

const rowSelection: TableProps<DataType>["rowSelection"] = {
  onChange: (selectedRowKeys: Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

export default {
  setup() {
    const router = useRouter();

    const searchQuery = ref("");
    const isDropdownVisible = ref(false);
    const selectedFilters = ref<string[]>([]);
    const activeLead = ref<string | null>(null);
    const data = ref<DataType[]>([]);
    const loading = ref(false);
    const projectStore = useProjectStore();

    const loadData = async () => {
      loading.value = true;
      try {
        await projectStore.loadProjects();
        const newProjects = projectStore.projects.map((project) => ({
          key: project?.id,
          name: project?.title || "",
          project: project?.keyProject || "",
          role: project?.roleUser || "",
          lead: normalizeName(
            project?.userNameResponseList[0]?.firstName,
            project?.userNameResponseList[0]?.middleName,
            project?.userNameResponseList[0]?.lastName
          ), // sau set list lead
        }));
        data.value = newProjects;
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        loading.value = false;
      }
    };

    const handleProject = (id: string) => {
      try {
        const projectRoleStore = useProjectRoleStore();
        console.log("projectRoleStore", projectRoleStore.loadProjectRole());
        router.push("/mainpage");
      } catch (error) {
        console.error("Error data:", error);
      } finally {
      }
    };

    const handleCreateProject = () => {
      router.push("/project-create");
    }

    const clearSearch = () => {
      searchQuery.value = "";
    };

    const toggleDropdown = (show: boolean) => {
      isDropdownVisible.value = show;
    };

    const toggleHover = (lead: string) => {
      if (activeLead.value === lead) {
        activeLead.value = null;
      } else {
        activeLead.value = lead;
      }
    };

    onMounted(() => {
      loadData();
    });

    return {
      searchQuery,
      isDropdownVisible,
      selectedFilters,
      data,
      columns,
      loading,
      rowSelection,
      activeLead,
      clearSearch,
      toggleHover,
      toggleDropdown,
      handleProject,
      handleCreateProject,
    };
  },
};
</script>

<style scoped>
@import "index.scss";
</style>
