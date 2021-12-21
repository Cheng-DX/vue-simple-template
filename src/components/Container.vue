<template>
  <el-container class="container">
    <el-aside width="auto" :style="minWidth">
      <slider :menuCollapse="collapse" />
    </el-aside>
    <el-container>
      <el-header height="auto">
        <div class="header-top">
          <div class="icon">
            <el-button
              class="button"
              :icon="menuIcon"
              @click="collapse = !collapse"
            />
          </div>
          <breadcrumb />
          <toolbar />
        </div>
        <div class="header-bottom" v-show="routerTagVisible">
          <el-tag
            v-for="route in catchedRoutes"
            :key="route.path"
            type="success"
            :closable="routerTagClosable"
            @close="removeRoute(route)"
            style="margin-right: 10px"
          >
            <router-link :to="route.path" class="link-tag">
              <i :class="routeIcon(route)"/>
              {{ route.name }}
            </router-link>
          </el-tag>
        </div>
      </el-header>
      <el-main class="main">
        <transition :name="switchType">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import breadcrumb from "./Breadcrumb.vue";
import Slider from "./Slider.vue";
import Toolbar from "./Toolbar.vue";
export default {
  name: "Container",
  components: { breadcrumb, Slider, Toolbar },
  data() {
    return {
      collapse: false,
    };
  },
  computed: {
    minWidth() {
      if (this.collapse) {
        return {
          minWidth: "0px",
        };
      } else {
        return {
          minWidth: "200px",
        };
      }
    },
    menuIcon() {
      if (this.collapse) {
        return "el-icon-s-unfold";
      } else {
        return "el-icon-s-fold";
      }
    },
    switchType() {
      return this.$store.state.switchType;
    },
    catchedRoutes() {
      return this.$store.state.catchedRoutes;
    },
    routerTagVisible(){
      return this.$store.state.routerTagVisible;
    },
    routerTagClosable(){
      return this.$store.state.routerTagClosable;
    },
  },
  methods: {
    routeIcon(route) {
      if (route.meta != undefined && route.meta.icon != undefined) {
        return route.meta.icon;
      } else {
        return "el-icon-document";
      }
    },
    removeRoute(route) {
      this.$store.commit("removeRoute", route);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 97vh;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-bottom {
  height: 33px;
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
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
  color: #0b857cc4;
}
.icon {
  display: flex;
  vertical-align: middle;
  background: transparent;
  height: 100%;
  padding: 0 5px;
}
.button.el-button {
  background: transparent;
  font-size: 22px;
  border: none;
  padding: 0;
}
</style>