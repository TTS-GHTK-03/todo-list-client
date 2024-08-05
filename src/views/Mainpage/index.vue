<template>

  <div >
    <MainNavbar />
    <router-view />
  </div>

</template>

<script lang="ts" setup>
import MainNavbar from '../../components/shared/MainNavbar/index.vue';

</script>

<style scoped>
@import 'index.scss';
</style>
