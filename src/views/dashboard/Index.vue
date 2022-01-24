<template>
  <div class="dashboard-root">
  </div>
</template>

<script>
export default {
  data(){
    return {
      obj: null,
    }
  },
  created(){
    this.$axios.get('https://github.com/Cheng-DX/vue-simple-template/graphs/traffic-data').then(res => {
      this.obj = res.data;
    })
  }
};
</script>
<style scoped>
.dashboard-root {
  height: 100%;
  width: 100%;
}

</style>