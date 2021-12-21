<template>
  <div>
    <el-card class="card" v-for="sub in item" :key="sub.id">{{ sub.data }}</el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [],
    };
  },
  created() {
    this.$axios.get("/test").then((res) => {
      this.item= res.data;
    });
  },
  computed: {
    routerName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.card.el-card {
  margin-bottom: 20px;
  width: 20vw;
}
</style>