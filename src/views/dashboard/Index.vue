<template>
  <div class="dashboard-root">
    <Ribbon
      text="STAR ME ON GITHUB🐰"
      url="https://github.com/Cheng-DX/vue-simple-template"
      position="right-bottom"
      color="#73549E"
      fixed
    />
  </div>
</template>

<script>
import Ribbon from "vue-ribbon";
export default {
  components: {
    Ribbon,
  },
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
    this.$axios(
      "https://api.github.com/orgs/Cheng-DX/vue-simple-template/repos"
    )
      .then((res) => {
        console.log(res.data);
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
  background: #3f83dbc9;
}
</style>