<template>
  <div class="root">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #25252549;
  border-radius: 3px;
}

.root {
  background: url("./assets/test1.jpg") no-repeat;
  background-size: 100vw 100vh;
  .el-button {
    background: transparent;
  }
  .el-card {
    background: transparent;
  }
  .el-select {
    background: transparent;
  }
}
</style>
