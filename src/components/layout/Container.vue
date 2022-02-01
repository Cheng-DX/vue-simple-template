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
        <router-tags/>
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
import RouterTags from "./RouterTags.vue";
export default {
  name: "Container",
  components: { breadcrumb, Slider, Toolbar, RouterTags },
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
    breadcrumbVisible() {
      return this.$store.state.breadcrumbVisible;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
.the-aside {
  background: #545c64;
}
.header-top {
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
.main{
  padding-inline: 20px;
  padding-top: 5px;
  padding-bottom: 10px;
}
</style>