<template>
    <MainNavbar />
    <router-view />
</template>

<script lang="ts">
import MainNavbar from '../components/shared/MainNavbar.vue';

export default {
  components: {MainNavbar},
};
</script>