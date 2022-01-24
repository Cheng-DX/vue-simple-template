<template>
  <el-collapse-transition>
    <div class="header-bottom" v-show="routerTagVisible">
      <el-tag
        v-for="item in catchedRoutes"
        :key="item.path"
        type="info"
        :closable="routerTagClosable"
        @close="removeRoute(item)"
        :style="{
          marginRight: '10px',
          marginBottom: '5px',
          backgroundColor: routerTagColor,
          borderColor: routerTagColor,
        }"
      >
        <router-link :to="item.path" class="link-tag">
          <i :class="item.icon" />
          {{ item.name }}
        </router-link>
      </el-tag>
    </div>
  </el-collapse-transition>
</template>

<script>
export default {
  name: "RouterTags",
  methods: {
    removeRoute(route) {
      this.$store.commit("removeRoute", route);
    },
  },
  computed: {
    catchedRoutes() {
      return this.$store.state.catchedRoutes;
    },
    routerTagVisible() {
      return (
        this.$store.state.routerTagVisible &&
        (this.$store.state.catchedRoutes.length > 0 ||
          !this.$store.state.notShownWhenEmpty)
      );
    },
    routerTagClosable() {
      return this.$store.state.routerTagClosable;
    },
    routerTagColor() {
      return this.$store.state.routerTagColor;
    },
  },
};
</script>

<style scoped>
.header-bottom {
  display: flex;
  padding-bottom: 5px;
  margin-top: 5px;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}

.link-tag.router-link-exact-active {
  font-size: 13px;
  text-align: center;
  text-decoration: auto;
  color: #000000;
}
.link-tag {
  font-size: 13px;
  text-align: center;
  text-decoration: auto;
  color: #0b857d8e;
}
</style>