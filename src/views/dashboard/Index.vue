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
  created() {
    this.$axios.get("test/getAllUsers").then(res => {
      console.log(res.data)
    })
  },
  computed: {
    githubUsername() {
      return this.$store.state.githubUsername;
    },
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