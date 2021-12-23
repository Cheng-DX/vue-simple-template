<template>
  <div class="root">
    <el-row :gutter="35">
      <el-col :span="7" class="col">
        <div style="height: auto">
          <setting-card>
            <template #title>
              <i class="el-icon-setting icon"></i>
              <span>显示路由标签</span>
            </template>
            <el-switch
              v-model="routerTagVisible"
              @change="changeVisible"
              style="margin-left: 30px"
            />
          </setting-card>
          <setting-card>
            <template #title>
              <i class="el-icon-setting icon"></i>
              <span>路由标签可关闭</span>
            </template>
            <el-switch
              v-model="routerTagClosable"
              @change="changeClosable"
              active-color="#13ce66"
              style="margin-left: 30px"
            />
          </setting-card>
          <setting-card>
            <template #title>
              <i class="el-icon-setting icon"></i>
              <span>全部关闭时隐藏Tag栏</span>
            </template>
            <el-switch
              v-model="notShownWhenEmpty"
              @change="changeShown"
              active-color="#F56C6C"
              style="margin-left: 30px"
            />
          </setting-card>
          <setting-card>
            <template #title>
              <i class="el-icon-setting icon"></i>
              <span>关闭当前路由标签后</span>
            </template>
            <el-select
              v-model="closeEvent"
              placeholder="请选择"
              class="selector"
            >
              <el-option
                v-for="event in closeEventList"
                :key="event.value"
                :value="event.value"
                :label="event.label"
              ></el-option>
            </el-select>
            <el-button
              type="primary"
              @click="commitCloseEvent"
              class="commit-button"
              >Commit</el-button
            >
          </setting-card>
          <setting-card>
            <template #title>
              <i class="el-icon-setting icon"></i>
              <span>路由标签颜色</span>
            </template>
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
          <setting-card>
            <template #title>
              <i class="el-icon-setting icon"></i>
              <span>页面之间的切换动画</span>
            </template>
            <el-select
              v-model="switchType"
              placeholder="请选择"
              class="selector"
            >
              <el-option
                v-for="item in switchTypeList"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              />
            </el-select>
            <el-button
              type="primary"
              @click="commitSwitchType"
              class="commit-button"
              >Commit</el-button
            >
          </setting-card>
          <setting-card>
            <template #title>
              <i class="el-icon-setting icon"></i>
              <span>显示面包屑导航</span>
            </template>
            <el-switch
              v-model="breadcrumbVisible"
              @change="changeBreadcrumbVisible"
              style="margin-left: 30px"
            />
          </setting-card>
        </div>
      </el-col>
      <el-col :span="7" class="col">s</el-col>
    </el-row>
  </div>
</template>

<script>
import SettingCard from "../../components/SettingCard.vue";
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
    commitSwitchType() {
      this.$store.commit("setSwitchType", this.switchType);
      this.$message({
        message: "Switch!",
        type: "success",
      });
    },
    changeVisible(newVal) {
      this.$store.commit("setRouterTagVisible", newVal);
    },
    changeClosable(newVal) {
      this.$store.commit("setRouterTagClosable", newVal);
    },
    commitCloseEvent() {
      this.$store.commit("setRouterTagCloseEvent", this.closeEvent);
      this.$message({
        message: "Switch!",
        type: "success",
      });
    },
    changeColor() {
      this.$store.commit("setRouterTagColor", this.routerTagColor);
    },
    changeShown() {
      this.$store.commit("setNotShownWhenEmpty", this.notShownWhenEmpty);
    },
    changeBreadcrumbVisible() {
      this.$store.commit("setBreadcrumbVisible", this.breadcrumbVisible);
    },
  },
};
</script>

<style scoped>
.root {
  border-radius: 10px;
  background: rgba(243, 240, 240, 0.548);
  height: 100%;
}
.col {
  border-radius: 5px;
  padding-left: 30px;
}
.icon {
  margin-right: 10px;
}
.commit-button {
  width: 100%;
  margin-top: 20px;
}
.selector {
  width: 100%;
}
</style>