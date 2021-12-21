<template>
  <div class="root">
    <el-row :gutter="30">
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
              style="width: 100%"
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
              style="width: 50%; margin-top: 20px"
              >Commit</el-button
            >
          </setting-card>
          <setting-card>
            <template #title>
              <i class="el-icon-setting icon"></i>
              <span>是否显示路由标签</span>
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
              <span>路由标签是否可关闭</span>
            </template>
            <el-switch
              v-model="routerTagClosable"
              @change="changeClosable"
              active-color="#13ce66"
              style="margin-left: 30px"
            />
          </setting-card>
        </div>
      </el-col>
      <el-col :span="7" class="col">transparent</el-col>
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
    };
  },
  created() {
    this.$axios.get("/switchTypeList").then((res) => {
      this.switchTypeList = res.data;
      this.switchType = this.$store.state.switchType;
      this.routerTagVisible = this.$store.state.routerTagVisible;
      this.routerTagClosable = this.$store.state.routerTagClosable;
    });
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
  },
};
</script>

<style scoped>
.root {
  border-radius: 25px;
  background: rgba(243, 240, 240, 0.425);
}
.col {
  /* background-color: rgb(214, 67, 67); */
  border-radius: 20px;
  padding: 30px;
  height: 100vh;
  margin: 20px;
}
.icon {
  margin-right: 10px;
}
</style>