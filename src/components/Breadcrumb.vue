<template>
  <div class="breadcrumb-root">
    <el-breadcrumb  class="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :key="index"
        :to="item.path"
        >{{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    breadList() {
      return this.$route.matched;
    },
  },
};
</script>

<style scoped>
.breadcrumb-root {
  display: flex;
  vertical-align: middle;
  background: transparent;
  height: 100%;
  padding: 0 10px;
}
.breadcrumb {
  font-size: 18px;
  align-self: center;
}
</style>

