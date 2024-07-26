<template>
  <div class="mt-24 px-8 py-0">
    <div class="min-h-[150px] flex flex-col justify-around">
      <div class="font-ui font-normal text-[#44546F] mb-2">
        <span class="cursor-pointer hover:underline">emails </span>
        <span class="px-1">/</span>
        <span class="cursor-pointer hover:underline"> email 1</span>
        <span class="px-1">/</span>
        <span class="cursor-pointer hover:underline"> email setings</span>
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
        <a-table :columns="columns" :data-source="data" class="mt-6">
          <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex === 'name'">
              <div class="text-[#0C66E4] flex">
                <img
                  src="../../assets/img/email_logo.svg"
                  alt=""
                  height="24"
                  width="24"
                />
                <span class="ml-2">{{ text }}</span>
              </div>
            </template>
            <template v-if="column.dataIndex === 'role'">
              <div
                class="relative flex items-center cursor-pointer"
                @click="toggleHover(record.role)"
              >
                <div
                  class="w-6 h-6 flex items-center justify-center bg-[#1b2b4e] bg-opacity-90 text-white rounded-full text-xs mr-2"
                >
                  {{ text.charAt(0) }}
                </div>
                <span
                  class="text-[#0C66E4] flex cursor-pointer hover:underline ml-1"
                  >{{ text }}</span
                >
                <!-- Hover Box -->
                <div
                  v-if="activerole === record.role"
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
                      class="mb-4 ml-32 text-[#172B4D] font-apple text-xs font-medium"
                    >
                      <i class="fa-regular fa-envelope mt-1"></i>
                      <span class="ml-2">email@gmail.com</span>
                    </div>
                    <button
                      class="mb-4 ml-48 bg-gray-200 hover p-2 text-[#172B4D] font-apple font-semibold border rounded"
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

    <div class="flex flex-wrap gap-6 mt-10"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

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

const data: DataType[] = [
  {
    key: "1",
    name: "Name 1",
    email: "h@gmail.com",
    role: "AliceJohnson",
  },
  {
    key: "2",
    name: "Name 2",
    email: "hh@gmail.com",
    role: "BobSmith",
  },
];

export default {
  setup() {
    const searchQuery = ref("");

    const clearSearch = () => {
      searchQuery.value = "";
    };
    return {
      data,
      columns,
      searchQuery,
      clearSearch,
    };
  },
};
</script>

<!-- <style scoped>
@import 'index.scss';
</style> -->
