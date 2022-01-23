<template>
  <div class="breadcrumb-root">
    <el-breadcrumb class="breadcrumb">
      <transition-group name="transition-breadcrumb">
        <el-breadcrumb-item
          v-for="item in breadList"
          :key="item.path"
          :to="item.path"
          >{{ item.name }}</el-breadcrumb-item
        >
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    breadList() {
      const matchedRoutes = this.$route.matched;
      if (matchedRoutes.length === 0) {
        return [];
      } else if (matchedRoutes[0].path === "") {
        // 去掉path为空的的layout
        return matchedRoutes.slice(1);
      } else {
        return matchedRoutes;
      }
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
.transition-breadcrumb-enter-active,
.transition-breadcrumb-leave-active {
  transition: all 0.5s;
}
.transition-breadcrumb-enter,
.transition-breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.transition-breadcrumb-move {
  transition: all 0.5s;
}
.transition-breadcrumb-leave-active {
  position: absolute;
}
</style>

