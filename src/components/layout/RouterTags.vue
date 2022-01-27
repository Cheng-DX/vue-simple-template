<template>
  <el-collapse-transition>
    <div class="header-bottom" v-show="routerTagVisible">
      <el-tag
        v-for="item in routerTagObj.showingRoutes"
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

      <template v-if="isAll">
        <el-tag
          v-for="item in routerTagObj.hiddenRoutes"
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
      </template>

      <el-tag
        v-if="routerTagObj.hiddenRoutes.length !== 0"
        :type="isAll ? 'danger' : 'primary'"
        @click="isAll = !isAll"
        style="cursor: pointer"
        :style="{
          marginRight: '10px',
          marginBottom: '5px'
        }"
      >
        <i :class="isAll ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></i>
        {{ isAll ? "关闭" : "展开更多" }}</el-tag
      >
    </div>
  </el-collapse-transition>
</template>

<script>
export default {
  name: "RouterTags",
  data() {
    return {
      isAll: false,
    };
  },
  methods: {
    removeRoute(route) {
      this.$store.commit("removeRoute", route);
    },
  },
  computed: {
    maxMount(){
      return this.$store.state.maxMount;
    },
    routerTagObj() {
      const allRoutes = this.$store.state.catchedRoutes;
      let routerTagObj = {
        showingRoutes: [],
        hiddenRoutes: [],
      };
      if (allRoutes.length > this.maxMount) {
        routerTagObj.showingRoutes = allRoutes.slice(0, this.maxMount);
        routerTagObj.hiddenRoutes = allRoutes.slice(this.maxMount);
        this.isAll = false;
      } else {
        routerTagObj.showingRoutes = allRoutes;
      }
      return routerTagObj;
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