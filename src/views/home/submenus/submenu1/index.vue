<template>
  <router-view/>
</template>

<script>
export default {
  computed: {
    routerName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
</style>