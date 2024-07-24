<template>
  <div v-if="isVisible" class="fixed inset-x-0 flex items-start justify-center bg-opacity-50 transition-opacity duration-300 ease-in-out">
    <div class="bg-white w-[320px] shadow-lg border rounded border-gray-500 border-opacity-20 p-0 relative">
      
      <div>
        <a-anchor
          ref="anchor"
          direction="horizontal"
          :items="[
            {
              key: 'assigned',
              href: '#assigned',
              title: 'Assigned to me',
            },
            {
              key: 'recent',
              href: '#recent',
              title: 'Recent',
            },
            {
              key: 'boards',
              href: '#boards',
              title: 'Boards',
            },
          ]"
          @change="handleAnchorChange"
          class="flex font-ui text-sm font-medium text-[#44546F] justify-start mt-2 mx-3 cursor-pointer"
        />
      </div>
      <div class="border-b border-black opacity-20 mb-0"></div>

      <div class="min-h-[100px] flex items-center text-center mx-6 font-apple text-sm font-normal">
        <span v-if="currentTab === 'assigned'">You have no open issues assigned to you</span>
        <span v-if="currentTab === 'recent'">Recent activity will be shown here</span>
        <span v-if="currentTab === 'boards'">Board related information will be shown here</span>
      </div>

      <div class="border-b border-black opacity-20 mb-0"></div>

      <div class="w-full mt-1">
        <button class="w-full h-10 bg-white text-[#172B4D] text-sm font-ui font-normal mb-2 hover:bg-gray-200 hover:bg-opacity-80 pl-5 flex items-center">
          Go to work page
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue';

export default defineComponent({
  name: 'ProjectModal',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },

  setup(props) {
    const currentTab = ref('assigned'); // Default tab is 'assigned'
    const anchor = ref(null);

    const handleAnchorChange = (event: any) => {
      const anchor = event || '';
      const key = anchor.replace('#', '');
      setTab(key);
    };

    const setTab = (tab: string) => {
      currentTab.value = tab;
    };

    onMounted(async () => {
      await nextTick();
      if (anchor.value) {
        const assignedTab = anchor.value.$el.querySelector('[href="#assigned"]');
        if (assignedTab) {
          assignedTab.click();
        }
      }
    });

    return {
      currentTab,
      handleAnchorChange,
      anchor,
    };
  },
});
</script>
