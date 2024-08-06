<template>
  <div class="profile-header bg-gray-200 relative bg-slate-200 bgImg">
    <div class="avatar-container absolute flex flex-col space-y-2.5 ml-72">
      <Avatar class="bg-slate-700 text-white inset-x-0" style="font-size: 50px" :size="100">MH</Avatar>
      <div>
        <h2 class="text-xl font-semibold my-3">Mai Thanh Hà</h2>
        <button class="bg-slate-100 text-sm w-72 border-0 font-semibold my-3 h-8 manage-button">Manage your account</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar, Button } from 'ant-design-vue';

export default {
  components: {
    Avatar,
    Button
  }
}

</script>

<style scoped>
@import "index.scss";
</style>