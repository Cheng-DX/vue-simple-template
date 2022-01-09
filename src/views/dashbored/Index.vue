<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.$axios.get("/demo/test1").then((res) => {
      this.msg = res.data;
    });
  },
};
</script>