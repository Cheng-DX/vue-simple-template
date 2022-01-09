<template>
  <span>FOR TEST</span>
</template>

<script>
export default {
  /*
  数据路径：
  '/getAllData': '全部数据',
  '/getErrorData' : '异常数据',
  '/getProp2label' : 'label和prop的转换'
  使用GET请求
  */
  created() {
    this.$axios.get("/getAllData").then((res) => {
      console.log(res.data);
    });
    this.$axios.get("/getErrorData").then((res) => {
      console.log(res.data);
    });
    this.$axios.get("/getProp2label").then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style>
</style>