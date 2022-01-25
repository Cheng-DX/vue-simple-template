<template>
  <div class="dashboard-root"></div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: null,
    };
  },
  computed: {
    githubUsername() {
      return this.$store.state.githubUsername;
    },
  },
  created() {
    this.$axios
      .get("https://api.github.com/users/" + this.githubUsername)
      .then((res) => {
        this.userInfo = res.data;
        // 迭代userInfo的所有属性，并将其设置为null
      });
    this.$axios("https://api.github.com/orgs/Cheng-DX/vue-simple-template/repos")
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.dashboard-root {
  height: 100%;
  width: 100%;
}
</style>