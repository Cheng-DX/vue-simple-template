<template>
  <el-container class="container">
    <el-aside width="auto" :style="minWidth" class="the-aside">
      <slider :menuCollapse="collapse" />
    </el-aside>
    <el-container>
      <el-header height="auto">
        <el-collapse-transition>
          <div class="header-top" v-show="breadcrumbVisible">
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
        </el-collapse-transition>

        <el-collapse-transition>
          <div class="header-bottom" v-show="routerTagVisible">
            <el-tag
              v-for="item in catchedRoutes"
              :key="item.path"
              type="success"
              :closable="routerTagClosable"
              @close="removeRoute(item)"
              :style="{
                marginRight: '10px',
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
  created() {
    this.collapse = this.$store.state.collapse;
  },
  watch: {
    collapse(val) {
      this.$store.commit("setCollapse", val);
    },
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
    breadcrumbVisible() {
      return this.$store.state.breadcrumbVisible;
    },
  },
  methods: {
    removeRoute(route) {
      this.$store.commit("removeRoute", route);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
.the-aside{
  background: #545c64;
}
.header-top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header-bottom {
  height: 33px;
  padding-bottom: 5px;
  margin-top: 5px;
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
  color: #0b857d8e;
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