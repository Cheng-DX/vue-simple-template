<template>
  <div class="root">
    <el-breadcrumb separator="/" class="breadcrumb">
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
  data() {
    return {};
  },
  computed: {
    breadList() {
      return this.$route.matched;
    },
  },
};
</script>

<style scoped>
.root {
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

