<template>
  <div class="root">
    <el-row style="height: 100%" :gutter="35">
      <el-col :span="7" class="col">
        <div style="height: auto">
          <setting-card
            title="显示路由标签"
            type="switch"
            :switch-model="routerTagVisible"
            :switch-change="changeVisible"
          />
          <setting-card
            title="路由标签可关闭"
            type="switch"
            :switch-model="routerTagClosable"
            :switch-change="changeClosable"
            active-color="green"
          />
          <setting-card
            title="全部关闭时隐藏Tag栏"
            type="switch"
            :switch-model="notShownWhenEmpty"
            :switch-change="changeShown"
            active-color="#F56C6C"
          />
          <setting-card
            title="关闭当前路由标签后"
            type="selector"
            :selector-model="closeEvent"
            :options="closeEventList"
            :selector-change="commitCloseEvent"
          />
          <setting-card title="路由标签颜色">
            <el-color-picker
              v-model="routerTagColor"
              @change="changeColor"
              :predefine="predefineColorList"
              show-alpha
              style="margin-left: 30px"
            />
          </setting-card>
        </div>
      </el-col>
      <el-col :span="7" class="col">
        <div style="height: auto">
          <setting-card
            title="页面之间的切换动画"
            type="selector"
            :selector-model="switchType"
            :options="switchTypeList"
            :selector-change="commitSwitchType"
          />
          <setting-card
            title="显示面包屑"
            type="switch"
            :switch-model="breadcrumbVisible"
            :switch-change="changeBreadcrumbVisible"
          />
        </div>
      </el-col>
      <el-col :span="7" class="col"></el-col>
    </el-row>
  </div>
</template>

<script>
import SettingCard from "components/SettingCard.vue";
export default {
  components: { SettingCard },
  data() {
    return {
      switchTypeList: [],
      switchType: "",
      routerTagVisible: null,
      routerTagClosable: null,
      closeEventList: [],
      closeEvent: null,
      routerTagColor: null,
      notShownWhenEmpty: null,
      predefineColorList: ["#f0f9eb", "#f4f4f5", "#fdf6ec", "#fef0f0"],
      breadcrumbVisible: null,
    };
  },
  created() {
    this.$axios.get("/switchTypeList").then((res) => {
      this.switchTypeList = res.data;
      this.switchType = this.$store.state.switchType;
    });
    this.routerTagVisible = this.$store.state.routerTagVisible;
    this.routerTagClosable = this.$store.state.routerTagClosable;
    this.$axios.get("/routerTagCloseEventList").then((res) => {
      this.closeEventList = res.data;
      this.closeEvent = this.$store.state.routerTagCloseEvent;
    });
    this.routerTagColor = this.$store.state.routerTagColor;
    this.notShownWhenEmpty = this.$store.state.notShownWhenEmpty;
    this.breadcrumbVisible = this.$store.state.breadcrumbVisible;
  },
  methods: {
    commitSwitchType(newVal) {
      this.$store.commit("setSwitchType", newVal);
    },
    changeVisible(newVal) {
      this.$store.commit("setRouterTagVisible", newVal);
    },
    changeClosable(newVal) {
      this.$store.commit("setRouterTagClosable", newVal);
    },
    commitCloseEvent(newVal) {
      this.$store.commit("setRouterTagCloseEvent", newVal);
    },
    changeColor() {
      this.$store.commit("setRouterTagColor", this.routerTagColor);
    },
    changeShown(newVal) {
      this.$store.commit("setNotShownWhenEmpty", newVal);
    },
    changeBreadcrumbVisible(newVal) {
      this.$store.commit("setBreadcrumbVisible", newVal);
    },
  },
};
</script>

<style scoped>
.root {
  border-radius: 10px;
  background: rgba(243, 240, 240, 0.548);
}
.col {
  border-radius: 5px;
  padding-left: 30px;
}
</style>